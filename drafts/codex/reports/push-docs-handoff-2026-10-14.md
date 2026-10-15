# Documentation rollout — push handoff — 2026-10-14

John authorized pushing the completed documentation rollout. All 28 package review branches and the shared master/report review branch were pushed to their existing origins and verified against their exact local commit IDs. All source worktrees were clean. These are fast-forward or new-branch pushes with explicit SHA-to-review-branch refspecs, no force and no automatic tag following.

Branch: `codex/03-docs-site-rollout`. No main branch, tag, release, npm publication, deployment, workflow dispatch or repository setting was changed. Existing release and Pages workflows target version tags or main, rather than these review branches.

## Review handoff

Review the 03 branch for each package. It retains the preceding completed embed/builder work already included in that branch. Avoid merging predecessor branches separately when their changes are already present. The older 02/12 refs pushed on 2026-10-12 remain available.

All 28 packages passed their required source, docs, browser and installed-package checks before commit. The final clean-worktree and shared-file hash audit passed. Detailed results and native gate counts are in [the rollout report](03-docs-site-rollout.md) and [the final manifest](03-docs-site-rollout-final-manifest.json).

New Japanese is **needs review** before release. The rollout report identifies the translated guides, site configuration and native navigation/builder text. Fetch current main before integration and rerun the gates against the final reviewed contents. Package versions and Unreleased entries remain for the release reviewer to resolve. Docs upkeep (14) and Canadian French (06) remain ready and unclaimed.

