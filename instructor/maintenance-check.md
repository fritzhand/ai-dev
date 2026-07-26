---
summary: Recheck the publishing route and pinned app starter before a cohort without silently moving the tested baseline.
requires: []
infographics: []
---

# Instructor maintenance check

Run this before a workshop and record the date, machine/runtime, result, and
reviewer. A newer upstream commit is information, not automatic approval.

## Approval gate

Before the maintenance run, approve the disposable GitHub/Vercel targets,
development Supabase project, Google test configuration, test identities, and
any migration or deployment. Never point maintenance at participant or
production data. A course-pin change requires a separate curriculum decision
after all evidence is collected.

## Landing-page route

- [ ] Recheck Astro's current
  [installation requirements and scaffold command](https://docs.astro.build/en/install-and-setup/).
- [ ] Create a clean minimal Astro project using the exact workshop command.
- [ ] Run local development and production builds.
- [ ] Push a disposable/test repository from the teaching network.
- [ ] Import and deploy it through the intended Vercel account route.
- [ ] Confirm GitHub/Vercel authorization prompts have not changed materially.
- [ ] Test the recovery project at every workshop checkpoint.

Record:

- Date:
- Node/npm versions:
- `create-astro` version/help:
- Vercel route result:
- Required lesson/runbook update:

## App pinned baseline

Tested course revision:

`e887b0cc9d380576aa3318bf8c095afbc3d768cb`

Source:
[`KRSHH/standard-saas-starter`](https://github.com/KRSHH/standard-saas-starter),
[commit `e887b0c`](https://github.com/KRSHH/standard-saas-starter/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb),
MIT, audited 2026-07-25.

Create and print a unique temporary directory. Confirm the printed path starts
with `/tmp/ai-dev-template-audit.` and exists before continuing:

```bash
AI_DEV_AUDIT_ROOT=$(mktemp -d /tmp/ai-dev-template-audit.XXXXXX)
test -d "$AI_DEV_AUDIT_ROOT"
printf '%s\n' "$AI_DEV_AUDIT_ROOT"
```

Clone into that exact directory. Do not substitute an existing project folder:

```bash
git clone https://github.com/KRSHH/standard-saas-starter.git "$AI_DEV_AUDIT_ROOT/standard-saas-starter"
cd "$AI_DEV_AUDIT_ROOT/standard-saas-starter"
git switch --detach e887b0cc9d380576aa3318bf8c095afbc3d768cb
git rev-parse HEAD
bun install
bun run check
bun run test
```

Then use a disposable development Supabase project to test setup, reviewed
migrations, health, profile creation, email auth, and the course's Google
implementation path. Never put course or participant credentials in the
maintenance record.

Verify the assumptions the course relies on:

- [ ] Exact commit remains fetchable.
- [ ] `LICENSE` remains MIT and preserved.
- [ ] Runtime/package-manager declarations still match the lesson.
- [ ] Baseline check/test results are recorded.
- [ ] Required environment names still match the pinned source.
- [ ] Direct `src/db/index.ts` connection remains privileged; course
  owner-scoping warning is still accurate.
- [ ] Sign-in form still lacks or now includes executable Google OAuth.
- [ ] Callback/profile/sign-out behavior matches the course delta.
- [ ] Optional systems left deferred have no new core dependency.

## Compare moving upstream

Fetch current `upstream/main` and review:

- licence;
- runtime/lockfile;
- security advisories and dependency changes;
- environment schema;
- migrations and data privileges;
- auth UI/callback/session;
- direct database role and query patterns;
- optional-system production behavior;
- check/test/build results.

Do not change the course pin until the new revision passes the full app
milestone route and a reviewer approves the lesson/source updates. Record a new
full commit hash; never replace it with “latest.”

## Pin decision

Any pin update requires an explicit curriculum decision, a migration note for
existing learners, updated attribution/audit date, and a passing clean route.

## Result

- Checked on:
- Reviewer:
- Landing route: pass / fail
- Pinned app baseline: pass / fail
- Current upstream comparison:
- Course changes required:
- Approved baseline for this cohort:
