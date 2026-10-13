# How to take a ticket (for Codex)

The tickets are the numbered files in this folder; `INDEX.md` is the board. There is nothing else to log in to.

1. **Read `00-RULES.md`.** It overrides your defaults.
2. **Pick** the first row in `INDEX.md` whose Status is `ready`, unless John named one. Skip `blocked`, `in progress` and `later`.
3. **Claim it** before any other work: in `INDEX.md` change that row's Status to `in progress — codex — <yyyy-mm-dd hh:mm> — branch codex/<nn>-<short-name>`. Save the file. Only one ticket in progress at a time.
4. **Work** in a git worktree of the repo the ticket names: `git -C ~/Projects/<repo> worktree add -b codex/<nn>-<short-name> ~/Projects/<repo>-worktrees/codex-<nn>`. Commit there, small commits, files staged by name. Never push, tag or publish.
5. **Finish** only when the repo's gates are green (see the rules). Then:
   - write `reports/<nn>-<short-name>.md`: what changed, the branch, every check you ran with its result, screenshots' paths if any, anything John must decide, and any Japanese or French you wrote (marked "needs review");
   - move the ticket file into `done/`;
   - in `INDEX.md` set the row's Status to `done — branch codex/<nn>-<short-name> — report reports/<nn>-<short-name>.md`.
6. **If you get stuck** (a check you cannot make green, a decision only John can make, a licence question): stop, set Status to `stuck — <one line why> — branch …`, write the report with what you tried, and pick nothing else.
7. **Then take the next ready ticket**, from step 2.

Claude reviews each `done` branch, merges it and cuts the release; John pushes with one command. A branch is never merged by the agent that wrote it.
