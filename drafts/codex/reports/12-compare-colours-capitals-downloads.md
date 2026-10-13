# 12 — Colours, capitals and list downloads

Status: done locally on 2026-10-11. The released Sonnet portion is retained. The completed builder/download continuation is on `codex/12-colours-capitals-downloads`, stacked on ticket 02, in the four worktrees below. All four are clean and committed. Nothing pushed, tagged, published or merged.

## Completed continuation

- Chizu map/locator embeds and their builder/frame accept validated per-region `colors` and a reflected `capital` switch, default on. `capital="off"` omits capital shapes even with all features selected. Colour pairs reuse native `isChizuColour`, retain commas in rgb()/hsl(), and translate ISO subdivision keys to native region codes. Public `readMapColors` has executable documentation. Native drawing/mount defaults and the quiz question pool are unchanged; quiz colour settings remain available.
- Kuni cards accept per-region hex colour attributes and map capital markers, default on. Capital text fields remain separate. Native Chizu draws both colours and its built-in capital layer; a host map loader receives optional drawing settings as its third argument, retaining compatibility with two-argument loaders. Public `readCardColors` rejects malformed attribute values. Host `options.colors` retains native CSS colour forms. Development tests now use released Chizu 1.4.0; there is no runtime npm dependency.
- address-plus bulk tables gain Markdown and SQL downloads, preserving the CSV columns and seven-country fields. Missing fields become SQL NULL. Kyuubu solve histories gain the same formats using native summaries, retaining time/size/scramble/moves/count/solved/seconds/seed. Existing downloads are unchanged.
- Family inventory found no other record-list download buttons. Tane and Toranpu expose serialization/copy of game or random state, rather than a downloadable record table, so those formats remain unchanged. REST in Pieces keeps its own SQL writer; its double-quoted identifiers, doubled single quotes and NULL conventions agree.
- Kyuubu’s full gate now builds before tests that import distribution files; a check with dist removed passed. address-plus explicitly includes the byte-identical shared JavaScript test in its TypeScript-focused test configuration. Shared files are excluded from address-plus formatting so the required byte identity holds; lint still runs. No workflow jobs were added.

## Final commits and checks

| Package | Last commit | Passed gates | Tests |
| --- | --- | --- | --- |
| chizu | `ef453f67b9946198245e88a2f84c940fea8fe67e` | `pnpm check`; `pnpm test:readme`; `pnpm test:package`; `pnpm test:demo --workers=2` | 336 source tests; 181 README/API examples; 225 browser tests |
| kuni | `0f27f81621f8df654dd806177bec716e4d281dcb` | `pnpm check`; `pnpm test:demo --workers=2` | 228 source/documentation tests; 120 browser tests; installed ESM/CommonJS/types |
| address-plus | `1bd1028e27940fecf766d5cb694028484d22687a` | `pnpm check`; `pnpm test:demo --workers=2` | 4,733 passed; one existing skip, 22 existing todo; 108 browser tests |
| kyuubu | `b2bacd34bc356ebaf236108dc6bbc1cd25030a7d` | `pnpm check`; `pnpm test:readme`; `pnpm test:package`; `pnpm test:site --workers=2` | 360 source tests; 328 browser tests, eight existing skips; cold gate passed |

Complete gate results: `/tmp/family-12-final-gates/results.json` and the per-package logs named there. Added focused browser tests passed: Chizu 24, Kuni 24, address-plus 14 and Kyuubu 3. Final source/documentation repeats and the cold build check passed; their logs replace the earlier check entries in results.json. The initial cube run needed a bootstrap build, the initial country builder had an incorrect coverage declaration, and the colour-parser example had its expected-output comments in the wrong place; all are corrected and the affected gates rerun. No test was removed or relaxed.

## Shared writers

`demo/downloads.js` SHA-256: `6baed5d0d7fb76b07f556a394ee09aa98613537ee33b65b742d7460060b8cc0d`. The shared test SHA-256 is `155b785ecb915d6bb46b71da8cd1e8d25914de7e7bd4d9c0e410e7383ae4a604`. Both are byte-identical in Hata, Chizu, Kuni, address-plus and Kyuubu (the test lives in test/ for Kyuubu). All ten shared tests run in each new adopter and prove escaping, Markdown round trips and SQLite execution, including 東京, quotes, pipes, newlines, NULL, large integers and leading-zero text.

SQLite was executed; PostgreSQL and MySQL portability follows the existing writer and was not tested against those servers. MySQL requires ANSI_QUOTES and NO_BACKSLASH_ESCAPES, stated in the download file, guides and new UI help.

The family template remains unchanged at version `2026-10-11-seven-country-embeds`, SHA-256 `08e9d500321ad4b7c3b86935362459c847a67fc62a448bef98d2dda4ec6aa495`. All four READMEs remain below 64,000 characters.

## Docs, Japanese review and screenshots

