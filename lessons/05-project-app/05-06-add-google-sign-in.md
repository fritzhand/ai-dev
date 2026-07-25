---
summary: Configure Google through Supabase and implement the OAuth entry point missing from the tested starter's sign-in form.
requires: [05-04-connect-supabase]
infographics: [how-the-app-backend-fits, the-approval-gate]
---

# Add Google sign-in

**Requires:** Authority over the Google OAuth configuration and Supabase
project, a working local callback route, local and production origins, and a
separate email/password recovery sign-in.

**Done when:** “Continue with Google” creates a real session, profile, protected
route access, and sign-out locally and in production.

## Step 0 — Check the ground

At the tested commit, the
[`oauth-providers.ts`](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/lib/auth/oauth-providers.ts)
registry lists Google and the
[`/auth/callback` route](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/app/auth/callback/route.ts)
can exchange an OAuth code, but
[`auth-form.tsx`](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/components/auth/auth-form.tsx)
executes email/password only and has no `signInWithOAuth` call. Treat the button
as implementation work, not as an already working starter feature. These files
were checked on 2026-07-25.

## Prepare the change

1. Read Supabase's
   [Google login guide](https://supabase.com/docs/guides/auth/social-login/auth-google)
   and the pinned starter's
   [authentication guide](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/04-authentication.md).
2. Record the intended Google account/project, consent-facing identity,
   application origins, Supabase provider callback shown in the dashboard,
   local and production app callbacks, and recovery route. Do not change either
   dashboard.

```prompt
Context: Inspect the pinned auth form, Supabase browser client, provider
registry, callback route, profile trigger, sign-out route, and tests. Do not
change provider dashboards.

Plan the smallest Google sign-in implementation. Show exact files, UI/error
states, signInWithOAuth redirect construction, callback/session behavior, and
local plus production tests. Identify every external configuration step
separately and stop for human approval before editing or dashboard changes.
```

## Approval gate

The owner approves the Google project/account, consent-facing identity,
origins, Supabase callback, Site URL, redirect allow-list, and production
domain. A reviewer checks that the client secret is stored only in the provider
dashboard and that the application redirect returns only to approved origins.

## Steps

1. In Google, configure the approved OAuth web client and add the exact Supabase
   provider callback shown by the dashboard.
2. Store the Google client ID and secret in Supabase's Google provider
   configuration. Do not put the client secret in browser code or Git.
3. In Supabase URL configuration, set the approved Site URL and exact local and
   production application callbacks, including `/auth/callback`. Avoid a broad
   wildcard unless its risk is explicitly understood and approved.
4. Add a visible “Continue with Google” control to the sign-in experience.
5. On activation, use the browser Supabase client to call `signInWithOAuth`
   with provider `google` and a `redirectTo` built from the current approved
   origin plus `/auth/callback`.
6. Preserve loading, cancellation, and useful error behavior. Keep
   email/password as a recovery route unless the PRD deliberately removes it.
7. Test the complete local path: Google → Supabase → app callback → cookie
   session → profile trigger → protected `/app` → sign-out.
8. Repeat with the production origin after a separate production-configuration
   approval. Automated auth tests do not replace this real redirect test.

## Verify

- The Google control is keyboard reachable and reports failure.
- A new Google user returns through `/auth/callback`.
- The session survives navigation/refresh and opens the protected route.
- The profile record is created as expected.
- Sign-out removes protected access.
- An unapproved redirect is rejected.
- Local and production are tested manually with no credential in Git/logs.

## Save point

Commit the UI, handler, and tests without dashboard secrets. Record local and
production verification separately in the milestone review.

## If this fails

- **Google reports redirect mismatch:** compare the exact Supabase provider
  callback in Google; do not substitute the app callback.
- **Supabase returns but the app rejects:** check the app callback allow-list,
  origin, code exchange, and cookies.
- **The profile is missing:** inspect the applied trigger migration and callback
  logs without exposing tokens.
- **Production loops to sign-in:** verify production URL settings, environment
  values, cookies, and deployed commit.
- **The Google setup cannot be completed live:** use the tested email/password
  recovery path and schedule OAuth configuration outside the session.
