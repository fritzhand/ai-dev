---
summary: Complete one protected create, view, update, and delete workflow from the interface through validated, owner-scoped data access.
requires: [05-05-design-and-migrate-the-core-data, 05-06-add-google-sign-in]
infographics: [rapid-app-development-workflow]
---

# Build one vertical slice

**Requires:** Working authentication, the reviewed core schema and migration,
the approved PRD, and a save point after database/auth verification.

**Done when:** A signed-in user completes the PRD's core workflow while
signed-out and non-owner attempts fail safely.

## Step 0 — Check the ground

Open the PRD and `todos.md`. Stop if the vertical slice cannot be described as
one user-visible flow or if its ownership tests are missing. Do not build
separate “frontend” and “backend” piles with no working connection between
them.

## Prepare the slice

1. Mark the exact acceptance criteria this milestone will satisfy.

If code uses the pinned starter's direct Drizzle `db`, it is privileged and can
bypass RLS. Authenticate on the server first and scope every select, update,
and delete by the authenticated owner's ID. Never accept a client-supplied
owner ID as proof. This follows the pinned
[`src/db/index.ts`](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/db/index.ts),
the starter's
[database guide](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md),
and Supabase's
[RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security).

```prompt
Context: Read the approved PRD, data-model.md, migration, auth helpers,
data-access code, and selected acceptance criteria.

Plan one vertical slice through UI, validation, authenticated server boundary,
owner-scoped query, database, response, and failure states. Name exact files
and tests. For every direct Drizzle query, show where the user is authenticated
and where the owner ID enters the predicate. Do not add the differentiator or
optional systems.

Stop for plan approval before implementation.
```

## Approval gate

The product owner approves the visible flow and destructive behavior. A
technical reviewer approves validation, authentication, ownership predicates,
failure responses, and exact file scope before implementation, then reads the
diff before the next operation.

## Steps

1. Build the empty and loading states first so the route has truthful behavior
   before data exists.
2. Implement create with server-side validation, authenticated identity, and
   an owner ID derived from the session—not from trusted client input.
3. Implement the owner-scoped list/detail read.
4. Implement update with validation and a predicate that includes both record
   identity and authenticated owner.
5. Implement delete or archive according to the PRD, with a confirmation and
   useful recovery where appropriate.
6. Return useful invalid, unauthenticated, unauthorized/not-found, and service
   failure states without exposing internals.
7. Test as User A, User B, and signed out.
8. Work in route-sized milestones. Run checks and inspect the diff after each.

## Verify

- Signed out: protected routes and mutations do not proceed.
- User A: create, view, update, and delete/archive work as specified.
- User B: guessed identifiers do not reveal or mutate A's record.
- Invalid input: useful error, no partial record.
- Direct privileged query: authenticated owner appears in its predicate.
- Refresh and narrow-screen browser path remain usable.

## Save point

Commit each working operation or coherent route group. Record acceptance IDs
and evidence in
[`milestone-review.md`](../../project-templates/app/milestone-review.md).

## If this fails

- **UI works with hard-coded data only:** stop and complete one end-to-end
  operation before adding another screen.
- **A non-owner sees data:** disable the affected route, preserve evidence,
  fix both the query scope and regression test before continuing.
- **Mutations leave partial state:** add transaction/idempotency behavior
  appropriate to the operation before retrying.
- **The agent broadens scope:** move discovered features to the PRD backlog and
  restore the vertical-slice boundary.
