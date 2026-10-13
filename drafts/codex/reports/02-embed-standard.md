# 02 — Family embed standard

Status: done locally on 2026-10-11. Branch: `codex/02-embed-standard` in all 28 worktrees at `~/Projects/<package>-worktrees/codex-02`. Nothing pushed, tagged, published or merged. All worktrees are clean at the commits below.

The shared builder and reviewed 01b/02b wording are complete in all 28 packages. All 25 ranked embed adoptions are implemented and green. Domino, Gunjin and Houseki retain their existing demos and shared family updates; their embeds are explicitly deferred by the standard. Ticket 12 supplies the separate map/card colour and capital builder controls.

The builder provides native previews, complete option coverage or explicit reasons for exclusions, default omission, Copy/code/link/reset, validated query state, version-pinned code, custom elements, iframe, module and framework formats, plus static images where real files exist. Native package engines and drawing functions remain the implementation. Daily seeds, reflected properties, boolean aliases, shadow-root events, labels, themes, widths and host callbacks are covered by package tests. Frames validate inputs, store nothing and document origin checks. Personal text stays in local getters/callbacks; public address, picker and text-tool messages carry metadata.

Released upstream changes are retained: Hata 1.5.0, Chizu 1.4.0, Kuni 1.3.0, address-plus 1.6.0, Hikidashi 1.0.3 and REST in Pieces 3.1.0. Reconciliation checkpoints and the earlier clean handoff are superseded by this final table.

## Packages and final validation

All listed commands passed at the final file contents. Existing skipped tests are retained; no checks were disabled. Full detailed output is under `/tmp/family-02-final-gates/`; each table row names its executed commands.

| Package | State | Last commit | Adoption | Passed checks |
| --- | --- | --- | --- | --- |
| address-plus | done and green | `798b40914ec39c3b469dd132448a3aba4150a439` | Seven-country form field; entered text stays private | `pnpm test:demo --workers=2`; `pnpm check` |
| bushu | done and green | `5444281a4ebfb6cd5828aed28d08c6cf6386e6bf` | Native picker and guarded host data loading | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| chizu | done and green | `6cdab9c0903390524e884c10a8ad6df845d01e49` | Map, locator and quiz; native callbacks and colours | `pnpm check`; `pnpm test:readme`; `pnpm test:package`; `pnpm test:demo --workers=2` |
| domino | not started (deferred); shared gates green | `0fe3dbeb3b5f15c9a99ce208a30256475bd89715` | Shared builder/template and family text only | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| gunjin | not started (deferred); shared gates green | `17faafd1c992973c5714c648f1e9df5d4362ec69` | Shared builder/template and family text only | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| hata | done and green | `de83fc57d0c2b02d6b117cf7b879fe046209a1ae` | Native flags, released variants and whole/cropped framing | `pnpm test:demo --workers=2`; `pnpm check` |
| hikidashi | done and green | `7fa720a35a9b4663b9b2ab9f71f74c3d3363fc22` | Furigana, era years and numerals; private results and bilingual docs-site guides | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| hitotsu | done and green | `d390479e1a8b3090ff65eb362a5f91e9f8297e19` | Native card table; private player names | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| houseki | not started (deferred); shared gates green | `1f4fef03527460654f6ea164af1c69fa52c8db5f` | Shared builder/template and family text only | `pnpm site`; `pnpm exec playwright test --workers=2`; `node --test --test-concurrency=2 e2e/review/appearance-api.test.mjs e2e/review/boards-settings-and-keys.test.mjs e2e/review/endings.test.mjs e2e/review/full-board-recovery.test.mjs e2e/review/nature-previews.test.mjs e2e/review/responsive.test.mjs`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| jarajara | done and green | `b3af270d9e94264c516bd57f87640a60d345de74` | Rack, native picks and tile events | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| jirai | done and green | `ec79a434fdf017c1e64f17281555ab1db9d96d32` | Native Minesweeper and validated daily seeds | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| karakuri | done and green | `884de6ad160eeb941439d657f37fc3160662e716` | Native keyboard-operated puzzles | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| kazu | done and green | `fc932ddafce10f4d9fca2ae7571553c1a0ba8c27` | Six native puzzle kinds and daily play | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| korokoro | done and green | `404131c1acc8232eaf4f86ad8997177de7d6fa3f` | Roller and die; native tray options | `pnpm check`; `pnpm test:readme`; `pnpm test:package`; `pnpm test:tray --workers=2` |
| kotoba | done and green | `610cd366093d580aac86966a552a77c5868960dc` | Native word game and scoped keyboard | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| kumimoji | done and green | `b6841315ef44a3919b00092fac370c6bb184c3c6` | Native crossword table and existing framework wrappers | `pnpm test:table --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| kuni | done and green | `7d0461a30490a3a7f6f2f1cbe31533e2aef95e01` | Country/subdivision card and optional IOC display | `pnpm check`; `pnpm test:demo --workers=2` |
| kyuubu | done and green | `7795d11030ada8af85973392ef32311b206e213b` | Reference cube builder; complete native option coverage | `pnpm test:site --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| meikyuu | done and green | `cfde774ed5738350e1c32c7aa6d27e4c54633741` | Native maze modes and daily play | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| narabe | done and green | `b32ab00d8a102221e6dc03922d37d3a7d530dd17` | Native positions, validated moves and keyboard replay | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| rest-in-pieces | done and green | `26f4b7fbbdb5f05ece205c85049204c6c9d82571` | Native local sample-data table; safe defaults, no global fetch override | `pnpm test:e2e --workers=2`; `pnpm check` |
| sugoroku | done and green | `1f070f22b1d0d5da2dc48eb713f225098c28f617` | Playable board and static native positions | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| suido | done and green | `ffb7e61574fe1f8fa5e1df8672b3729b947b31d1` | Native fixed/daily pipe puzzles | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| tane | done and green | `f8e2ef2460949d135056ee629e4d9fe484a8c3f9` | Native picker and grouping; private item names | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| tenka | done and green | `3156453e73de3fc053ed20e3e9e366a02870d541` | Native world/Europe table and daily play | `pnpm test:table --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| tobiishi | done and green | `fe14f61f6a6bd90238384bb455bdecadb276334e` | Native peg-solitaire player | `pnpm test:demo`; `pnpm test:browser --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |
| toranpu | done and green | `1c3592d977b76c4f0773de7e7a9ed3bed4eeae05` | Native card, hand and pile | `pnpm check`; `pnpm test:readme`; `pnpm test:package`; `pnpm test:demo --workers=2` |
| tsunagi | done and green | `d4381a5482975bcea9f4ba5d2383fd572effccf6` | Native line puzzles and keyboard drawing | `pnpm test:demo --workers=2`; `pnpm check`; `pnpm test:readme`; `pnpm test:package` |

