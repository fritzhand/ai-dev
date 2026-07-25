---
summary: Dated primary documentation used to verify the course's AI, runtime, Git, framework, hosting, authentication, and database guidance.
requires: []
infographics: []
---

# Sources

**Last checked:** 2026-07-25

This is a maintenance register, not a substitute for the linked documentation. Product interfaces, supported versions, pricing, limits, and authentication flows change. Reopen the source before teaching or implementing a version-sensitive step.

## OpenAI models, context, and API use

| Primary source | What was checked |
| --- | --- |
| [Models](https://developers.openai.com/api/docs/models) | Current model catalog describes different capability, speed, price, context, tool, and reasoning profiles. The course avoids freezing those moving choices in lesson prose. |
| [Compare models](https://developers.openai.com/api/docs/models/compare) | Model choice and supported features are model-specific; current identifiers and limits belong in a dated implementation decision. |
| [Model guidance](https://developers.openai.com/api/docs/guides/latest-model) | Model choice and reasoning effort are separate decisions; representative evaluations should determine the useful trade-off. |
| [API authentication](https://platform.openai.com/docs/api-reference/authentication) | API keys authenticate API calls, must be kept secret, and must not be exposed in browser or application client code. |
| [API pricing](https://openai.com/api/pricing/) | API usage is priced by current model and modality units; lessons link to current pricing rather than copying rates. |

These sources are examples from one provider. The course's general decision method also applies to other providers, but their credential classes, model names, prices, data handling, and controls must be checked in their own official documentation.

## Runtime and package management

| Primary source | What was checked |
| --- | --- |
| [Node.js download](https://nodejs.org/en/download) | Official installation source and currently supported releases. The project-declared runtime requirement remains authoritative. |
| [Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) | Node.js is a JavaScript runtime used outside the browser. |
| [npm package specification](https://docs.npmjs.com/cli/configuring-npm/package-json) | `package.json` declares project metadata, scripts, and dependencies. |
| [Bun installation](https://bun.com/docs/installation) | Current macOS and Windows installation and version-check routes. |
| [Bun install](https://bun.com/docs/pm/cli/install) | Install behaviour, lifecycle-script policy, frozen installs, and CI guidance. |
| [Bun lockfile](https://bun.com/docs/pm/lockfile) | The current text lockfile is `bun.lock` and should be committed for reproducible installs. |

## Git and GitHub

| Primary source | What was checked |
| --- | --- |
| [Git: About version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control.html) | Version control records changes over time and supports comparison and recovery. |
| [Git: Getting a repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) | A repository can be initialized locally or cloned. |
| [Git: Recording changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository.html) | Tracked, untracked, modified, staged, and committed states; a commit records the staged snapshot. |
| [Git downloads for macOS](https://git-scm.com/download/mac) | Official macOS installation routes. |
| [Git downloads for Windows](https://git-scm.com/download/win) | Official Git for Windows route. |
| [GitHub authentication](https://docs.github.com/en/authentication) | Current account and Git-operation authentication guidance. |
| [Create a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) | Repository ownership, creation, and visibility workflow. |
| [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) | A pull request proposes changes from a branch for collaboration before merge. |
| [Giving reviews](https://docs.github.com/en/pull-requests/concepts/giving-reviews) | Review comments, requested changes, and approval happen against proposed changes. |

## Web framework, hosting, authentication, and data

| Primary source | What was checked |
| --- | --- |
| [Why Astro](https://docs.astro.build/en/concepts/why-astro/) | Astro's content-oriented, server-first framework model and default approach to client JavaScript. |
| [Astro installation](https://docs.astro.build/en/install-and-setup/) | Current project-creation and local setup guidance. |
| [Astro deployment](https://docs.astro.build/en/guides/deploy/) | Current deployment routes and platform-specific guidance. |
| [Next.js App Router](https://nextjs.org/docs/app) | The app starter's file-system routing, layouts, navigation, and server/client component model. |
| [Next.js project structure](https://nextjs.org/docs/app/getting-started/project-structure) | Current App Router folder and file conventions. |
| [Vercel Git deployments](https://vercel.com/docs/git) | Connected repositories produce preview deployments for proposed work and production deployments from the configured production branch. |
| [Vercel deployment overview](https://vercel.com/docs/deployments/overview) | Local, preview, and production environments and the evidence available in deployment logs. |
| [Supabase Auth](https://supabase.com/docs/guides/auth) | Authentication identifies users; authorization controls access; Supabase can combine sessions with RLS. |
| [Supabase Auth architecture](https://supabase.com/docs/guides/auth/architecture) | Client, gateway, auth service, and Postgres layers; protected views and RLS behaviour require deliberate configuration. |
| [Supabase Google login](https://supabase.com/docs/guides/auth/social-login/auth-google) | Current Google OAuth provider, callback, origin, and client configuration flow. |
| [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security) | RLS policy model for data accessed through applicable database roles and APIs. |
| [Google OAuth web-server applications](https://developers.google.com/identity/protocols/oauth2/web-server) | Authorized origins, redirect URI matching, authorization flow, and server-side credential handling. |

## Tested upstream app baseline

| Primary source | What was checked |
| --- | --- |
| [`KRSHH/nextjs-template`](https://github.com/KRSHH/nextjs-template) | Upstream repository, documentation, licence, and moving default branch. |
| [Tested commit `e887b0c`](https://github.com/KRSHH/nextjs-template/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb) | Course audit baseline dated 2026-07-22 and reviewed on 2026-07-25. Exact dependency and runtime state comes from this commit. |

## Maintenance rule

When a source changes:

1. record the new check date;
2. identify the lesson or template affected;
3. update commands or claims only after a clean test;
4. preserve the old tested commit or decision in history;
5. rerun the course's relevant build, link, preflight, and project-path checks.

Do not write “latest” into a command or lesson unless the workflow deliberately accepts a moving dependency and explains how it will be rechecked.
