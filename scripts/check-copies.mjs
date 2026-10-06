// Reads the community files out of every package's main branch and compares them with the master text kept here.
// A copy that differs is named, and the script exits 1. Nothing is written anywhere.
//
//   node scripts/check-copies.mjs
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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
if (wrong.length) {
  console.error(`${wrong.length} copies differ from the master text:\n${wrong.map((line) => `  ${line}`).join("\n")}`);
  process.exit(1);
}
console.log(`All ${PACKAGES.length * FILES.length} copies of ${FILES.join(", ")} are the master text.`);
