---
summary: Teach learner-chosen apps through reusable PRD, baseline, data, auth, vertical-slice, differentiator, evidence, and release gates.
requires: [05-01-write-the-prd, 05-11-optional-production-layers]
infographics: [rapid-app-development-workflow, the-approval-gate]
---

# Teach the app project

There is no canonical teaching app. Each learner brings or develops a PRD for
their own primary user, job, core object, and differentiator. The instructor
teaches the sequence and evidence gates, not one sample schema or feature set.

This project is milestone-led. Do not promise a fixed two-hour completion.

## Pre-work

- Git, Bun, and the pinned starter's Node requirement work.
- Learner owns an empty GitHub repository.
- Learner has a development Supabase project.
- For the Google milestone, learner has authority over Google OAuth and
  Supabase provider settings; otherwise email/password is a temporary recovery
  route, not proof that Google acceptance passed.
- Instructor has rerun [maintenance](maintenance-check.md).
- Learner understands that database migrations and production deploys require
  explicit approval.

## Milestone gates

| Milestone | Learner evidence | Human decision | Recovery point |
| --- | --- | --- | --- |
| 1. PRD | One user/job/object, flows, ownership, acceptance, non-goals | Product choices approved | PRD commit |
| 2. Pinned baseline | Exact `e887b0c`, MIT notice, remotes, baseline checks | Repo/visibility/upstream approved | Unchanged baseline commit |
| 3. Honest shell | Keep/change/remove/defer map; no false starter claims | System map and cleanup approved | Passing cleanup commits |
| 4. Supabase baseline | Secret-safe config, reviewed starter migrations, health/profile evidence | Target and migration approved | Pre-migration + schema record |
| 5. Core data | Data model, generated SQL, RLS matrix, two-user tests | Semantics/SQL/recovery approved | Schema+migration commit |
| 6. Google auth | Provider config plan, button/callback/session/profile/sign-out evidence | Origins, redirects, secret storage approved | Email recovery + auth commit |
| 7. Vertical slice | Protected create/view/update/delete and failures | UX, destructive behavior, owner scope approved | Operation-sized commits |
| 8. Differentiator | Named user value and fixed eval set | Data/provider/cost/output approved | Passing core slice commit |
| 9. Acceptance | Static, unit, browser, real OAuth, two-user, human evidence | Ship/fix/scope decision | Tested release commit |
| 10. Production | Migration, env, auth/data/health/boundary checks, rollback | Production actions approved | Deployed + previous commit/state |

## Teaching pattern for every milestone

1. Learner states the user-visible outcome and relevant PRD criterion.
2. Agent reads only the authoritative working set.
3. Agent proposes files, commands, external writes, checks, and stop condition.
4. Learner and instructor inspect the approval packet.
5. Learner authorizes one small implementation group.
6. Agent reports the diff and runs agreed checks.
7. Learner produces browser/permission/human evidence.
8. Learner commits and fills
   [`milestone-review.md`](../project-templates/app/milestone-review.md).

## Instructor questions that work for any app

- Which one person and job does this criterion serve?
- What is the core object called in that person's language?
- Where does ownership come from—the authenticated session or client input?
- Can User B guess User A's identifier?
- Is this query using a user-scoped Supabase client or privileged direct
  Drizzle?
- What would prove this works without watching the learner's screen?
- What is the last known-good commit and database state?
- Is this optional system required by the PRD or only present in the starter?
- What product decision is the agent currently being asked to make?

## Non-negotiable database lesson

The pinned
[`src/db/index.ts`](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/db/index.ts)
uses a privileged Postgres role that can bypass RLS, as the pinned
[database guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md)
also records. Teach two separate controls and review Supabase's
[RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security):

1. RLS for normal Supabase browser/server clients.
2. Server authentication plus an owner predicate for every direct privileged
   application query.

A policy existing in the schema is not evidence that a direct Drizzle query is
safe. Require a two-user regression test.

## Non-negotiable auth lesson

The pinned source has an
[OAuth provider list](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/lib/auth/oauth-providers.ts)
and [callback](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/app/auth/callback/route.ts),
but its [sign-in form](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/components/auth/auth-form.tsx)
does not execute Google OAuth. Learners must implement and manually test the
button, `signInWithOAuth`, provider callback, app callback, session, profile,
protected route, and sign-out locally and in production.

## Differentiation without chaos

Learners diverge only after the shared protected vertical-slice gate. At that
point, require each learner to provide:

- one differentiator criterion;
- new data/external-service risk;
- a fixed evaluation set;
- a useful failure path;
- a stop condition.

Group critique around those artifacts rather than comparing product polish.

## Completion

The project is complete when one learner-chosen vertical slice and its
differentiator meet the approved PRD in production with real auth, ownership
evidence, and rollback. Optional starter systems are not completion points.
