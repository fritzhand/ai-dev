---
summary: Recover common workshop failures without hiding them, destroying learner work, or consuming the whole class clock.
requires: [04-05-build-the-astro-site-in-milestones]
infographics: [landing-page-workshop-flow]
---

# Landing-page workshop recovery

Recovery keeps the learner in the method. It does not promise that every
machine or account problem can be solved during the session.

## Before class

Prepare and test:

- a public-safe source pack;
- an approved neutral `knowledge-base.md` and `design.md`;
- a minimal one-page plan;
- a running Astro shell commit;
- a content-complete local commit;
- a reviewed deployable commit;
- a Vercel deployment from the teaching network.

Record exact commits. Do not include credentials or private participant data.

## Failure matrix

| Failure | Diagnose first | In-class recovery | Preserve for follow-up |
| --- | --- | --- | --- |
| Missing source/rights | Is the primary CTA or claim blocked? | Use approved instructor source pack or pair as observer | Learner's unanswered content/rights questions |
| Unsupported Node/npm | Versions and Astro's current requirement | Pair/use prepared environment; do not random-upgrade system tools | Exact versions and official setup route |
| Install fails | First error, folder, network, runtime, disk | Use prepared Astro shell after explaining provenance | Error output and environment |
| Port is busy | Dev-server message and printed URL | Use the next offered port; open the printed URL | Process/port investigation after class |
| Agent cannot see files | Workspace root and permissions | Reopen exact project folder; pair if unresolved | Tool/account permission issue |
| Astro scaffold wants overwrite | Current files and command target | Cancel; use reviewed subfolder or prepared shell | Plan for moving/merging approved files |
| Git identity/auth fails | Local identity versus GitHub authentication | Keep local commits; deploy handoff after class | Commit hash and correct account route |
| Production build fails | First build error, not browser appearance | Stop deploy; use last passing milestone only if it matches learner source | Build log and commit |
| Vercel cannot find app | Root folder and `package.json` scripts | Correct only known root; otherwise preserve GitHub finish line | Deployment settings screenshot/log |
| Vercel build differs | Runtime, lockfile, env, path case, commit | Record deploy blocker; do not change multiple settings | Local clean-build evidence and remote log |
| Missing asset in production | Filename case/path and tracked file | Correct the specific path/file, rebuild, recommit | Asset provenance and QA rerun |
| Content/design behind time | Checkpoint evidence | Cut sections, not review; use one page/CTA | Deferred list |

## Recovery protocol

1. Freeze the learner's current state with `git status` and the last commit.
2. State the first observed failure and what should have happened.
3. Choose one documented recovery route.
4. Explain what material comes from the learner and what comes from the
   instructor recovery project.
5. Re-run the failed check.
6. Commit only when the recovered state is understood.
7. Record follow-up; return the room to the clock.

## Do not use in class

- `git reset --hard` or broad deletion as a first response;
- copying a finished project without explaining its source and diff;
- inventing participant business content;
- putting credentials in chat or source;
- applying multiple “maybe” fixes before rerunning the first failed check;
- deploying an unreviewed fallback under the learner's identity.

## Escalation rule

After one documented recovery attempt, move the learner to pair/observer mode
if the issue involves account access, system runtime, network policy, file
permission, or an unexplained destructive risk. Preserve evidence for a
follow-up session.