## Shared files and documentation

- Final template version: `2026-10-11-seven-country-embeds`.
- `scripts/family-template.mjs` SHA-256: `08e9d500321ad4b7c3b86935362459c847a67fc62a448bef98d2dda4ec6aa495`, byte-identical in all 28 worktrees.
- Shared README writer SHA-256: `f0bb3adff1a917f672c1b6a323e7ee068bd8b43294cdfb55f31c90112971bcf1`.
- All READMEs remain below 64,000 characters. Detail was preserved in linked guides, including Jarajara browser support, Chizu map data and REST API examples.
- CHANGELOG Unreleased, README feature sections, public TSDoc/examples, embed guides and demo help move with the adoption. Hikidashi's bundle inventory and English/Japanese docs-site guide are current; Kotoba's API reference was regenerated.
- All added public examples passed standalone TypeScript and runtime checks (`/tmp/family-added-doc-examples-final.log`); Hikidashi docs check passed 114 examples (`/tmp/family-hikidashi-docs-final.log`). Shared hash, option coverage and README checks passed in every package (`/tmp/family-final-shared-checks.log`).

## Corrections during final verification

Reviewed Japanese wording required updating Korokoro and Toranpu browser assertions. Chizu's wheel test now holds Control until the expected zoom, avoiding a race without changing product behaviour. Kyuubu's element example now treats its type as an element rather than an options object. Kuni's options example uses the documentation runner's supported import form. Houseki's check was interrupted and repeated in full; its deterministic campaign-generation test takes several minutes. No tests were removed or relaxed.

## Review and pictures

01b and 02b supplied reviewed text and are applied. New package-specific Japanese maker descriptions, option names/help, validation messages, iframe titles and the IOC label remain **needs review** before release. The seven-country family sentence adds France/Germany names to Japanese and needs review. Hikidashi's new guide at `docs/guides/ja/embed-text-tools.md` needs review. French is ticket 06 and has not started.

README pictures were refreshed where depicted behaviour changed (address-plus and Karakuri); unchanged native demo pictures remain valid. Inspected rollout screenshots are in the chat outputs, including `02-rip-builder-phone.png`, `02-karakuri-phone.webp` and the earlier builder phone captures. The REST phone layout retains language, GitHub and Docs links.

No decision blocks the completed local rollout. Release review must check the new Japanese. The next owned work is ticket 12's builder/download portion, then 03, 14 and 06.
