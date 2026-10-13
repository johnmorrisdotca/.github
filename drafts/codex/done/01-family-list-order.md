# Task: group and order the family list (LOW, mechanical)

John: "in our list of packages, they are not ordered or grouped... we should be ordering and grouping our lists for all packages."

The list lives in `scripts/family-template.mjs` (FAMILY, FAMILY_PITCH, FAMILY_TEMPLATE_VERSION), copied unchanged into every package repo and pinned by a hash in `family.test.js`; README "The family" blocks are written from it by `scripts/family-readme.mjs`. Reference copy: `~/Projects/kuni/scripts/family-template.mjs`.

Do (in one pilot repo first, hikidashi `~/Projects/hikidashi`, then the same change in every other repo):
1. Group FAMILY by kind, alphabetical within a group, and render group headings in the footer and README block:
   - Games — board: Domino, Gunjin, Narabe, Sugoroku, Tenka; cards & tiles: Hitotsu, Jarajara, Kumimoji, Toranpu; puzzles: Houseki, Jirai, Karakuri, Kazu, Kyuubu, Meikyuu, Suido, Tobiishi, Tsunagi; dice & random: Korokoro, Tane
   - Language: Bushu, Hikidashi, Kotoba
   - Geography & data: address-plus, Chizu, Hata, Kuni
   - Developer tools: REST in Pieces (github.com/spxis/rest-in-pieces, npm @johnmorrisdotca/rest-in-pieces)
2. Add the missing members (address-plus, REST in Pieces) with EN/JA pitches.
3. New FAMILY_TEMPLATE_VERSION, new hash in every repo's family.test.js, regenerate each README block.
List every repo touched and its check result in the report.
