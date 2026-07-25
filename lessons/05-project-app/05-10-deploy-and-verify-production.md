---
summary: Deploy the tested app with reviewed environments and migrations, then prove production auth, health, data ownership, and rollback.
requires: [05-09-test-against-the-prd]
infographics: [how-the-app-backend-fits]
---

# Deploy and verify production

**Requires:** A tested commit, production Vercel and Supabase projects or an
approved environment plan, production Google configuration, migration
approval, and a rollback owner.

**Done when:** The deployed commit passes health, Google auth, core data,
non-owner, differentiator, and sign-out checks in production.

## Step 0 — Check the ground

Stop if the production database contains unbacked-up data, the tested commit is
unclear, local secrets will be copied into Git, or the owner has not approved a
production external write. Read the pinned starter's
[deployment guide](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/10-deployment.md)
and Supabase's
[environment guidance](https://supabase.com/docs/guides/deployment/managing-environments)
before configuring the target.

## Prepare the release

1. Record the exact release commit and clean production build.
2. Inspect source, package scripts, environment schema, migrations, auth
   callback, database clients, and eval evidence without changing GitHub,
   Vercel, Supabase, Google, or the production database.
3. Use the pinned
   [database guide](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md)
   to distinguish the pooled/serverless application connection from the direct
   migration connection. Verify the current Supabase-provided strings rather
   than editing one by guess.
4. The pinned
   [`package.json`](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/package.json)
   defines `build` and `db:migrate` as separate scripts. A source deployment
   therefore does not prove that a migration ran unless the reviewed release
   configuration explicitly runs it.

```prompt
Context: Prepare a production release report for this frozen commit. Do not
push, migrate, change dashboards, or deploy.

Inspect source, package scripts, environment schema, migrations, auth callback,
database clients, and eval evidence. Report:
- exact commit and expected build;
- required Vercel variables by sensitivity;
- application versus migration database connection needs;
- migration plan and recovery;
- Google/Supabase production redirects;
- production smoke and two-user permission tests;
- rollback steps.

Stop at the approval gate.
```

## Approval gate

Separate approvals are required for: repository/Vercel connection, production
environment values, migration target and SQL, Google/Supabase redirect changes,
and production deployment. Show current state, proposed state, evidence, and
rollback each time. Do not perform any of those writes until its approval
passes.

## Steps

1. Connect the learner's GitHub repository to Vercel. Review root, framework,
   build command, production branch, and access before confirming.
2. Enter required environment variables in Vercel's environment settings, not
   a committed `.env.production`. Classify each as browser-publishable,
   server-only, or privileged.
3. Review the production migration SQL, target, backup/recovery, and current
   migration state. Apply it with the separately approved release process.
4. Configure the production application callback in Supabase and its origin in
   Google. Confirm the exact Vercel/custom production origin.
5. Deploy the tested commit and read the full build log. Review current
   connected-Git behavior in the
   [Vercel Git documentation](https://vercel.com/docs/git).
6. Test `/api/health`, Google sign-in, callback, profile, protected route, core
   create/view/update/delete, differentiator, refresh, and sign-out.
7. Use two production test identities to prove non-owner denial without using
   real user data.
8. Confirm direct queries still match the pinned
   [`src/db/index.ts` guardrail](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/db/index.ts):
   server authentication plus owner scope.
9. Record deploy, migration, configuration, evidence, and rollback points.

## Verify

- Vercel identifies the tested commit.
- Production health works without leaking configuration.
- Real Google login, callback, refresh, protected route, and sign-out work.
- Core data and differentiator meet PRD criteria.
- User B cannot access or mutate User A's record.
- Direct Drizzle queries remain authenticated and owner-scoped.
- Logs and client bundles contain no privileged value.
- Rollback commit and database recovery are known.

## Save point

Record the deployed commit and migration identifier in the milestone review.
Keep dashboard values out of Git. Create a release tag only if the team uses
and maintains tags.

## If this fails

- **Build fails only remotely:** compare runtime, lockfile, environment, root,
  and case-sensitive paths with the clean local build.
- **Database connections exhaust/fail:** confirm the production connection is
  the provider's intended pooled/serverless string and the client settings
  match the pinned guide.
- **Migration fails:** stop the deploy path and use the reviewed recovery;
  never rerun blindly.
- **OAuth redirect fails:** compare the exact production origin, app callback
  allow-list, and Supabase provider callback.
- **A permission check fails:** disable the affected production route or roll
  back immediately, then fix and retest.
