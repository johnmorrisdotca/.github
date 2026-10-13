# Rules for every Codex task (read first)

These are John Morris's standing rules. They override any default of your own.

- **No AI attribution, anywhere, ever.** No Co-Authored-By trailer, no "Generated with", no mention of Codex/AI/assistants in commits, PRs, docs or code.
- **Authors:** commit as the repo's existing author (`git log -5 --format='%an <%ae>'`): `John Morris <john@johnmorris.ca>` in most johnmorrisdotca repos; `John Morris <john@spxis.com>` in kuni, address-plus and spxis/rest-in-pieces. Set `git config user.email` locally if needed.
- **Never push, tag, publish to npm, or create releases.** Work on a branch (`codex/<task>`) in a worktree under `~/Projects/<repo>-worktrees/codex-<task>`; John or Claude reviews and lands it.
- **Never `git add -A`.** Stage files by name. Small, well-described commits.
- **Every repo's own gate must be green before you stop:** read package.json; usually `pnpm check` and `pnpm test:demo` (and `pnpm test:readme`, `pnpm test:package` where they exist).
- **Docs are never trimmed for length**; READMEs stay under 64,000 characters by moving detail to `docs/`.
- **Japanese text:** keep the existing tone; mark anything you write as needing review in your hand-off (Claude's japanese-reviewer checks it before release).
- **Money:** nothing that bills. No paid services, no new hosted services, nothing on a timer. Public repos only use GitHub Actions; never add workflow jobs without saying so.
- **Local ports:** only the repo's block (itsutsu 6700–6799, rest-in-pieces 6800–6899; packages use 6900–7299 — check `lsof -iTCP:<port> -sTCP:LISTEN` first). Never 3000–3099.
- **Backups/scratch files** go outside repos (`~/Projects/backups/<project>/` or /tmp), never in a checkout.
- **Hand-off:** a short English report at `drafts/codex/reports/<task>.md` in this repo: what changed, branch name, check results, anything for John to decide.
- **Docs move with the code** (John, 2026-10-09): every change a user could notice updates its docs in the same branch: CHANGELOG Unreleased, the README section, TSDoc/OpenAPI, docs/ guides, the demo's help text, every shipped language, pictures, and any sentence the change made false (grep README.md, docs/ and the demo for the old behaviour). The full rule is `../DOCS-UPKEEP-STANDARD.md`. A ticket is not done without it.
