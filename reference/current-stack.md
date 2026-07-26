---
summary: Record the course's taught platforms, reproducibility boundary, tested app-template commit, and maintenance checks as of 2026-07-25.
requires: []
infographics: []
---

# Current course stack

**Verified:** 2026-07-25

This page records choices, not permanent “latest” versions. The learner repository's manifest and lockfile govern installed versions. Recheck every provider's current documentation and account flow before a workshop.

## Landing-page route

| Layer | Course choice | Reproducibility rule |
| --- | --- | --- |
| Content and design inputs | Learner's approved project brief, knowledge base, assets, and `design.md` | Missing facts remain explicit gaps. |
| Framework | Astro | Keep the generated manifest and lockfile in the learner repo. |
| Local toolchain | Git plus the project-declared Node.js and package-manager setup | Follow declared requirements; do not substitute a second lockfile. |
| Source host and review | GitHub | Review the exact commit and repository visibility. |
| Deployment | Vercel Git integration | Verify preview and production against exact commits. |
| Domain, forms, analytics, and search tooling | Optional, only when the brief requires them | Add after the two-hour core route. |

The two-hour workshop finishes at a reviewed Vercel URL backed by reviewed GitHub source. A custom domain and optional services are follow-up work.

## Application route

The app belongs in its own learner repository and starts from:

- [`KRSHH/standard-saas-starter`](https://github.com/KRSHH/standard-saas-starter)
- tested commit [`e887b0cc9d380576aa3318bf8c095afbc3d768cb`](https://github.com/KRSHH/standard-saas-starter/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb)
- upstream commit date: 2026-07-22
- course audit date: 2026-07-25
- upstream licence: MIT; preserve its notice

The tested source provides a Next.js App Router and TypeScript baseline, a Bun-pinned package setup, Supabase authentication and database plumbing, Drizzle migrations, tests, and optional production integrations. Exact package versions and runtime requirements live in that commit's manifest and lockfile.

The core course keeps:

- Next.js, React, TypeScript, and the supplied interface primitives;
- Bun as the starter's chosen package manager;
- Supabase authentication and Postgres;
- Drizzle schema and migrations;
- the protected application shell, callback route, profile flow, health check, and relevant tests.

The core route defers payment systems, transactional email, notifications, analytics, error tracking, bot protection, and uploads unless the learner's approved PRD names a need.

## Known app-template teaching delta

At the tested commit:

- provider configuration includes Google and GitHub choices;
- an OAuth callback route exists;
- the rendered sign-in and sign-up forms are email/password flows;
- executable application source does not yet call `signInWithOAuth`.

The course therefore teaches Google sign-in as an implementation milestone, not as a pre-existing starter feature. It requires current Google and Supabase configuration plus real local and production verification.

The template also has a direct Drizzle database path. A privileged server database connection can bypass RLS enforcement. Course queries must authenticate the user and scope operations by ownership; “the table has RLS” is not sufficient proof for every server query path.

## Maintenance check before teaching

1. Confirm the tested commit is still available and the MIT notice is intact.
2. Build the baseline from a clean clone using its pinned package manager and declared runtime.
3. Run its documented static, unit, and browser checks.
4. Compare moving upstream `main` with the tested commit; do not silently teach the moving branch.
5. Test current GitHub, Vercel, Supabase, and Google account flows.
6. Test Google sign-in locally and in production; automated email/password tests do not prove the external redirect works.
7. Confirm environment-variable names, database connection modes, redirect URLs, and deployment behaviour against current official documentation.
8. Update this verification date and the dated [source register](sources.md) when the taught baseline changes.

There is no canonical course app. Each learner's approved PRD defines its user, one core job, data object, differentiator, and acceptance checks.
