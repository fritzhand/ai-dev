---
summary: Define the learner app's core object, ownership, constraints, permissions, and migration review before changing the database.
---

# Core data model

Use the nouns and rules from the learner's PRD. This is not a sample schema.

## Core object

- **Table/object name:**
- **Owner identity field:**
- **Primary key:**
- **Created/updated timestamps:**

| Field | Type | Required? | Source | Validation | Sensitive? |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

## Relationships

| From | Relationship | To | Delete behavior | Reason |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Access matrix

| Actor | Select | Insert | Update | Delete |
| --- | --- | --- | --- | --- |
| Signed out | Deny | Deny | Deny | Deny |
| Authenticated owner |  |  |  |  |
| Authenticated non-owner | Deny |  | Deny | Deny |
| Trusted server operation |  |  |  |  |

## Query guardrail

The pinned starter's direct Drizzle connection uses a privileged Postgres role
that can bypass RLS. Every direct application query must first authenticate the
user and include the owner identifier in its query predicate. RLS remains
necessary for Supabase browser/server clients; it is not a substitute for
owner scoping on privileged direct queries. Review the pinned
[`src/db/index.ts`](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/db/index.ts),
its [database guide](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md),
and Supabase's
[RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security).

## Migration review

- [ ] SQL creates only intended tables, columns, indexes, and constraints.
- [ ] Existing data behavior is understood.
- [ ] RLS is enabled and each allowed operation has a policy.
- [ ] Default access is denied.
- [ ] Rollback/recovery is written before apply.
- [ ] A human approves the generated SQL.
