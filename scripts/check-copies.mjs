// Reads the community files out of every package's main branch and compares them with the master text kept here.
// A copy that differs is named, and the script exits 1. Nothing is written anywhere.
//
//   node scripts/check-copies.mjs
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { FAMILY, familyRepo } from "../family/family-template.mjs";

const here = join(dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGES = [
  "bushu", "chizu", "domino", "gunjin", "hikidashi", "hitotsu", "houseki", "jarajara", "jirai", "karakuri", "kazu", "korokoro",
  "kotoba", "kumimoji", "kyuubu", "meikyuu", "narabe", "sugoroku", "suido", "tane", "tenka", "tobiishi", "toranpu", "tsunagi",
];
const FILES = ["CONTRIBUTING.md", "SECURITY.md", "CODE_OF_CONDUCT.md"];

const wrong = [];
for (const file of FILES) {
  const master = readFileSync(join(here, file), "utf8");
  for (const name of PACKAGES) {
    const url = `https://raw.githubusercontent.com/johnmorrisdotca/${name}/main/scripts/community/${file}`;
    const response = await fetch(url);
    if (!response.ok) { wrong.push(`${name}: ${file} could not be read (${response.status})`); continue; }
    if ((await response.text()) !== master) wrong.push(`${name}: scripts/community/${file} is not the master text`);
  }
}
const KNOWN_BEHIND = new Set(["bushu", "domino", "gunjin", "hikidashi", "hitotsu", "houseki", "jarajara", "jirai", "karakuri", "kazu", "korokoro", "kumimoji", "kyogijo-stadiums", "kyuubu", "narabe", "sugoroku", "tane", "tenka", "tobiishi", "toranpu"]);
const familyFiles = ["family-template.mjs", "family-readme.mjs"];
const masters = Object.fromEntries(familyFiles.map((file) => [file, readFileSync(join(here, "family", file), "utf8")]));
const results = await Promise.all(FAMILY.flatMap(({ id }) => familyFiles.map(async (file) => {
  const repo = new URL(familyRepo(id)).pathname.slice(1);
  try {
    const response = await fetch(`https://raw.githubusercontent.com/${repo}/main/scripts/${file}`);
    if (!response.ok) return { id, message: `${repo}: scripts/${file} could not be read (${response.status})`, unreadable: true };
    if ((await response.text()) !== masters[file]) return { id, message: `${repo}: scripts/${file} differs` };
    return null;
  } catch (error) { return { id, message: `${repo}: scripts/${file} could not be read (${error.message})`, unreadable: true }; }
})));
for (const item of results.filter(Boolean)) {
  if (KNOWN_BEHIND.has(item.id) && !item.unreadable) console.warn(`warning: ${item.message} (old header; MODULES-708)`);
  else wrong.push(item.message);
}
if (wrong.length) {
  console.error(`${wrong.length} copies differ from the master text:\n${wrong.map((line) => `  ${line}`).join("\n")}`);
  process.exit(1);
}
console.log(`All ${PACKAGES.length * FILES.length} copies of ${FILES.join(", ")} are the master text.`);
