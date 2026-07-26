---
summary: Create a learner-owned repository from the audited KRSHH starter commit while preserving its MIT licence and baseline evidence.
requires: [05-01-write-the-prd, 03-03-node-packages-and-runtimes, 03-04-git-save-points, 03-05-github-repositories-and-review]
infographics: [rapid-app-development-workflow]
---

# Start from the tested template

**Requires:** An approved PRD, Git, Bun, the starter's supported Node runtime,
an empty learner-owned GitHub repository, and a new local destination.

**Done when:** The local project points at the exact audited commit, retains the
upstream MIT licence and history, passes baseline checks, and can push to the
learner's repository.

## Step 0 — Check the ground

Confirm the destination does not contain work. Run `git --version`,
`bun --version`, and `node --version`. The audited starter declares Bun 1.3.0
and Node `>=20.9.0`; recheck the pinned
[`package.json`](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/package.json)
before a later cohort. This baseline was audited on 2026-07-25. The commands
below use `my-app/` as a concrete example. Confirm that name does not exist
before continuing.

## Approval gate

Approve the new `my-app/` destination, upstream URL, full audited commit,
learner GitHub account, empty repository, visibility, and exact origin URL.
Cloning, changing branches/remotes, installing packages, and pushing do not
begin until this gate passes.

## Steps

1. Clone without checking out the moving default branch:

   ```bash
   git clone --no-checkout https://github.com/KRSHH/standard-saas-starter.git my-app
   cd my-app
   ```

2. Inspect the current remote, status, and branch. The worktree should still be
   empty.
3. Preserve the moving upstream branch under a different local name, then
   create the learner's `main` from the audited commit without force-resetting
   any branch:

   ```bash
   git branch -m upstream-current
   git switch --detach e887b0cc9d380576aa3318bf8c095afbc3d768cb
   git switch -c main
   ```

4. Keep the source remote for comparison, and add the learner's empty
   repository as `origin`:

   ```bash
   git remote rename origin upstream
   AI_DEV_ORIGIN_URL=https://github.com/YOUR-GITHUB-ACCOUNT/YOUR-REPOSITORY.git
   git remote add origin "$AI_DEV_ORIGIN_URL"
   ```

5. Confirm `git rev-parse HEAD` prints the full tested commit and
   `git remote -v` names only the intended repositories.
6. Read and preserve `LICENSE`. Credit the baseline:

   > App starter: KRSHH/standard-saas-starter, MIT, tested at commit `e887b0c`.

7. Run `bun install`, then `bun run check` and `bun run test`. Run
   `bun run setup` to create the ignored local environment file, but do not add
   credentials yet and do not apply migrations.
8. Push only after reviewing the remote and baseline diff.

The [pinned starter README](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/README.md)
is the source for the starter scripts. GitHub says a repository created with
“Use this template” starts from the template's default branch (or all
branches), with new unrelated history. That flow does not select this audited
commit, so the course uses the pinned clone procedure above. See
[GitHub's template-repository documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

```prompt
Context: Audit this freshly cloned app starter against commit
e887b0cc9d380576aa3318bf8c095afbc3d768cb. Do not modify source.

Report the current HEAD, remotes, licence, package manager/runtime declarations,
git status, baseline check commands, and any difference from the pinned
commit. Stop if the commit differs, the directory was not fresh, or the MIT
notice is missing.
```

## Verify

- HEAD is the full pinned commit.
- `upstream` is KRSHH's repository; `origin` is the learner's.
- The MIT licence remains tracked.
- The lockfile remains consistent with Bun.
- Check and test commands pass, or the unchanged baseline failure is recorded
  before customization.
- `.env.local` is ignored and absent from `git status`.

## Save point

Push the unchanged tested baseline first. Record its commit in `todos.md`; it
is the recovery point for every later customization.

## If this fails

- **The target contains work:** stop and choose a new folder.
- **The commit cannot be found:** fetch `upstream`, then recheck the exact hash;
  do not substitute current `main`.
- **Bun or Node is incompatible:** fix the runtime before installing.
- **Baseline checks fail:** capture the first failure with versions and stop.
  Do not hide it inside product changes.
- **The wrong remote was added:** inspect with `git remote -v`; change it only
  after identifying the correct learner repository.
