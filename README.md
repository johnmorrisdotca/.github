# Community files for the johnmorrisdotca packages

The master copy of the community files every johnmorrisdotca package shares:
the code of conduct, the security policy, the contributing guide and the
support page, and the generic issue and pull request templates.

**Every package keeps its own copy** of its contributing guide, code of
conduct, security policy and licence, so a clone or a fork is complete
without this repository. Change a file here, and the change goes out to every
package from here. Two checks hold the copies to the master:

- In each package, `family.test.js` fails when `SECURITY.md`,
  `CODE_OF_CONDUCT.md` or `CONTRIBUTING.md` differs from the copy kept in
  `scripts/community/` (a hash of each is recorded in the test), and when the
  file at the package's root is not that copy: `SECURITY.md` and
  `CODE_OF_CONDUCT.md` are the copy itself, and `CONTRIBUTING.md` is the copy
  followed by a section, "Particular to" the package's name, that is the
  package's own.
- Here, `scripts/check-copies.mjs` reads `scripts/community/` out of every
  package's main branch and fails when a copy is not the master text. The
  Copies workflow runs it on every push and every Monday.

So a change to a master file is made in this order: the new text goes into
every package (with its new hash in `family.test.js`), then here. Until it has
reached every package the Copies workflow here is red, and says which.

What only GitHub's website uses stays here alone: the issue templates and the
pull request template, which GitHub shows in any repository that has none of
its own, and the support page.

## The README standard

Every package's README has one layout, one set of rules for its examples and
pictures, and a test that holds it to them: see
[README-STANDARD.md](README-STANDARD.md). The files each package copies to hold
itself to it (the lint, its test, the examples runner and the pictures library)
are in [`readme-standard/`](readme-standard/). They are not yet in every
package: [Tsunagi](https://github.com/johnmorrisdotca/tsunagi) and
[Gunjin](https://github.com/johnmorrisdotca/gunjin) are the first two, and the
other twenty-two follow.
