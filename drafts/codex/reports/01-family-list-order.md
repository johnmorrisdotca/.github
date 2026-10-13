# 01 — Group and order the family list

Branch: `codex/01-family-list-order` in every repository below. Worktrees: `~/Projects/<repo>-worktrees/codex-01`. All changes are committed locally for review.

The shared family now contains 28 packages, grouped by kind and alphabetical within each group. Games have board, cards and tiles, puzzles, and dice and random groups; language, geography and data, and developer tools follow. The footer headings translate with the page. The README writer renders the same groups.

Added address-plus and REST in Pieces, plus Kuni and Hata, which were absent from the old shared template. REST in Pieces uses `github.com/spxis/rest-in-pieces` and its spxis demo while retaining its existing npm package name. Its existing playground footer reads the same canonical groups directly. The three geographic package builders no longer inject their own temporary members.

The template version is `2026-10-09`. Every repository has identical template and README-generator files and updated recorded hashes. The newer repositories now check the shared hashes and generated README block. Older source-text tests now read the exported family rather than dropping names with spaces or hyphens.

Long reference sections were preserved under docs/ in Chizu, Meikyuu, REST in Pieces, Suido, Tenka, Toranpu and Tsunagi. Their README headings and links remain; every README is below 64,000 characters. Toranpu's documentation tests continue to check the moved export/import guide.

## Repository checks

The listed commands passed. Child commands inside each gate also passed. Tenka and Kumimoji call their browser gate test:table, Kyuubu test:site, Korokoro test:tray, and REST in Pieces test:e2e.

| Repository | Commit | Required checks | Result |
| --- | --- | --- | --- |
| domino | 258c4a9 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| gunjin | 6be272d | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| narabe | 02f39ee | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| sugoroku | 485c3a8 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| tenka | 30c3e8b | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:table` | Pass |
| hitotsu | 66b135a | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| jarajara | 7247a44 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| kumimoji | 09d67f1 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:table` | Pass |
| toranpu | d1cd5d5 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| houseki | 78cba4c | `VITEST_MAX_WORKERS=2 pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| jirai | 8d9389f | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| karakuri | b7f4873 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| kazu | bbd39b6 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| kyuubu | 65b5619 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:site` | Pass |
| meikyuu | 7735dee | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| suido | 99fb230 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| tobiishi | 5c86835 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| tsunagi | 925b4bc | `VITEST_MAX_WORKERS=2 pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| korokoro | fcbcebc | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:tray` | Pass |
| tane | dede320 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| bushu | 8e3cace | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| hikidashi | 7e305b3 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| kotoba | ff5de00 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| address-plus | eacfb89 | `pnpm check`, `pnpm test:package`, `pnpm test:demo` | Pass |
| chizu | f3862d5 | `pnpm check`, `pnpm test:readme`, `pnpm test:package`, `pnpm test:demo` | Pass |
| hata | 351171f | `pnpm check`, `pnpm test:package`, `pnpm test:demo` | Pass |
| kuni | d6163bf | `pnpm check`, `pnpm test:package`, `pnpm test:demo` | Pass |
| rest-in-pieces | e4a35e8 | `pnpm check`, `pnpm test:e2e` | Pass |

## Additional verification and initial runs

- Hikidashi pilot: 428 unit tests, 69 passing browser tests and 6 existing skips, all README examples and package-install checks. Added a footer regression test covering seven groups, 28 members, current-page marking, correct links, language switching and phone/desktop width in Chromium and WebKit.
- REST in Pieces: 30 browser tests, including two new tests for the grouped footer in English and Japanese at 390px and 1280px. The normal check includes a package installation and CLI smoke test.
- Shared-file byte hashes were compared across all 28 repositories; there is one hash for each shared file. git diff --check passed throughout.
- Initial checks exposed old template hash, name-parsing and count assertions, plus the larger README blocks. Those were corrected and the affected gates rerun successfully.
- Initial concurrent runs hit five-second unit-test timeouts in Korokoro and Tsunagi. Korokoro passed the normal gate on rerun. Tsunagi's affected tests passed with one worker; its complete gate passed with two workers. Houseki's full content regeneration is a long-running existing test, not an idle test process; two early runs were stopped before that was understood. Its final complete gate passed with two workers. No assertions were disabled and no test deadlines were changed.
- Kuni's first demo build used incomplete shared dependencies; installing its locked dependencies in the isolated worktree fixed it. Tobiishi's first temporary browser configuration omitted the server working directory; the corrected configuration passed all six tests on free port 6901. Jirai used free port 6900. REST in Pieces used its 6800–6899 block.
- Individual diagnostics: `pnpm exec vitest run src/portals.test.ts src/reduce.test.ts --maxWorkers=1 --reporter=verbose` passed 30 Tsunagi tests; `pnpm exec vitest run test/api-reference.test.mjs --maxWorkers=1 --reporter=verbose` passed two Houseki tests. Full `pnpm exec vitest run --maxWorkers=2` runs also passed before the final gates.
- Formatting checks used the repositories' own Prettier/Biome tools. No workflow jobs were added.

Screenshot: `/Users/john/Library/Mobile Documents/com~apple~CloudDocs/Projects/Codex/2026-10-09/can-x20/outputs/family-footer-phone.png` (Hikidashi phone footer, visually reviewed).

Detailed local command logs: `/tmp/family-list-order-logs/`.

## Japanese — needs review

New group labels: ゲーム — ボード; ゲーム — カードと牌; ゲーム — パズル; ゲーム — ダイスと乱数; 言語; 地理とデータ; 開発ツール. New family names include アドレスプラス and レスト・イン・ピーシズ.

New pitches:

- address-plus: アメリカ、カナダ、日本の住所を解析し、整形します
- Hata: 国と地域の旗を、本来の縦横比の SVG で収録し、ISO コードで引けます
- Kuni: 世界の国と行政区画を、ISO コードと英語・日本語の名前で収めています
- REST in Pieces: フロントエンド開発向けの、シード付きテストデータと REST API。遅延やエラーも試せます

REST in Pieces also uses 姉妹パッケージ as the footer navigation label. All new Japanese text needs review. No French text was added.

## Review

Review and land the local branches, including the Japanese text, before release. Nothing was pushed, tagged, published or released. No paid service or recurring job was introduced.
