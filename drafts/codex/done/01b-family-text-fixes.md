# Ticket 01b: family template text fixes (from the Japanese review of 01) — HIGH, do before finishing 02

Owner: Codex. Ticket 01's Japanese was read by the japanese-reviewer on 2026-10-09; these are the decided changes.
Apply them in `scripts/family-template.mjs` in your **02 branches** (they are stacked on 01), keep every repo's copy
byte-identical, update the recorded hashes, and run each repo's gates as before. 01 and 02 then land together.

| Where | Now | Change to |
|---|---|---|
| EN pitch, address-plus | parse and format addresses in the United States, Canada and Japan | parse and format addresses in the United States, Canada, Japan, Australia and the United Kingdom |
| JA pitch, address-plus | アメリカ、カナダ、日本の住所を解析し、整形します | アメリカ、カナダ、日本、オーストラリア、イギリスの住所を解析・整形 |
| JA pitch, hata | 国と地域の旗を、本来の縦横比の SVG で収録し、ISO コードで引けます | 国と行政区画の旗を、実際の縦横比のSVGで収録。ISOコードで引けます |
| JA pitch, kuni | 世界の国と行政区画を、ISO コードと英語・日本語の名前で収めています | 世界の国と行政区画を、ISOコードと英語・日本語の名称つきで収録 |
| JA pitch, rest-in-pieces | フロントエンド開発向けの、シード付きテストデータと REST API。遅延やエラーも試せます | フロントエンド開発向けの、シード値で固定できるテストデータとREST API（遅延・エラーの再現つき） |
| kana, REST in Pieces | レスト・イン・ピーシズ | レスト・イン・ピーシーズ |
| group, board | ゲーム — ボード | ボードゲーム |
| group, cards | ゲーム — カードと牌 | カードと牌のゲーム |
| group, puzzles | ゲーム — パズル | パズルゲーム |
| group, random | ゲーム — ダイスと乱数 | ダイスと乱数 |
| group, language | 言語 | ことばと文字 |
| footer label (ja `family`) | 姉妹パッケージ: | ファミリー： |

Rules for Japanese in the template from now on: pitches are noun phrases with no 。; no space between Latin text
and Japanese (SVGの, ISOコード); no spaced em dash and no half-width colon in Japanese labels; 行政区画 for
sub-national regions. Update any browser test that asserts the old wording (grep e2e/ and test files for each old string).
Note in your 02 report that 01b was applied.
