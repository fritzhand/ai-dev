---
summary: Translate the learner's PRD into an owned data model, review generated SQL and RLS, and test both user and privileged query boundaries.
requires: [05-04-connect-supabase]
infographics: [how-the-app-backend-fits, the-approval-gate]
---

# Design and migrate the core data

**Requires:** The approved PRD, a connected development Supabase project, a
known migration baseline, and two test identities.

**Done when:** The core data migration is reviewed and applied, policies deny
non-owners, and every direct Drizzle query authenticates and scopes by owner.

## Step 0 — Check the ground

Copy [`data-model.md`](../../project-templates/app/data-model.md). Stop if the
PRD does not say who owns the core object or what other users may do with it.
Do not encode an unresolved product decision in SQL.

## Prepare the model

1. Define the smallest table/object shape that meets the PRD. Record types,
   required fields, constraints, indexes, relationships, and delete behavior.
2. Complete the access matrix for signed-out, owner, non-owner, and trusted
   server operations.

Supabase documents that service/privileged access can bypass RLS; review the
[RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security)
alongside the pinned starter's
[database guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md)
and exact
[`src/db/index.ts`](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/db/index.ts)
(checked 2026-07-25).

```prompt
Context: Read the approved PRD, data-model.md, existing schema/migrations, and
current database access code. Do not generate or apply a migration yet.

Propose the minimum core schema and access matrix. Identify:
- constraints and ownership field;
- RLS policy for each allowed operation;
- every direct Drizzle query that would bypass RLS;
- how each privileged query will validate auth and include owner scope;
- migration risks, recovery, and two-user tests.

Do not invent fields not required by the PRD. Stop for schema approval.
```

## Approval gate

This gate has two explicit stops:

1. The product owner approves object semantics, ownership, and deletion before
   schema source is edited.
2. After SQL is generated and read, return to this gate. A technical reviewer
   approves the exact generated SQL, policies, privileged-query scope, target
   project, backup/recovery, and migration command before it is applied.

## Steps

1. Add the schema and RLS declarations following the pinned starter's existing
   patterns.
2. Run `bun run db:generate`. Do not use `db:push` for this course path; a
   generated migration gives the team SQL to review and commit.
3. Read the SQL line by line. Check destructive operations, defaults, nulls,
   constraints, indexes, RLS enablement, policies, grants, and schema names.
4. Record recovery. For a disposable development project this may be recreate
   and reapply; for retained data it needs an actual backup and rollback plan.
5. Return to the second approval stop above. Apply with `bun run db:migrate`
   only after that review passes.
6. Test using a normal authenticated Supabase client as User A and User B.
   Prove allowed owner operations and denied non-owner operations.
7. Audit every direct Drizzle access to the core object. The pinned
   `src/db/index.ts` connects with a privileged Postgres role that bypasses RLS.
   Each direct query must first validate the authenticated user and include
   that user's ID in the select/update/delete predicate.

## Verify

- User A can perform only the approved operations on A's record.
- User B cannot read or mutate A's record by guessing its ID.
- Signed-out requests are denied.
- Direct Drizzle select/update/delete predicates include authenticated owner
  scope; an RLS policy alone is not accepted as protection.
- The migration file is committed and schema history matches the database.

## Save point

Commit schema and reviewed migration before building the feature UI. Record
test identities without recording credentials.

## If this fails

- **Generated SQL contains a drop or broad alteration:** stop and revise the
  schema; do not edit away a symptom without understanding it.
- **RLS test passes only in the SQL editor:** retest through a normal
  authenticated client; editor/admin context is privileged.
- **A direct query returns another user's row:** disable that route, restore the
  last safe commit if needed, add authenticated owner scoping, and add a
  regression test.
- **Migration state is unclear:** stop applying commands and inspect the
  migration journal and actual database.