Unreleased changelogs, README feature sections, native TSDoc, embed/list guides and demo help are updated on the same branches. Existing generated native Japanese lists are unchanged and their gates pass. New Japanese is **needs review**: Chizu/Kuni builder colour/capital labels, help and validation text; docs/embed-colours-ja.md in both; address-plus bulk Markdown/SQL tooltips/help; Kyuubu save labels/help; the Japanese sections of both new docs/list-downloads.md guides. French remains ticket 06.

Viewed screenshots, made from the local demo with distinct blue/amber outlines and capitals off:
- `/Users/john/Library/Mobile Documents/com~apple~CloudDocs/Projects/Codex/2026-10-09/can-x20/outputs/12-kuni-compare-390-capitals-off.png`
- `/Users/john/Library/Mobile Documents/com~apple~CloudDocs/Projects/Codex/2026-10-09/can-x20/outputs/12-kuni-compare-1280-capitals-off.png`

The unchanged README hero/native-game pictures do not depict the altered builder or save controls, so they remain current. No unresolved decision blocks this local ticket.

## Released Sonnet implementation notes (historical)

Branch `claude/12-colours-capitals-downloads` in kuni, chizu and hata (worktrees `~/Projects/<repo>-worktrees/claude-12`), one commit each, authored as each repo's own author. Nothing pushed, tagged or published. The embed builders, custom elements and family template/readme scripts were not touched.

## What changed

### kuni (5802c45)
- **Compare tab** (`demo/views/compare.js`): a colour picker for each country (defaults: the family green `#2f5d4a` and red `#b5452c`, never the same), and a "Show capitals" toggle button. All kept in the address: `#/compare/JP/GB?colours=2f5d4a,b5452c&capitals=off` (the query is left out while it is the default). A path with no query resets to the defaults; the tab link alone keeps the last look. Swap takes each country's colour with it. A bad colour in a link falls back to the default.
- Outlines are coloured from CSS custom properties (`--outline-fill`, `--outline-line`, `--outline-dot`, `--outline-dot-line`) set on each box, so the country page's outline is unchanged. The capital dot is white or near-black, whichever shows on the chosen colour. The capital dot is removed from the DOM when off (not hidden).
- **kuni does not use chizu's new `colors` option**: kuni draws its own SVG from the chizu country maps it already receives, so it colours that SVG itself. kuni's devDependency stays on chizu 1.0.2; nothing links local paths. When chizu releases, kuni could switch to `drawChizu(..., { colors })`, but there is no need.
- **Downloads**: every list in the demo (all countries, compare, a country, groupings, quiz results, the form's countries and a country's regions) now has Markdown and SQL buttons. Tables are named `countries`, `grouping_members`, `quiz_answers`, `country_names`, `subdivisions`.
- README line, CHANGELOG `[Unreleased]`, `docs/strings-ja.md` regenerated (`pnpm docs:make`).

