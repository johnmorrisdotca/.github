# Ticket 02b: embed builder Japanese fixes (from the review of 02's first 8 packages) — HIGH, do before marking 02 done

Owner: Codex. The japanese-reviewer read the new Japanese in kyuubu, hata, korokoro, toranpu, jarajara, chizu, kuni and
suido's codex-02 worktrees on 2026-10-09 (about 330 strings; 27 to change). Apply these in your 02 branches, and apply the
same terms to every package you adopt after these 8. Update any test that greps the old wording. Note in your 02 report
that 02b was applied.

## Decisions (Claude, 2026-10-09)

1. **One source for the shared builder words.** The shared keys (pitch, codeText, copy, copyLink, linkCopied, reset,
   onlyDifferent, defaultIs, previewTitle, …) are copy-pasted into each package's `WORDS` and have already drifted.
   Move their English and Japanese defaults into `scripts/family-template.mjs`; a package's `WORDS` only overrides
   what is truly its own (its nouns: cube, flag, dice, map…). Keep the template byte-identical everywhere, with its hash.
2. **Choice buttons are translated, values are not.** In Japanese mode every choice button shows a Japanese label
   (`choiceLabels`, as korokoro and hata already do: 小・中・大, 明るい・暗い・自動 …). The code written out keeps the
   English attribute value (`size="small"`), because that is what the user pastes.
3. **The iframe `title` follows the page language** (Japanese title in Japanese mode), for screen readers.
4. **The copy button says コードをコピー** (beside the link button), not bare コピー.
5. **Suido `level`:** use the word Suido's own puzzle UI already uses for a level (grep its main `words`), not a new one.

## Terms, family-wide

- Embed: **埋め込み** (pitch, codeText, docs). Never 載せる / 載せ方 / 使い方 for this.
- Preview heading: **プレビュー** (or 〜のプレビュー). Never 「あなたの〜」.
- Colons in Japanese strings: full-width **：**, no space after.
- 初期値 (default), 指定なし (not set), 元に戻す (reset), 最初からやり直す (start again), 配色 (theme), 表示の大きさ with 小・中・大,
  幅 with ピクセル, シード, 読み上げる名前 / 読み上げる言語 — already consistent; keep.
- Browser: **ブラウザ** in package UI.
- Cloth: **テーブルの色** everywhere (header and builder options).
- Codes: **地域コード** (ISO region codes), **国コード**, **地物ID**, **カードID**, **牌のコード**. A bare 記号 never means a code or id.
- Subdivisions: **行政区画** (never 地方).
- Dice (korokoro): **ダイス**, ダイス表記, ダイスウォー, ホールド — not サイコロ. Mahjong (jarajara): 手牌, **赤五** / 赤ドラ, not 赤牌.
- An include toggle reads 「〜を含めます」, not 「〜を使います」.

## String changes

| Package | Key | Now | Change to |
|---|---|---|---|
| all | previewTitle | あなたのキューブ / 旗 / サイコロ / カード / 手牌 / 地図 / パズル | プレビュー |
| all | codeText | ページへの載せ方を選びます。 (kyuubu: ページでの使い方を選んで、コピーしてください。) | ページへの埋め込み方法を選びます。 |
| all but kyuubu | pitch | …ページに載せるコードをコピーします。 | …ページに埋め込むコードをコピーできます。 |
| all | defaultIs, kyuubu noteMoves | 初期値: {value} / …読めませんでした: {what} | 初期値：{value} / …読めませんでした：{what} |
| all | onlyDifferent | (varies) | 初期値と異なる選択だけがコードに含まれます。 |
| hata | foot | ブラウザーで | ブラウザで |
| hata | theme help | 明るいページ用・暗いページ用、または端末の設定に合わせます。 | 明るい枠線・暗い枠線、または端末の設定に合わせます。 |
| korokoro | name | 「コロコロ」は、小さなものが転がる音を表します。 | 「コロコロ」は、小さなものが転がる様子を表す言葉です。 |
| korokoro | every new サイコロ (pitch, previewTitle, makerDie, makerDieSays, copyLink, groups.dice, option help) | サイコロ | ダイス |
| korokoro | notation | ダイス記法 | ダイス表記 |
| korokoro | hold | サイコロを保持 / 選んだサイコロを残して… | ダイスをホールド / (same, with ダイス) |
| korokoro | dice-war | ダイス・ウォー / ダイス・ウォーのゲームを使います。 | ダイスウォー / ダイスウォーのゲームを含めます。 |
| korokoro | sound | サイコロの音と消音ボタンを使います。 | ダイスの音と消音ボタンを含めます。 |
| korokoro | keyboard | ページでスペースキーを押して振ります。 | ページ上でスペースキーを押すと振れます。 |
| jarajara | cloth | 敷物 | テーブルの色 |
| jarajara | red-fives | 赤牌 | 赤五 |
| jarajara | pick | oneでは1枚だけ選べます。 | 「one」を選ぶと1枚だけ選べます。 |
| toranpu | name | 「トランプ」は playing cards に当たる日本語です。 | 「トランプ」は、日本語で playing cards を指す言葉です。 |
| toranpu | makerPile | 山札 | カードの山 (update the e2e test that greps 山札) |
| toranpu / jarajara | makerHandSays / makerRackSays | 攻略記事やカードの表示に使う手札です。 | 攻略記事などで、手札を見せるために使います。 |
| toranpu / jarajara | cards, card, tiles, marked, badCards, badTiles | カードの記号 / 牌の記号 | カードID / 牌のコード |
| suido | badDay | 実際の日付をYYYY-MM-DDで指定するか、today、offを指定してください。 | 実在する日付をYYYY-MM-DD形式で入力するか、today または off を指定してください。UTCの日付を使います。 |
| chizu | region | 国の地方 | 国の行政区画 |
| chizu | highlight, data, badData | 場所の記号 | 地域コード |
| chizu | place | 地物の記号 | 地物ID |
| chizu | features | 名前のある水 | 名前のある水域（河川・湖など） |
| chizu | controls | 拡大ボタン | 拡大・縮小ボタン |
| chizu | src/element.ts quiz | 光っている場所はどこですか？ | ハイライトされている場所はどこですか？ |
| kuni | makerCardSays | Kuniの名前と年つきの数値、Hataの旗、Chizuの地図を表示します。 | 国名、年つきの統計値、Hataの旗、Chizuの地図を表示します。 |
| kuni | code row, src/element.ts codes | コード | 国コード |
| kuni | src/element.ts tld | ドメイン | 国別ドメイン |
| kuni | src/element.ts zones | 時間帯 | タイムゾーン |
