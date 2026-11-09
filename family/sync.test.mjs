import assert from "node:assert/strict";
import { test } from "node:test";
import { FAMILY, FAMILY_TEMPLATE_VERSION } from "./family-template.mjs";
import { parseArgs, repoName, updateTest } from "./sync.mjs";

const hash = "a".repeat(64);
const writer = "b".repeat(64);
const fixture = `const TEMPLATE = { version: "old", sha256: "${"0".repeat(64)}" };\nconst WRITER_SHA = "${"1".repeat(64)}";\nassert.equal(template.FAMILY.length, 32);`;

test("arguments choose exactly one set and validate names", () => {
  assert.deepEqual(parseArgs(["--only", "hoshi-stars,kuni", "--dry-run"]), { ids: ["hoshi-stars", "kuni"], dryRun: true, branch: "chore/family-sync" });
  assert.equal(parseArgs(["--all", "--branch", "chore/update"]).ids.length, FAMILY.length);
  for (const args of [[], ["--all", "--only", "kuni"], ["--only", "unknown"], ["--only", "kuni,,bushu"], ["--all", "--branch", "main"], ["--dry-run"]]) assert.throws(() => parseArgs(args));
});

test("updates the recorded template, writer and count", () => {
  const updated = updateTest(fixture, FAMILY_TEMPLATE_VERSION, hash, 41, writer);
  assert.match(updated, /version: "2026-11-09"/);
  assert.ok(updated.includes(hash));
  assert.ok(updated.includes(writer));
  assert.match(updated, /FAMILY\.length, 41/);
  assert.equal(updateTest("no pin", FAMILY_TEMPLATE_VERSION, hash, 41, writer), null);
});

test("refuses hard-coded family ids", () => {
  assert.equal(updateTest(`${fixture}\nassert.deepEqual(FAMILY.map(x => x.id), ["a", "b"]);`, FAMILY_TEMPLATE_VERSION, hash, 41, writer), null);
  assert.equal(updateTest(`${fixture}\nconst FAMILY_IDS = ["a", "b"];`, FAMILY_TEMPLATE_VERSION, hash, 41, writer), null);
});

test("repository names use each entry's configured owner", () => {
  assert.equal(repoName("hoshi-stars"), "johnmorrisdotca/hoshi-stars");
  assert.equal(repoName("rest-in-pieces"), "spxis/rest-in-pieces");
  assert.throws(() => repoName("missing"));
});

test("updates inline Vitest pins", () => {
  const input = `expect(FAMILY_TEMPLATE_VERSION).toBe("old");\nexpect(sha("scripts/family-template.mjs")).toBe("${"0".repeat(64)}");\nexpect(sha("scripts/family-readme.mjs")).toBe("${"1".repeat(64)}");\nexpect(FAMILY).toHaveLength(33);`;
  const output = updateTest(input, FAMILY_TEMPLATE_VERSION, hash, 41, writer);
  assert.ok(output.includes(hash) && output.includes(writer));
  assert.match(output, /toHaveLength\(41\)/);
});
