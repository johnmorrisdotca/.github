# Ticket 12: per-item colours, a capital toggle, and Markdown/SQL downloads (MED) — Codex, right after 02

John, 2026-10-09, looking at kuni's Compare tab (https://johnmorrisdotca.github.io/kuni/#/compare): "we can change colour
of both at the same time... allow option to have different colours per item. also option to toggle capital, as it seems
permanent right now. does it make sense to offer Markdown or SQL as options for download as well?"

Do it once for the family, not just kuni (see 00-RULES: think ecosystem). Start from 02's branches, since 02 touches kuni
and chizu.

## 1. A colour per item (chizu owns it, kuni uses it)
- The outlines kuni draws come from chizu. Give chizu's drawing (the function, `<chizu-map>` and its embed builder) a
  colour per highlighted place, e.g. `colors: { JP: "#2f6b4f", GB: "#8a3b3b" }` / `colors="JP:#2f6b4f,GB:#8a3b3b"`, with
  the theme colour as the default for any place not named. Check what chizu already has before adding a new option name.
- kuni's Compare tab: one colour picker per country (defaulting to two different family colours, never the same one),
  kept in the address so a shared link shows the same colours. The cloth swatches still set the page theme, not the
  outlines. Do the same anywhere else a demo draws two or more places side by side (chizu's own compare or quiz, if any).
- Japanese and (after 06) French words for the new controls; browser test that the two outlines differ in colour and
  that a link restores them.

## 2. Capital marker on or off
- chizu's drawing already knows capitals. Make the capital dot an option everywhere an outline is drawn (`capital: true`
  default, `capital="off"`), and give kuni's Compare tab a "Show capitals" toggle, in the address too. Same in the
  embed builders that draw a country (kuni card, chizu map).

## 3. Markdown and SQL downloads
Yes, both make sense for lists of records (a Markdown table pastes into a README, an issue or Notion; SQL loads straight
into a database for a demo or a test). Add them beside the existing CSV, JSON and TXT:
- **Markdown**: a GitHub-flavoured table with a header row; escape `|` and newlines in cells.
- **SQL**: `CREATE TABLE <name> (...)` with plain portable types (TEXT, INTEGER, REAL), then `INSERT INTO` rows; quote
  identifiers with double quotes and strings with single quotes, doubling any `'` inside; NULL for missing values; one
  file that runs unchanged in SQLite, PostgreSQL and MySQL (ANSI_QUOTES caveat in the help text). Name the table after
  the list (`countries`, `subdivisions`, `places`, `flags`).
- Put the writers in ONE shared place (the family template or a shared script copied byte-identically, with its hash),
  not per package, and use them everywhere a demo offers a list download: kuni (all countries, groupings, a country's
  subdivisions), chizu (place lists), hata (the list), and any other package with a CSV/JSON download. REST in Pieces
  already has its own SQL output; leave it, but make the two agree on quoting.
- Tests: a Markdown table round-trips its cell text; the SQL runs in SQLite (node's built-in `node:sqlite` or
  `better-sqlite3` as a devDependency) and the row count matches; a value with a quote, a pipe and a non-Latin name
  (東京) survives both.

## Done means
Gates green in every touched repo, screenshots of kuni Compare with two colours and capitals off at 390 px and 1280 px,
new Japanese listed for review, report in reports/12-….md, nothing pushed.