### chizu (92ab202)
- **`colors` option** on `drawChizu` and `mountChizu` (and `mount.set({ colors })`): `{ JP: "#2f6b4f", GB: "#8a3b3b" }`. Accepts hex, CSS names, `rgb()`/`hsl()` and `var(--name)`; anything else is ignored (so an address or form value cannot break out of the attribute). A coloured region gets `data-color` and `style="--cz-color:…"`; the style fills `.cz-land` and wins over a tone; `selected` + colour keeps a heavier outline. A map drawn without `colors` is byte for byte unchanged. New export `isChizuColour` in `/draw`. TSDoc with `@example`, `docs/colours.md`, README one-liner in "Drawing a map" (README is 63,980 characters: I merged its two duplicate links to `docs/iso-codes.md` into one to make room, no content lost), CHANGELOG `[Unreleased]`.
- **Capital marker: no new option.** chizu already draws capitals as the `capitals` feature (`features: ["capitals"]` with the map's `featureLayer`), off until chosen, and the demo's Features switch already toggles it. Making a capital dot "default on" would change the output of every existing map, so I left it and wrote how to switch it on and off in `docs/colours.md`. There is no chizu compare or quiz view that draws two places side by side, so there was no demo picker to add there.
- **Downloads**: Markdown and SQL beside CSV/JSON/TXT for the places, features, quiz results, callouts list and figures (tables `places`, `features`, `quiz_results`, `callouts`, `figures`).

### hata (0bce756)
- The demo's flag list gets "List (Markdown)" and "List (SQL)" buttons beside "List (TXT)" (table `flags`; code, english, japanese, source, licence, file). The TXT list is unchanged byte for byte. `scripts/site.mjs` has the two buttons. CHANGELOG `[Unreleased]`, `docs/strings-ja.md` regenerated.

### The shared writers (identical in all three)
`demo/downloads.js` (sha256 `6baed5d0…`) and its test `src/downloads.test.js` (sha256 `155b785e…`) are byte-identical in kuni, chizu and hata; the test holds the module to its own hash.
- `toMarkdown(columns, rows)`: GitHub table; `|` -> `\|`, `\` -> `\\`, line breaks -> `<br>`; number columns right-aligned; empty for missing values.
- `toSql(name, columns, rows)`: `CREATE TABLE` + one `INSERT` a row; double-quoted identifiers (`"` doubled), single-quoted strings (`'` doubled), NULL for missing, INTEGER (BIGINT past 32 bits) / REAL / TEXT chosen from the values, booleans 1/0, numeric-looking strings stay TEXT (leading zeros survive), no primary key (MySQL cannot key TEXT). A comment on line 2 tells MySQL users to `SET sql_mode = 'ANSI_QUOTES,NO_BACKSLASH_ESCAPES';` first. Verified in SQLite only; PostgreSQL and MySQL are by construction, not run.
- Columns are strings or `{ key, label }`, so chizu's existing column objects work as they are.
- Tests (10, same in each repo): Markdown round-trips cell text (parsed back, including `|`, a backslash, a quote, a line break, 東京); the SQL loads into SQLite via `node:sqlite` (Node 24, no new dependency) and the row count and values match, including 東京, `O'Brien's`, a pipe, a newline, NULLs, a 3,000,000,000 value, and `"044"` staying text. Playwright tests in each repo also load the downloaded SQL (chizu, hata) or check the file (kuni).

## Checks (all green)
| Repo | `pnpm check` | `pnpm test:demo` | other |
|---|---|---|---|
| kuni | pass (197 tests, package check) | 96 passed | |
| chizu | pass (330 tests) | 195 passed | `test:readme` 158 examples hold; `test:package` ok |
| hata | pass (90 tests, docs, package check) | 116 passed (4 skipped as before) | `test:package` ok |

New browser tests: kuni `e2e/compare.demo.mjs` (outlines differ in colour, capitals off removes the dot, a shared link and a reload restore both colours and the toggle, a second browser given the link sees it, swap carries colours, bad colour falls back, Markdown/SQL of a pair); chizu `e2e/colors.demo.mjs` (mounted map fills differ, colour beats tone, bad values refused) and `e2e/downloads.demo.mjs` (SQL loaded into SQLite: 47 rows, 東京都); hata `e2e/gallery.demo.mjs` (Markdown table and SQL: 45 rows, 東京都). I changed two existing kuni assertions: the swap test now allows the `?colours=` query after the countries.

## Screenshots (viewed)
In the session scratchpad `/private/tmp/claude-501/-Users-john-Projects-itsutsu/3a3caf6b-5f0a-433b-a5ee-507eafe78daf/scratchpad/`:
- `s12-compare-390-capitals-off.png`, `s12-compare-1280-capitals-off.png` (blue and amber, no dots)
- `s12-compare-390-default-ja.png`, `s12-compare-1280-default-ja.png` (defaults, Japanese, capitals on)

## New Japanese, needs review (japanese-reviewer)
kuni `demo/words.js`:
- `help_compare_look`: 輪郭の色を国ごとに選び、首都の点を表示するか隠すか選べます。色と点の設定はアドレスに入るので、リンクを共有すると同じ見た目で開きます。 (Colour each outline per country and choose to show or hide the capital's dot; the colours and dots are kept in the address, so a shared link opens looking the same.)
- `compare_colour`: {name}の色 (colour of {name})
- `compare_capitals`: 首都を表示 (Show capitals)
- `compare_capitals_tip`: 各国の首都の点を表示または非表示にします
- `download_md`: READMEやメモ用のMarkdownの表でダウンロード
- `download_sql`: データベースに読み込めるSQLでダウンロード

hata `demo/words.js` and `scripts/site.mjs`:
- `download_list_md`: 一覧（Markdown）; `download_list_sql`: 一覧（SQL）
- tooltip (md): 表示中の旗の一覧（コード、英語名、日本語名、出典、ライセンス）をREADMEやメモ用のMarkdownの表で保存します。
- tooltip (sql): 表示中の旗の一覧を、データベースに読み込める flags テーブルのSQLで保存します（コード、英語名、日本語名、出典、ライセンス、ファイル）。

chizu: no new Japanese (the buttons read "Markdown" and "SQL").

## Left for Codex's builder part (after ticket 02)
- Builder options for the embeds: kuni card / chizu map `colors` (chizu `colors="JP:#2f6b4f,GB:#8a3b3b"` as an attribute would parse into the `colors` object; `isChizuColour` is there to validate each value) and the capitals on/off (chizu: `features: ["capitals"]` plus a layer; kuni's card: its own dot, same as Compare's `showCapitals`).
- Markdown/SQL buttons for any other package's demo list with a CSV/JSON download (I did kuni, chizu, hata only); copy `demo/downloads.js` and `src/downloads.test.js` unchanged and keep the hash line. REST in Pieces' own SQL output is untouched; the quoting rules above (double-quoted names, `''` doubling, NULL) are the ones to make it agree with.
- If `FAMILY_TEMPLATE` ever lists shared demo files, `demo/downloads.js` belongs on that list.
- Release: nothing bumped; all three have `[Unreleased]` entries. kuni and hata `main` are at 1.1.0 and 1.3.0, chizu at 1.2.0.