The shared tooling version is `2026-10-13-workspaces`. The master and this handoff are on the [.github review branch](https://github.com/johnmorrisdotca/.github/tree/codex/03-docs-site-rollout).

## Verified package commits

| Package | Verified commit | Review branch |
| --- | --- | --- |
| korokoro | [`c6fadaf2e405387e2f1da1863b7ed662355ca9a5`](https://github.com/johnmorrisdotca/korokoro/commit/c6fadaf2e405387e2f1da1863b7ed662355ca9a5) | [03](https://github.com/johnmorrisdotca/korokoro/tree/codex/03-docs-site-rollout) |
| kyuubu | [`ca5bc55754cb75cfa1c5c40d7700613b8dc26059`](https://github.com/johnmorrisdotca/kyuubu/commit/ca5bc55754cb75cfa1c5c40d7700613b8dc26059) | [03](https://github.com/johnmorrisdotca/kyuubu/tree/codex/03-docs-site-rollout) |
| hitotsu | [`230856a5aaf75901e85b391a18c6a3b7970885d7`](https://github.com/johnmorrisdotca/hitotsu/commit/230856a5aaf75901e85b391a18c6a3b7970885d7) | [03](https://github.com/johnmorrisdotca/hitotsu/tree/codex/03-docs-site-rollout) |
| toranpu | [`83d69a341a43e63ce685d486b9fd662cf8bd9726`](https://github.com/johnmorrisdotca/toranpu/commit/83d69a341a43e63ce685d486b9fd662cf8bd9726) | [03](https://github.com/johnmorrisdotca/toranpu/tree/codex/03-docs-site-rollout) |
| tane | [`01be5be9c03c67a625985bbabec5b0a2fc5a95a9`](https://github.com/johnmorrisdotca/tane/commit/01be5be9c03c67a625985bbabec5b0a2fc5a95a9) | [03](https://github.com/johnmorrisdotca/tane/tree/codex/03-docs-site-rollout) |
| narabe | [`8bbb40f444699e0ae6553298b31ec355f0019490`](https://github.com/johnmorrisdotca/narabe/commit/8bbb40f444699e0ae6553298b31ec355f0019490) | [03](https://github.com/johnmorrisdotca/narabe/tree/codex/03-docs-site-rollout) |
| tenka | [`7caf9d8f8aa59e3143c5b98e73d0bfc20894de6b`](https://github.com/johnmorrisdotca/tenka/commit/7caf9d8f8aa59e3143c5b98e73d0bfc20894de6b) | [03](https://github.com/johnmorrisdotca/tenka/tree/codex/03-docs-site-rollout) |
| kumimoji | [`e167f6425ddddbf210002551a7b2ac7c23392596`](https://github.com/johnmorrisdotca/kumimoji/commit/e167f6425ddddbf210002551a7b2ac7c23392596) | [03](https://github.com/johnmorrisdotca/kumimoji/tree/codex/03-docs-site-rollout) |
| tsunagi | [`b489c0c3880b6e66c0893031d42806f1d4a87ded`](https://github.com/johnmorrisdotca/tsunagi/commit/b489c0c3880b6e66c0893031d42806f1d4a87ded) | [03](https://github.com/johnmorrisdotca/tsunagi/tree/codex/03-docs-site-rollout) |
| jarajara | [`3661376b5f2041632277a3f3b1c5ae2ac289bb4c`](https://github.com/johnmorrisdotca/jarajara/commit/3661376b5f2041632277a3f3b1c5ae2ac289bb4c) | [03](https://github.com/johnmorrisdotca/jarajara/tree/codex/03-docs-site-rollout) |
| suido | [`f6e153c415c0bc9a8bbc083ccbbf6e97089e3343`](https://github.com/johnmorrisdotca/suido/commit/f6e153c415c0bc9a8bbc083ccbbf6e97089e3343) | [03](https://github.com/johnmorrisdotca/suido/tree/codex/03-docs-site-rollout) |
| domino | [`5551384d0d7dc9619ed6d6638e73056977554c57`](https://github.com/johnmorrisdotca/domino/commit/5551384d0d7dc9619ed6d6638e73056977554c57) | [03](https://github.com/johnmorrisdotca/domino/tree/codex/03-docs-site-rollout) |
| kotoba | [`e67d97ecdc2bfe3ffc592bab8e6acc66c3668c36`](https://github.com/johnmorrisdotca/kotoba/commit/e67d97ecdc2bfe3ffc592bab8e6acc66c3668c36) | [03](https://github.com/johnmorrisdotca/kotoba/tree/codex/03-docs-site-rollout) |
| sugoroku | [`df6d59c84a5ba90de0ab6798403d126524c735e9`](https://github.com/johnmorrisdotca/sugoroku/commit/df6d59c84a5ba90de0ab6798403d126524c735e9) | [03](https://github.com/johnmorrisdotca/sugoroku/tree/codex/03-docs-site-rollout) |
| kazu | [`1577edc8d716cc7c9ee027d337027b751ee90b36`](https://github.com/johnmorrisdotca/kazu/commit/1577edc8d716cc7c9ee027d337027b751ee90b36) | [03](https://github.com/johnmorrisdotca/kazu/tree/codex/03-docs-site-rollout) |
| meikyuu | [`8bee40123c985a42c60a9a72e32cb9fffa7bf489`](https://github.com/johnmorrisdotca/meikyuu/commit/8bee40123c985a42c60a9a72e32cb9fffa7bf489) | [03](https://github.com/johnmorrisdotca/meikyuu/tree/codex/03-docs-site-rollout) |
| hikidashi | [`7a28caf6b0c64dde25f59366395d93aa48e418e5`](https://github.com/johnmorrisdotca/hikidashi/commit/7a28caf6b0c64dde25f59366395d93aa48e418e5) | [03](https://github.com/johnmorrisdotca/hikidashi/tree/codex/03-docs-site-rollout) |
| chizu | [`96c616b92cb9144321cb622f68f059c341d354e6`](https://github.com/johnmorrisdotca/chizu/commit/96c616b92cb9144321cb622f68f059c341d354e6) | [03](https://github.com/johnmorrisdotca/chizu/tree/codex/03-docs-site-rollout) |
| bushu | [`08fcc2d6b4969305adea7b3dff7a0a8c4e86b4fa`](https://github.com/johnmorrisdotca/bushu/commit/08fcc2d6b4969305adea7b3dff7a0a8c4e86b4fa) | [03](https://github.com/johnmorrisdotca/bushu/tree/codex/03-docs-site-rollout) |
| tobiishi | [`ec58122d66a69101cf9e65422abdcaa80c2f1732`](https://github.com/johnmorrisdotca/tobiishi/commit/ec58122d66a69101cf9e65422abdcaa80c2f1732) | [03](https://github.com/johnmorrisdotca/tobiishi/tree/codex/03-docs-site-rollout) |
| jirai | [`c0013b80cd952366ec5df435dddbfef4066fbf53`](https://github.com/johnmorrisdotca/jirai/commit/c0013b80cd952366ec5df435dddbfef4066fbf53) | [03](https://github.com/johnmorrisdotca/jirai/tree/codex/03-docs-site-rollout) |
| gunjin | [`3bad00abf3e022f97b41a8e5c5062b8ab7ec229e`](https://github.com/johnmorrisdotca/gunjin/commit/3bad00abf3e022f97b41a8e5c5062b8ab7ec229e) | [03](https://github.com/johnmorrisdotca/gunjin/tree/codex/03-docs-site-rollout) |
| karakuri | [`3744dbf4fdb83ea83556136c4575e872672858b0`](https://github.com/johnmorrisdotca/karakuri/commit/3744dbf4fdb83ea83556136c4575e872672858b0) | [03](https://github.com/johnmorrisdotca/karakuri/tree/codex/03-docs-site-rollout) |
| houseki | [`1f4439ab2d0cc091c6283965f2147e9279caa5b4`](https://github.com/johnmorrisdotca/houseki/commit/1f4439ab2d0cc091c6283965f2147e9279caa5b4) | [03](https://github.com/johnmorrisdotca/houseki/tree/codex/03-docs-site-rollout) |
| address-plus | [`89c5b0c7b151ab4c21e94a44d94f77f11841bb6f`](https://github.com/johnmorrisdotca/address-plus/commit/89c5b0c7b151ab4c21e94a44d94f77f11841bb6f) | [03](https://github.com/johnmorrisdotca/address-plus/tree/codex/03-docs-site-rollout) |
| kuni | [`dc8c039fdd3d2683f3d312dc447868edd393bef6`](https://github.com/johnmorrisdotca/kuni/commit/dc8c039fdd3d2683f3d312dc447868edd393bef6) | [03](https://github.com/johnmorrisdotca/kuni/tree/codex/03-docs-site-rollout) |
| hata | [`31f657c03634606baa117099846379501ae39b76`](https://github.com/johnmorrisdotca/hata/commit/31f657c03634606baa117099846379501ae39b76) | [03](https://github.com/johnmorrisdotca/hata/tree/codex/03-docs-site-rollout) |
| rest-in-pieces | [`d02baaddbd03c2d8ee9500374b3cdefc49ef4a08`](https://github.com/spxis/rest-in-pieces/commit/d02baaddbd03c2d8ee9500374b3cdefc49ef4a08) | [03](https://github.com/spxis/rest-in-pieces/tree/codex/03-docs-site-rollout) |
