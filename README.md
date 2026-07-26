# AI Dev.

Learn how to build with AI by completing two real projects:

1. Plan, build, review, and deploy a landing page with Astro, GitHub, and Vercel.
2. Turn your own app idea into a small authenticated product with a PRD, milestones, Supabase, and Google sign-in.

The projects are the course. Short reference lessons explain the terminal, Git, models, context, APIs, databases, secrets, and evaluation when a project step needs them.

The material works for a learner working alone and for an instructor teaching a cohort. The landing-page workshop has a fixed 120-minute route. The app project is milestone-led because each learner brings a different problem.

## Choose a route

- [Start here](lessons/00-start-here.md)
- [Build a landing page](lessons/04-project-landing-page/INDEX.md)
- [Build an app from your own PRD](lessons/05-project-app/INDEX.md)
- [Teach the landing-page workshop](instructor/landing-page-120-minutes.md)
- [Teach the app project](instructor/app-project.md)
- [Browse the reference](lessons/INDEX.md)
- [Browse all 31 infographics and their prompts](reference/infographics.md)

## The method

The practical work follows one repeatable loop:

```text
source material → written brief → plan → human review → small milestone
→ verification → save point → next milestone
```

AI can draft, inspect, and implement. The learner remains responsible for the choices, approval gates, tests, secrets, and release.

There is no canonical teaching app. Examples stay small, but the app route always starts from the learner's own user, job, data, and acceptance criteria.

## Run the course site locally

The publishing engine uses Node.js and has no runtime package dependencies.

```sh
node web/build.mjs
python3 -m http.server 8080 --directory _site
```

Open `http://localhost:8080/`.

The production site is built for the `/ai-dev/` GitHub Pages base path. The build validates curriculum registration, lesson prerequisites, prompt blocks, internal links, anchors, and visual records before publishing.

## Repository map

- `lessons/` — the two project spines and just-in-time reference lessons
- `instructor/` — timing, facilitation, recovery, and maintenance guides
- `project-templates/` — copyable planning and review documents
- `reference/` — setup, glossary, troubleshooting, current stack, and sources
- `infographics/` — inventory, prompts, provenance, exact copy, and review notes
- `web/` — the static publishing engine and browser assets
- `planning/` — approved scope and implementation decisions

## App template baseline

The app lessons reference `KRSHH/nextjs-template` at audited commit
[`e887b0cc9d380576aa3318bf8c095afbc3d768cb`](https://github.com/KRSHH/nextjs-template/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb).
The course preserves its MIT licence, strips optional systems unless the PRD needs them, and adds the Google OAuth entry point that is not present in that revision's sign-in form.

The template is a starting point, not proof that a learner's app is secure or complete. Every database query, migration, authentication flow, and production deployment has a human review and evidence gate.

## Contributing

Read [AGENTS.md](AGENTS.md) before editing. Keep instructions reproducible, use primary sources for claims that may age, never put real secrets in examples, and do not add a canonical demo app.

MIT licensed. See [LICENSE](LICENSE).
