# AGENTS.md — instructions for an AI working inside AI Dev

## What this repo is

AI Dev is a beginner-friendly curriculum for learning to build with AI. It must work in two modes:

- self-serve, for a learner working alone
- instructor-led, with a strict two-hour landing-page workshop path

The projects are the spine of the course. Reference lessons exist to unblock project work, not to form a wall of theory before a learner can build.

The landing-page project uses Astro, GitHub, and Vercel. The app project starts from a learner's own idea and PRD. It references the pinned `KRSHH/standard-saas-starter` baseline, Supabase, and Google sign-in. There is no canonical teaching app.

## Read in this order

1. `README.md`
2. `course.config.json`
3. `lessons/INDEX.md`
4. Only the lesson, template, reference, or instructor file required by the task

For publishing-engine work, also read `site.config.json` and `web/README.md`.

## Course rules

### Keep the learner moving

Every practical lesson must contain:

- a short outcome statement
- `Requires`
- `Done when`
- `Step 0` preflight
- numbered steps
- an explicit approval gate before consequential changes
- a verification step
- a save point
- a useful recovery path under `If this fails`

Do not assume prior terminal, Git, editor, database, deployment, or authentication knowledge. Link to the smallest relevant reference lesson when a term first becomes necessary.

### The learner chooses the app

Do not invent a sample company, product, database schema, feature set, or target customer and quietly turn it into the course's canonical app. Examples may be small and clearly labelled, but app-project instructions must work from the learner's own PRD.

The course teaches a stable sequence:

`idea → PRD → plan → human review → todos → milestones → commits → build → data → authentication → verification → release`

### Never invent facts

Commands, package names, versions, platform behaviour, prices, limits, security claims, and product capabilities must be verified against the repository or primary documentation. Record the source and verification date when the detail may age.

If a required fact is missing, write `[TBD — what is needed and where it should come from]`. Do not fill gaps with plausible details.

### Protect secrets and learner data

- Never commit API keys, tokens, passwords, private URLs, or real credentials.
- Use `.env.example` with obvious placeholders.
- Redact secrets from screenshots, logs, fixtures, prompts, and lesson output.
- Never tell a learner to expose a server secret in browser code.
- Explain whether a key is public, publishable, server-only, or privileged.
- Treat destructive database operations, account changes, billing, and production deployment as approval-gated actions.

### Human review is part of the method

Pause for a human check before:

- accepting a PRD or implementation plan
- running a destructive command
- applying a database migration
- enabling authentication or changing redirect URLs
- connecting a paid or external service
- deploying to production

The approval gate must say what the learner is checking and what will happen next.

### Prompt blocks are curriculum assets

Reusable prompts belong in fenced blocks marked `prompt`. Each prompt must state the context it expects and the output it should produce. The publishing engine indexes these blocks.

Do not write prompts that ask a model to make hidden product decisions. Put choices in front of the learner.

### Visuals must be auditable

Every infographic needs:

- a stable slug
- a source or recreation note
- a generation or construction prompt/spec
- editable source when practical
- alt text
- a caption
- a review record covering text accuracy, factual accuracy, contrast, and legibility

Course infographics use a 1200×675 canvas, an off-white background, navy type, and the shared teal, amber, and coral accents. Exact instructional text must remain editable; do not trust raster-generated text without checking it.

### Attribute upstream work

Preserve licenses and attribution for copied or adapted code and assets. Pin external templates to an audited commit in course instructions. Do not imply that a moving upstream branch is the tested course baseline.

### Keep public material public-safe

This is a public repository. Do not commit local absolute paths, private workshop material, credentials, participant data, or sources the owner has not approved for publication.

### Do not delete history silently

Do not delete source records, review notes, lesson history, or attribution without asking. If content is superseded, preserve the record or explain the migration.

## Writing style

Write for a capable beginner.

- Use concrete, short sentences.
- Define a technical term the first time it matters.
- Say what a command changes before asking the learner to run it.
- Avoid consultant language and unexplained jargon.
- Do not use a tone that implies the learner should already know the answer.

## Before committing

Run the relevant build and validation commands. At minimum, verify:

- the production build succeeds
- internal links and anchors resolve
- lesson prerequisites exist and contain no cycles
- all curriculum Markdown is registered
- every infographic has alt text and an inventory record
- the site works under the configured GitHub Pages base path
- no startup-stack names, private paths, or secrets remain
