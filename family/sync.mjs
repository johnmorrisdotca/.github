import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { FAMILY, FAMILY_TEMPLATE_VERSION, familyRepo } from "./family-template.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const template = join(here, "family-template.mjs");
const writer = join(here, "family-readme.mjs");
const hash = (file) => createHash("sha256").update(readFileSync(file)).digest("hex");

/** Parse the command line, rejecting unknown or conflicting options. */
export function parseArgs(args) {
  let only, all = false, dryRun = false, branch = "chore/family-sync";
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--all") all = true;
    else if (args[i] === "--dry-run") dryRun = true;
    else if (args[i] === "--only") { if (only !== undefined || !args[i + 1] || args[i + 1].startsWith("--")) throw new Error("--only needs a comma-separated list"); only = args[++i].split(","); }
    else if (args[i] === "--branch") { if (!args[i + 1] || args[i + 1].startsWith("--")) throw new Error("--branch needs a name"); branch = args[++i]; }
    else throw new Error(`Unknown option: ${args[i]}`);
  }
  if (all === (only !== undefined)) throw new Error("Choose exactly one of --all or --only");
  if (branch === "main" || branch === "master" || branch.startsWith("-") || !/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(branch) || branch.includes("..")) throw new Error("Invalid feature branch");
  const ids = all ? FAMILY.map((item) => item.id) : only;
  if (!ids.length || new Set(ids).size !== ids.length || ids.some((id) => !FAMILY.some((item) => item.id === id))) throw new Error("Unknown, empty or duplicate family id");
  return { ids, dryRun, branch };
}

/** Resolve an id through the master's owner/name, including repositories outside the main owner. */
export function repoName(id) {
  if (!FAMILY.some((item) => item.id === id)) throw new Error(`Unknown family id: ${id}`);
  const url = new URL(familyRepo(id));
  if (url.hostname !== "github.com" || !/^\/[\w.-]+\/[\w.-]+$/.test(url.pathname)) throw new Error(`Invalid repository URL for ${id}`);
  return url.pathname.slice(1);
}

