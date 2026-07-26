---
summary: Configure Supabase locally without tracking secrets, review the starter migrations, and prove auth/database plumbing before product schema work.
requires: [05-03-map-and-strip-the-starter]
infographics: [how-the-app-backend-fits, secrets-and-environment-variables]
---

# Connect Supabase

![Google sign-in creates a Supabase session while a separate privileged server data path validates the session and scopes each Drizzle query to the current user.](/infographics/how-the-app-backend-fits.webp)

**Requires:** A learner-owned Supabase project, authority to change it, the
clean starter shell, and a local `.env.local` that Git ignores.

**Done when:** Required local configuration works, starter migrations and the
profile trigger are inspected and applied with approval, the health route
connects, a test signup creates a profile, and Git contains no secret.

## Step 0 — Check the ground

Read the pinned starter's
[environment guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/02-environment-variables.md)
and [database guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md).
Stop if you are using someone else's project, a production database with data,
or a value copied from an untrusted message.

## Prepare the connection

1. Inspect `.env.example`, the environment schema, `.gitignore`, Drizzle
   configuration, and every existing migration without creating values or
   changing Supabase.
2. Record schemas, tables, policies, triggers, buckets, and privileges the
   migrations would change.
3. Identify the exact development project, backup/recovery route, and owner.

```prompt
Context: Inspect the pinned starter's environment schema, .env.example,
.gitignore, Drizzle configuration, and migration files. Do not reveal values
and do not apply a migration.

Produce:
- required local variables classified as browser-publishable, server-only, or
  privileged;
- every database object and privilege the existing migrations will change;
- a pre-migration backup/recovery check;
- post-migration health, profile-trigger, and secret-leak checks.

Stop for human approval before any database mutation.
```

## Approval gate

The project owner confirms the Supabase project and environment. A reviewer
reads the migration SQL and approves its target, effects, recovery route, and
command. Migration is a consequential external write. Do not create
configuration values, change the dashboard, or run the migration until this
gate passes.

## Steps

1. Run `bun run setup` and inspect `.env.local`. Confirm Git ignores it.
2. Add the required Supabase project URL and browser publishable/anon key to
   the names expected by the pinned environment schema. These are exposed to
   browser code and rely on RLS; they are not a replacement for authorization.
3. Add `DATABASE_URL` only to the server environment. It is privileged and must
   never use a `NEXT_PUBLIC_` name or enter client code.
4. Do not add the service-role key unless an approved retained feature needs
   it. It is privileged, server-only configuration.
5. Run the setup/config doctor again without pasting its values into chat or
   screenshots.
6. Back up or use the approved disposable development project, then run the
   reviewed `bun run db:migrate` command.
7. Start the app. Check `/api/health`, create a test account using the existing
   email route, follow its verification behavior, and confirm the related
   profile appears.
8. Inspect `git status`, `git diff`, and tracked files for secret values.

## Verify

- `.env.local` is ignored; no real value appears in Git, logs, prompts, or
  browser-delivered source except intended publishable values.
- The health route reports the expected connection without exposing a
  connection string.
- Signup/auth callback behavior is understood.
- A new auth user receives the expected profile record.
- Existing starter schema is recorded before product schema changes.

## Save point

Commit only reviewed source or documentation changes. Environment values and
dashboard state stay outside Git. Record the migration and verification date
in `todos.md`.

## If this fails

- **The database URL fails:** re-copy it from the project settings and check
  whether the intended connection mode matches the command; do not print it.
- **Migration partially applies:** stop further commands, preserve the log, and
  inspect migration state before retrying.
- **Profile is missing:** inspect the custom trigger migration and auth event;
  do not insert a permanent manual workaround.
- **A secret enters Git:** revoke/rotate it first, then remove it from tracked
  history with review.
