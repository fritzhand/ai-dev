# How a Learner App Stores and Protects Data

**Slug:** `how-the-app-backend-fits`

**Status:** Approved for course use

**Placement:** App lessons 05-04, 05-05, 05-06, and 05-10

**Source:** Rewritten from owner-supplied workshop material after auditing the course's pinned template revision. Security wording is checked against the template's direct Drizzle connection and Supabase's distinction between direct database access and the Data API.

**Construction mode:** Built-in image generation and image edit, followed by deterministic resize and WebP export. The edit removed generated product marks and retained plain text labels.

## Production prompt

```text
Create a 1200×675 flat-vector technical diagram titled “How a Learner App Stores and Protects Data”. Subtitle: “Authentication proves who the user is. Authorisation decides what that user may do.”

AUTHENTICATION: “Browser” → “Sign in with Google” → “Supabase Auth” → “Session cookie” → “Protected Next.js route”.

PRIVILEGED SERVER DATA PATH: “Browser action” → “Next.js server” → “Validate the session and input” → “Drizzle query scoped to this user” → “Supabase Postgres”.

Coral warning: “Direct Drizzle can bypass RLS. Server code must authorise and scope every query.”

Dotted optional lane titled “ONLY IF THE PROJECT USES THE SUPABASE DATA API”: “Supabase client” → “RLS policy” → “Postgres”.

Side card: “STORAGE” and “Signed upload or download”.

Bottom warning: “Never expose service-role or database credentials to the browser.”

Make the privileged direct connection and optional RLS-protected Data API visibly different. Use plain text product labels, not logos.
```

## Accessibility text

**Alt text:** Google sign-in creates a Supabase session used by a protected Next.js route. A browser action reaches the Next.js server, which validates the session and input before running a Drizzle query scoped to the current user. A separate optional Data API path uses an RLS policy. Warnings say direct Drizzle can bypass RLS and privileged credentials must never reach the browser.

**Caption:** The app authenticates with Supabase, then authorises and scopes each privileged server query to the current user.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- Auth and data lanes are separate and have a clear reading order.
- The direct Drizzle/RLS warning matches the pinned template audit.
- The optional Data API lane does not imply that RLS protects direct privileged queries.
- Product names are plain labels; generated product marks were removed.
- The server-credential warning is visible and exact.

Primary checks:

- [Pinned template revision](https://github.com/KRSHH/standard-saas-starter/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb)
- [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase server-side authentication](https://supabase.com/docs/guides/auth/server-side/nextjs)