/** Update known pins only; return null when the test needs human review. */
export function updateTest(text, version, templateHash, count, writerHash) {
  if (/FAMILY(?:\.map\([^\n]*\)|\.length)?[\s\S]{0,180}?,\s*\[\s*["'`]/m.test(text) || /(?:const|let)\s+\w*(?:IDS|NAMES|MEMBERS)\w*\s*=\s*\[\s*["'`]/i.test(text)) return null;
  const pin = /(\b(?:const|let)\s+TEMPLATE\s*=\s*\{\s*version\s*:\s*["'])([^"']+)(["']\s*,\s*sha256\s*:\s*["'])([0-9a-f]{64})(["']\s*\})/g;
  const pins = [...text.matchAll(pin)].length;
  let out;
  if (pins === 1) out = text.replace(pin, (_, a, _oldVersion, b, _oldHash, c) => `${a}${version}${b}${templateHash}${c}`);
  else if (pins === 0) {
    const versionPin = /(expect\(FAMILY_TEMPLATE_VERSION\)\.toBe\(["'])[^"']+(["']\))/g;
    const hashPin = /(expect\(sha\(["']scripts\/family-template\.mjs["']\)\)\.toBe\(["'])[0-9a-f]{64}(["']\))/g;
    if ([...text.matchAll(versionPin)].length !== 1 || [...text.matchAll(hashPin)].length !== 1) return null;
    out = text.replace(versionPin, `$1${version}$2`).replace(hashPin, `$1${templateHash}$2`);
    const writerPin = /(expect\(sha\(["']scripts\/family-readme\.mjs["']\)\)\.toBe\(["'])[0-9a-f]{64}(["']\))/g;
    const matches = [...out.matchAll(writerPin)].length;
    if (matches > 1 || (matches === 1 && !writerHash)) return null;
    if (matches === 1) out = out.replace(writerPin, `$1${writerHash}$2`);
  } else return null;
  out = out.replace(/(\bFAMILY\.length\s*,\s*)\d+/g, `$1${count}`);
  out = out.replace(/(expect\(FAMILY\)\.toHaveLength\()\d+(\))/g, `$1${count}$2`);
  if (/\bWRITER_SHA\b/.test(out)) {
    const re = /(\b(?:const|let)\s+WRITER_SHA\s*=\s*["'])[0-9a-f]{64}(["'])/g;
    if ([...out.matchAll(re)].length !== 1 || !writerHash) return null;
    out = out.replace(re, `$1${writerHash}$2`);
  }
  return out;
}

function run(command, args, cwd, options = {}) {
  return execFileSync(command, args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options }).trimEnd();
}
function familyTests(dir) {
  return ["src", "test"].flatMap((folder) => {
    const path = join(dir, folder);
    return existsSync(path) ? readdirSync(path, { recursive: true }).filter((file) => /(?:^|[\\/])family\.test\.[cm]?[jt]sx?$/.test(file)).map((file) => join(folder, file)) : [];
  });
}
function syncOne(id, opts, temp) {
  const repo = repoName(id);
  const dir = join(temp, id);
  let old = "unknown";
  try {
    run("gh", ["repo", "clone", repo, dir, "--", "--depth", "50"], temp);
    const target = join(dir, "scripts/family-template.mjs");
    if (!existsSync(target)) return { repo, old, result: "no family files" };
    const before = readFileSync(target, "utf8");
    old = before.match(/FAMILY_TEMPLATE_VERSION\s*=\s*["']([^"']+)/)?.[1] ?? "unknown";
    if (old === "2026-10-15d" && !before.includes("<kazoku-language-picker")) return { repo, old, result: "old header, see MODULES-708" };
    const tests = familyTests(dir);
    if (tests.length !== 1) return { repo, old, result: `needs a hand edit: ${tests.join(", ") || "family.test.*"}` };
    const testFile = join(dir, tests[0]);
    const updated = updateTest(readFileSync(testFile, "utf8"), FAMILY_TEMPLATE_VERSION, hash(template), FAMILY.length, hash(writer));
    if (updated === null) return { repo, old, result: `needs a hand edit: ${tests[0]}` };
    if (!opts.dryRun) run("git", ["switch", "-c", opts.branch, "origin/main"], dir);
    else run("git", ["switch", "--detach", "origin/main"], dir);
    copyFileSync(template, target);
    copyFileSync(writer, join(dir, "scripts/family-readme.mjs"));
    writeFileSync(testFile, updated);
    const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
    if (pkg.scripts?.["family:readme"]) run("pnpm", ["family:readme"], dir);
    else run("node", ["scripts/family-readme.mjs"], dir);
    run("pnpm", ["install", "--frozen-lockfile"], dir);
    run("pnpm", ["check"], dir);
    const changes = run("git", ["status", "--porcelain"], dir);
    const allowed = new Set(["scripts/family-template.mjs", "scripts/family-readme.mjs", "README.md", tests[0]]);
    const unexpected = changes.split("\n").filter(Boolean).filter((line) => !allowed.has(line.slice(3)));
    if (unexpected.length) throw new Error(`check or writer changed unexpected files: ${unexpected.join(", ")}`);
    if (!changes) return { repo, old, result: "already current", sha: run("git", ["rev-parse", "HEAD"], dir) };
    const stat = run("git", ["diff", "--stat"], dir);
    if (opts.dryRun) return { repo, old, result: `dry-run: ${stat.replaceAll("|", ":").replace(/\s*\n\s*/g, "; ")}` };
    const files = changes.split("\n").map((line) => line.slice(3));
    run("git", ["add", "--", ...files], dir);
    const env = { ...process.env, GIT_AUTHOR_NAME: "John Morris", GIT_AUTHOR_EMAIL: "john@johnmorris.ca", GIT_COMMITTER_NAME: "John Morris", GIT_COMMITTER_EMAIL: "john@johnmorris.ca" };
    run("git", ["commit", "-m", `chore: family footer ${FAMILY_TEMPLATE_VERSION}`], dir, { env });
    const sha = run("git", ["rev-parse", "HEAD"], dir);
    run("git", ["push", "-u", "origin", opts.branch], dir);
    const workflow = join(dir, ".github/workflows/ci.yml");
    let ci = "—";
    if (existsSync(workflow) && /^\s+workflow_dispatch\s*:/m.test(readFileSync(workflow, "utf8"))) {
      const output = run("gh", ["workflow", "run", "ci.yml", "-R", repo, "--ref", opts.branch], dir);
      ci = output.match(/\/runs\/(\d+)/)?.[1] ?? "dispatched";
    }
    return { repo, old, result: "pushed", sha, ci };
  } catch (error) {
    const detail = error.stderr?.toString().trim().split("\n").slice(-3).join(" ") || error.message;
    return { repo, old, result: `failed: ${detail}` };
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const temp = mkdtempSync(join(tmpdir(), "family-sync-"));
  let results;
  try { results = options.ids.map((id) => syncOne(id, options, temp)); }
  finally { rmSync(temp, { recursive: true, force: true }); }
  console.log("repo | old version | result | sha | CI id");
  for (const row of results) console.log(`${row.repo} | ${row.old} | ${row.result} | ${row.sha ?? "—"} | ${row.ci ?? "—"}`);
  if (results.some((row) => row.result.startsWith("failed:"))) process.exitCode = 1;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
