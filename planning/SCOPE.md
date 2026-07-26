# `ai-dev` — approved scope

**Status:** Approved for implementation on 2026-07-25.

**Verification:** Recheck software behaviour and primary sources while
building and during the maintenance review.

**Publication:** Public. Private paths and source material are deliberately
excluded.

**Prepared:** 2026-07-25

**Intended repository:** `https://github.com/fritzhand/ai-dev` (public)

**Intended course site:** `https://fritzhand.github.io/ai-dev/`

## 1. The decision

Build `ai-dev` as a fresh repository. Copy the reusable publishing engine from
`startup-stack`; do not fork `startup-stack`.

The course has two practical spines:

1. Build and deploy a landing page with Astro, GitHub, and Vercel.
2. Build and deploy an application from
   [`KRSHH/standard-saas-starter`](https://github.com/KRSHH/standard-saas-starter), using
   Supabase and adding Google sign-in.

The same material must work in two modes:

- **Self-serve:** a learner follows the project spine and opens reference
  lessons when a step requires them.
- **Instructor-led:** an instructor has a fixed two-hour landing-page route,
  pre-work, checkpoints, recovery paths, and teaching notes. The app project is
  milestone-led rather than forced into the same two-hour format.

Parts 1–3 are not an entrance exam. Parts 4 and 5 send the learner to the exact
reference page they need, at the point they need it.

These decisions were supplied by Jeremy on 2026-07-25. There is deliberately
no canonical teaching app. Each learner brings an idea and defines its user,
job, core data object, acceptance criteria, and non-goals in the PRD. The
instructor teaches the shared workflow and evidence gates, not one product
shape.

## 2. What is in scope

### In scope for the first public release

- Six curriculum parts.
- A landing-page project using Astro and Vercel.
- An app project using the referenced Next.js template, Supabase, and Google
  sign-in.
- Self-serve project routes.
- A two-hour instructor runbook for the landing-page project.
- A milestone-led instructor guide for the app project.
- Copyable prompts embedded in lessons.
- Templates for the project brief, knowledge base, `design.md`,
  implementation plan, PRD, `todos.md`, evaluation plan, and launch review.
- Search, responsive navigation, light/dark themes, section landings,
  infographic lightbox, sitemap, Open Graph metadata, hashed assets, and
  build-time validation.
- A complete infographic inventory with provenance, status, generation prompt,
  exact content, alt text, caption, and review gate.

### Deliberately outside the core path

- Payments, transactional email, notifications, uploads, analytics, error
  tracking, bot protection, and other optional SaaS systems.
- A custom domain, GA4, Search Console, Resend, Razorpay, or PayPal during the
  two-hour workshop.
- Teaching manual framework scaffolding or syntax as the main activity.
- Promising that an AI-generated implementation is correct before a human has
  tested it.
- Vendoring the KRSHH template into the curriculum repository.
- Reusing `startup-stack` governance, portfolio, worksheets, startup sections,
  fact tags, privacy carve, or company front-matter schema.

Optional production systems can become appendix lessons after the two core
projects work.

## 3. Information architecture

The site should offer routes, not one mandatory sequence:

| Route | For | Spine | Definition of done |
| --- | --- | --- | --- |
| Start here | Everyone | Orientation and readiness check | The learner knows which project to open and what must be prepared first. |
| Build a landing page | Self-serve learner | Part 4 | A reviewed Astro site is in GitHub and live on Vercel. |
| Landing-page workshop | Instructor and cohort | Part 4, fixed run-of-show | A reviewed site reaches a Vercel URL; launch extras remain follow-up work. |
| Build an app | Self-serve learner | Part 5 | An authenticated vertical slice passes its acceptance checks and is deployed. |
| Teach the app project | Instructor | Part 5 milestones | Each milestone has evidence, a save point, and a recovery route. |
| Browse the reference | Any learner | Parts 1–3 and 6 | A term or decision can be found without reading the course in order. |

The home page should lead with the two projects. “What AI is” and “The
machine” remain visible, but secondary.

## 4. Proposed repository tree

```text
ai-dev/
├── .github/
│   └── workflows/
│       └── pages.yml
├── AGENTS.md
├── LICENSE
├── README.md
├── course.config.json
├── site.config.json
├── lessons/
│   ├── INDEX.md
│   ├── 00-start-here.md
│   ├── 01-what-ai-is/
│   │   ├── INDEX.md
│   │   └── 01-*.md … 05-*.md
│   ├── 02-where-you-use-it/
│   │   ├── INDEX.md
│   │   └── 01-*.md … 04-*.md
│   ├── 03-the-machine/
│   │   ├── INDEX.md
│   │   └── 01-*.md … 07-*.md
│   ├── 04-project-landing-page/
│   │   ├── INDEX.md
│   │   └── 01-*.md … 08-*.md
│   ├── 05-project-app/
│   │   ├── INDEX.md
│   │   └── 01-*.md … 11-*.md
│   └── 06-doing-it-well/
│       ├── INDEX.md
│       └── 01-*.md … 06-*.md
├── instructor/
│   ├── README.md
│   ├── landing-page-120-minutes.md
│   ├── landing-page-prework.md
│   ├── landing-page-recovery.md
│   ├── app-project.md
│   └── maintenance-check.md
├── project-templates/
│   ├── landing-page/
│   │   ├── project-brief.md
│   │   ├── knowledge-base.md
│   │   ├── design.md
│   │   ├── implementation-plan.md
│   │   ├── qa-checklist.md
│   │   └── launch-checklist.md
│   └── app/
│       ├── prd.md
│       ├── keep-change-ignore.md
│       ├── todos.md
│       ├── data-model.md
│       ├── eval-plan.md
│       └── milestone-review.md
├── reference/
│   ├── glossary.md
│   ├── setup-macos.md
│   ├── setup-windows.md
│   ├── troubleshooting.md
│   ├── current-stack.md
│   └── sources.md
├── infographics/
│   ├── INDEX.md
│   ├── PROMPT-STYLE.md
│   ├── references/
│   ├── source/
│   └── specs/
│       └── <one markdown specification per visual>
├── tools/
│   └── make-og.mjs
└── web/
    ├── assets/
    │   ├── diagrams/
    │   ├── site.css
    │   ├── site.js
    │   └── tokens.css
    ├── infographics/
    └── build.mjs
```

`course.config.json` is the central list of parts and route order. Lesson
identity and order come from the numbered path; they are not repeated in front
matter. `infographics/INDEX.md` is generated from the individual specifications
so the prompt, sources, exact copy, and review history remain attached to the
asset instead of becoming one unmaintainable table.

## 5. Lesson contract

Every lesson uses a small, machine-checkable header:

```yaml
---
summary: One sentence that lets a learner and the site router know what this page does.
requires: [03-04-git, 03-05-github]
infographics: [what-git-is]
---
```

Every lesson body follows this shape:

```markdown
# Lesson title

**Requires:** What must already exist.

**Done when:** Observable evidence, not “you understand it.”

## Step 0 — Check the ground

Stop if an account, file, decision, key, or source is missing.

## Steps

Short actions, one reviewable output at a time.

## Approval gate

What the human reads or decides before the next action.

## Verify

Commands, browser checks, or acceptance criteria.

## Save point

What to commit and what the commit proves.

## If it fails

The likely failure states and the safe recovery route.
```

Copyable learner instructions use fenced blocks marked `prompt`:

````markdown
```prompt
Do not build yet. Read the supplied material and produce...
```
````

The lesson remains the source of truth. The site build generates a filterable
prompt index from these blocks rather than storing a second, drifting copy.

## 6. Full lesson list

### Start

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `00-start-here.md` | Pick a route and check the ground | Choose landing page or app; complete the correct preflight; stop on missing inputs. |

### Part 1 — What AI is

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `01-01-models-predict-text.md` | What a model actually does | Distinguish plausible continuation from sourced truth. |
| `01-02-training-weights-and-alignment.md` | How models are made | Explain training, weights, fine-tuning, and alignment without treating them as a database of copied answers. |
| `01-03-model-tiers-and-effort.md` | Pick a model for the job | Separate model tier from reasoning effort and choose deliberately. |
| `01-04-context-tokens-and-cost.md` | What the model is holding | Explain context, token use, long-thread cost, and why routing files matters. |
| `01-05-prompting-rag-or-fine-tuning.md` | Choose the right adaptation | Decide whether the problem needs a better instruction, retrieved source material, or changed model behavior. |

### Part 2 — Where you use it

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `02-01-same-model-different-surfaces.md` | Chat, desktop, IDE, terminal, API | Identify what changes when the model gains files, tools, or programmatic access. |
| `02-02-the-agentic-workspace.md` | Plan, act, observe, check | Supervise a coding agent and define a stopping condition. |
| `02-03-connectors-and-permissions.md` | Reach another system safely | Start read-only, scope access, and save useful findings into the project. |
| `02-04-apis-keys-and-billing.md` | What an API call costs and exposes | Distinguish a subscription from API billing; identify public identifiers and secrets. |

### Part 3 — The machine

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `03-01-terminal-and-command-approval.md` | Read what the terminal will do | Recognise paths, installs, builds, and destructive commands before approving them. |
| `03-02-editor-ide-and-file-tree.md` | Work in a project folder | Find source, assets, configuration, and the agent panel. |
| `03-03-node-packages-and-runtimes.md` | Node, npm, Bun, and dependencies | Explain why a project needs a runtime, package manager, lockfile, and install step. |
| `03-04-git-save-points.md` | Commit, diff, branch, restore | Create recoverable milestones and inspect exactly what changed. |
| `03-05-github-repositories-and-review.md` | Put history online | Create the right visibility, push a branch, and review a proposed change. |
| `03-06-markdown-assets-and-paths.md` | Give the AI usable material | Prepare text, images, filenames, and links without breaking references. |
| `03-07-framework-host-domain-database.md` | See the whole web stack | Place Astro/Next.js, GitHub, Vercel, Supabase, a domain, and the browser in the correct layers. |

### Part 4 — Project: a landing page

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `04-01-prepare-assets-and-brief.md` | Compile the source material | Produce an auditable asset folder and a short project brief; surface missing content. |
| `04-02-build-the-knowledge-base.md` | Turn assets into site content | Create `knowledge-base.md` with identity, audience, offers, proof, calls to action, links, and explicit gaps. |
| `04-03-write-design-md.md` | Agree the visual rules | Create `design.md` from real brand material and references; approve mobile and accessibility rules. |
| `04-04-approve-the-implementation-plan.md` | Plan before code | Produce pages, components, content mapping, files, integrations, checks, and non-goals. |
| `04-05-build-the-astro-site-in-milestones.md` | Build from the approved plan | Let the agent scaffold and implement Astro in small, committed milestones. |
| `04-06-review-and-fix-locally.md` | Test the actual result | Check responsive layouts, content, links, keyboard use, accessibility basics, and visual consistency with evidence. |
| `04-07-deploy-through-github-and-vercel.md` | Put the reviewed source live | Push the approved commit, inspect the Vercel build, and verify the production URL. |
| `04-08-finish-the-launch.md` | Add only the launch layers needed | Finalise canonical URLs, Open Graph, sitemap, domain, forms, analytics, and search tools only where the brief requires them. |

### Part 5 — Project: an app

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `05-01-write-the-prd.md` | Define the smallest useful app | Name one user, one job, one core data object, signed-out and signed-in flows, acceptance criteria, and non-goals. |
| `05-02-start-from-the-tested-template.md` | Create a reproducible baseline | Start a separate learner repo from the tested KRSHH revision, preserve its licence, install it, and pass baseline checks. |
| `05-03-map-and-strip-the-starter.md` | Decide what stays | Produce `keep-change-ignore.md`; remove or disable misleading starter copy and irrelevant optional systems. |
| `05-04-connect-supabase.md` | Configure the required backend | Set local secrets, apply and inspect migrations, verify the profile trigger and health endpoint, and check that no secret entered Git. |
| `05-05-design-and-migrate-the-core-data.md` | Make the database match the PRD | Define ownership, constraints, migrations, and RLS; review generated SQL before applying it. |
| `05-06-add-google-sign-in.md` | Implement the missing OAuth entry point | Configure Google and Supabase, add the sign-in control, verify callback/session/profile/sign-out locally and in production. |
| `05-07-build-one-vertical-slice.md` | Complete one protected workflow | Create, view, update, and delete the core object with authentication, validation, ownership checks, and useful failures. |
| `05-08-add-the-differentiator.md` | Build the reason this app exists | Add the project-specific feature after the ordinary plumbing works; route to API/context/eval lessons if it uses AI. |
| `05-09-test-against-the-prd.md` | Produce evidence, not confidence | Run static checks, unit tests, browser tests, a real OAuth test, and a human acceptance review. |
| `05-10-deploy-and-verify-production.md` | Make the complete slice work live | Configure Vercel, pooled versus direct database access, production migrations, redirects, health, auth, data, and security checks. |
| `05-11-optional-production-layers.md` | Add a system only for a named need | Route to billing, email, notifications, uploads, analytics, errors, rate limiting, or bot protection separately. |

### Part 6 — Doing it well

| ID and file | Lesson | Outcome |
| --- | --- | --- |
| `06-01-approval-gates.md` | Decide what requires a human | Put review gates before code, migrations, destructive actions, external writes, and deployment. |
| `06-02-secrets-and-environment-variables.md` | Keep configuration out of source | Place public values and secrets correctly across local, preview, and production environments. |
| `06-03-context-engineering.md` | Give the agent the right working set | Assemble instructions, source files, state, tools, examples, and constraints without flooding context. |
| `06-04-evals-and-evidence.md` | Tell whether it works | Turn PRD acceptance criteria into repeatable checks and record failures before changing the prompt or code. |
| `06-05-cost-and-observability.md` | See what the product consumes | Track relevant model, database, deployment, and third-party usage without installing every dashboard. |
| `06-06-stop-rollback-and-maintain.md` | Know when to ship or reverse | Use scope boundaries, diffs, tests, health checks, and save points to stop, roll back, or continue. |

This is 42 lesson pages including `00-start-here.md`. The learner does not read
42 pages before building. The two project routes expose their spine first and
pull in the reference pages as prerequisites or troubleshooting links.

## 7. The two-hour landing-page workshop

### Pre-work — completed before the clock starts

- GitHub and Vercel accounts work.
- Node and Git work on the learner’s machine.
- The learner has an agentic coding tool that can read and write one project
  folder.
- The company asset folder exists and contains the minimum text and images.
- The learner knows the repository name and whether it will be public.
- The instructor has a known-good recovery project and tested deploy route.

If these do not hold, Step 0 stops the build. The class is not the place to
recover an account, invent missing company content, or configure a domain.

### Proposed 120-minute run-of-show

| Clock | Activity | Approval/evidence |
| --- | --- | --- |
| 00:00–00:10 | Preflight, scope, and safety | Correct folder, accounts, source material, and definition of done. |
| 00:10–00:25 | Asset audit and `knowledge-base.md` | Human corrects gaps, audience, claims, links, and calls to action. |
| 00:25–00:40 | `design.md` | Human approves typography, colour, layout, mobile, and accessibility direction. |
| 00:40–00:55 | Implementation plan | Human approves pages, files, non-goals, checks, and milestone order before code. |
| 00:55–01:25 | Astro build in milestones | Local site runs; each milestone has a diff or commit. |
| 01:25–01:45 | Browser review and targeted fixes | Desktop and mobile evidence; content and links checked. |
| 01:45–02:00 | GitHub and Vercel | The reviewed commit builds and the Vercel URL opens. |

The workshop definition of done is the live Vercel URL and its reviewed GitHub
source. Custom domain, GA4, Search Console, payments, and forms are follow-up
work. This is narrower than the current workshop deck’s final-deliverables
slide so the two-hour path has one credible finish line.

The instructor pack still needs:

- a preflight email/checklist;
- a projected timer and “where the room should be now” checkpoints;
- a recovery branch or reference project for each build milestone;
- a failure matrix for installation, local port, Git authentication, broken
  build, Vercel access, and missing asset;
- a demo company asset pack with invented material;
- a final handoff sheet for launch extras.

## 8. App-template integration

### Tested baseline

The audit used
[`KRSHH/standard-saas-starter`](https://github.com/KRSHH/standard-saas-starter)
at
[commit `e887b0cc9d380576aa3318bf8c095afbc3d768cb`](https://github.com/KRSHH/standard-saas-starter/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb),
dated 2026-07-22 and checked on 2026-07-25. The repository currently has no
tagged release. Course material must record the tested commit and re-run the
maintenance check before a workshop; pointing only at moving `main` is not
reproducible.

The learner’s product lives in its own repository. `ai-dev` links to the
template, records the tested revision, and teaches the delta. It does not copy
the template source into the course.

The template is MIT licensed. A learner who copies its source preserves the
upstream licence and notice. The course credits it as:

> App starter: KRSHH/standard-saas-starter, MIT, tested at commit `e887b0c`.

Until upstream publishes a tag, the setup lesson should clone the repository,
switch to the tested commit, create the learner’s own main branch, and keep the
upstream remote for later comparison. GitHub’s “Use this template” button
tracks current `main`; it is suitable only after the instructor maintenance
check has approved that revision.

### Core systems used

- Next.js App Router, React, and TypeScript.
- Tailwind and the supplied component primitives.
- Bun as the template’s pinned package manager, with its stated Node runtime
  floor.
- Supabase SSR authentication, Postgres, and storage plumbing.
- Drizzle schema and migrations.
- The protected `/app` shell.
- The existing callback route, profile trigger, health endpoint, tests, and
  security baseline.

### Systems deferred or removed from the core project

- Stripe and Razorpay.
- Resend and notification delivery.
- PostHog and Sentry.
- Turnstile.
- Uploads unless the PRD requires them.
- The notification UI and production rate-limit dependency unless they are
  deliberately configured.
- Starter pricing, trial, organisation, and legal copy that is not true for the
  learner’s product.

The “map and strip” lesson must remove or disable these cleanly and run the
baseline checks again. Leaving an unwired upgrade button or placeholder legal
claim in a deployed learner product is not acceptable.

Despite “AI” appearing in the repository description, the tested source does
not supply an AI provider, SDK, or product feature. If the learner’s
differentiator uses a model API, the course adds that deliberately in
`05-08-add-the-differentiator.md`.

The tested automated auth suite does not exercise a real Google redirect.
Google sign-in therefore requires a manual local and production test. If the
course leaves the template’s notification polling in place, its production
rate-limited route also needs the configured production dependency; the core
path should remove that surface or configure it explicitly rather than accept
background request failures.

### Google sign-in is curriculum work

The template’s OAuth registry names Google and GitHub, and its callback route
can exchange an OAuth code. At the tested commit, its sign-in and sign-up pages
still render email/password only and executable source contains no
`signInWithOAuth` call. The course therefore treats Google sign-in as a real
feature milestone:

1. Configure a Google OAuth web client.
2. Add the application origins in Google.
3. Add the Supabase callback URI in Google.
4. Enable Google and store the client credentials in Supabase.
5. Add local and production app callback URLs to Supabase’s allow-list.
6. Add “Continue with Google” to the app.
7. Call `signInWithOAuth` with the app callback.
8. Verify callback, cookie, generated profile, protected route, and sign-out.

Google OAuth setup belongs in app pre-work for an instructor-led session. It is
too account-dependent to discover for the first time in a short live build.
Email/password remains the recovery path.

### Database guardrail

The template’s direct Drizzle connection runs with a database role that can
bypass RLS. A server query is not made safe merely because an RLS policy exists.
Every course example must authenticate the user and scope direct Drizzle
queries by ownership. Migrations are reviewed and applied deliberately; Vercel
does not apply them merely because code was deployed.

### Milestone spine

```text
approved PRD
  → clean tested template baseline
  → keep/change/ignore decision
  → honest branded shell
  → connected and inspected Supabase project
  → reviewed data migration
  → working Google sign-in
  → protected vertical slice
  → project differentiator
  → tests and human acceptance pass
  → verified production deployment
```

The sequence is demonstrated against each learner's approved PRD. Small
examples may clarify a step, but no example becomes the course's product.

## 9. Site-engine plan

The recommendation to copy the engine still holds. The “97% generic” estimate
is directionally right at subsystem level, but “strip roughly 30 lines”
understates the work. Content assumptions are spread through the page registry,
navigation, home page, search taxonomy, shell copy, counts, privacy carve, OG
generator, and workflow.

### Copy and keep

- The markdown renderer, headings, tables, lists, code blocks, links, and
  figures.
- Hashed assets.
- Responsive shell, sidebar, section landing pages, table of contents, and
  previous/next navigation.
- Theme switcher.
- Search modal and generic filter engine.
- Copy-to-clipboard behavior.
- SVG diagram inlining and palette checking.
- Infographic copying, orphan checks, and lightbox.
- Internal-link checks, sitemap, robots, canonical, Open Graph, and optional
  analytics plumbing.
- Most of `tokens.css`, `site.css`, and `site.js`.
- GitHub Pages build/deploy steps.
- The generic Chromium and PNG rasterisation code in `make-og.mjs`.

### Rewrite or remove

| Surface | Change |
| --- | --- |
| Branding | Move all name, tagline, repository, base URL, OG alt, author/footer, and analytics values into `site.config.json`. Clear the old GA identifier. |
| Content discovery | Discover numbered lesson folders, instructor pages, templates, references, and infographic inventory. Remove `stackSections`, `promptFiles`, `worksheetFiles`, and `portfolio`. |
| Curriculum | Read part/order from paths, summaries/prerequisites from front matter, and routes from `course.config.json`. |
| Navigation | Replace startup method/work/portfolio groups with project routes, six parts, instructor material, reference, prompts, and infographics. |
| Prompt handling | Make every fenced `prompt` block copyable and generate a prompt index from lesson blocks. Remove the “first fence on a Prompt page” assumption. |
| Special pages | Replace prompt/worksheet/stack indexes with route, lesson, instructor, and infographic indexes. |
| Home | Rewrite completely around the two projects and the choice between self-serve and instructor-led use. |
| Privacy carve | Remove it. It belongs to a filled company knowledge base, not a public curriculum. |
| Search | Replace `prompt`, `worksheet`, and `section` kinds with route, lesson, part, guide, template, prompt, and infographic. |
| Client storage | Rename every `ss-*` local-storage key to an `ai-dev-*` namespace. |
| CSS | Remove fact-tag styles; retain and rename reusable card/filter styles. |
| Workflow | Keep site build and Pages deploy; remove the startup-stack scraper check. |
| OG generator | Replace stack/prompt/worksheet counts, stack glyph, headline, and chips; keep raster plumbing. |
| Favicon | Create an `ai-dev` mark; do not accidentally ship the stack glyph. |

### New build validations

The build fails when:

- a numbered part or lesson name is invalid;
- a lesson lacks an H1, summary, `Requires`, Step 0, observable definition of
  done, or verification section;
- a prerequisite target does not exist or prerequisites contain a cycle;
- a workshop route omits a prerequisite or pre-work resolution;
- a route points to a missing lesson;
- a curriculum Markdown link falls back silently to a GitHub blob;
- a heading fragment does not exist;
- an internal link, diagram, or infographic is missing;
- an infographic is orphaned, has empty alt text, or lacks an inventory record;
- an infographic inventory record lacks status, source, prompt, caption, alt
  text, and review gate;
- a generated page has no title or description;
- the committed OG card has drifted from its declared copy;
- generated output still contains startup-stack-only labels, URLs, analytics,
  storage keys, or privacy language.

### Verification before launch

- Build on the same Node version used by GitHub Actions.
- Build from a clean checkout at the `/ai-dev/` GitHub Pages path.
- Test intentionally broken links, anchors, prerequisites, cycles, routes, and
  orphan visuals.
- Test desktop and narrow mobile layouts.
- Test keyboard-only navigation, search, copy controls, and lightbox.
- Test light/dark themes, reduced motion, print, and no-JavaScript fallback.
- Test both project routes and the two-hour instructor route.
- Confirm sitemap, robots, canonical URLs, 404 behavior, social metadata, and
  asset hashes.
- Search the generated site for `startup-stack`, `portfolio`, `worksheet`,
  `stack/`, the old analytics ID, and `ss-`.

## 10. Content carried over

### Rewrite into the new course

- `docs/ai-basics.md`
- `docs/what-things-are.md`
- `docs/safety.md`

They are source material, not drop-in pages. Startup-specific claims, tool
names, data governance, and “knowledge base only” boundaries must be removed or
reframed for public websites and applications. Current product and provider
claims must be checked against official documentation while writing.

### Leave behind

- `stack/`
- `prompts/00-18`
- `worksheets/`
- `portfolio/`
- startup-stack’s `AGENTS.md`
- `docs/method.md`
- `docs/knowledge-base.md`
- `docs/front-matter.md`
- `docs/for-portfolios.md`
- `docs/exchange.md`
- `docs/weekly-recap.md`
- `docs/automation.md`
- `docs/for-coaches.md`

The new `AGENTS.md` governs curriculum accuracy instead: do not invent commands
or product behavior; pin or date unstable stacks; cite official sources; never
place a real secret in prose, examples, screenshots, or Git; stop when a
required account/file/decision is missing; review before code, migration,
external write, and deployment; preserve licences; and write for a learner who
has not used these tools before.

## 11. Infographic inventory

The source inventory contains a corrected count:

- The user’s reusable list says **17** but names **18** files.
- All 18 named WebPs exist in `startup-stack/web/infographics/`.
- The five requested workshop concepts are represented by six raster files in
  the deck because there are two Vercel variants. A seventh deck image covers
  the terminal and overlaps the existing terminal infographic.
- “Rapid App Development Workflow” is an approved recreation from the written
  teaching brief supplied by the repository owner.

That produces 31 candidate course visuals: 18 existing, five deck-derived
regenerations, the Rapid App Development Workflow, and seven new gaps.

Production update, 2026-07-25: all 31 candidates have passed their QA or
regeneration gate and now have reviewed 1200×675 assets, retained source PNGs,
standalone prompt specifications, lesson placements, and a public
[`reference/infographics.md`](../reference/infographics.md) library.

The complete inventory and production prompts follow in section 12.

### Current-asset QA findings

None of the 18 should be labelled “reuse as-is” until it passes review.

| Current asset | Known gate before publication |
| --- | --- |
| `the-loops-that-make-models-improve.webp` | Regenerate: multiple mangled labels. |
| `what-agentic-actually-means.webp` | Regenerate: visible copy error. |
| `editors-ide-and-what-agentic-means.webp` | Regenerate: visible copy error. |
| `what-node-is.webp` | Regenerate: visible copy error and a time-sensitive Node reference. |
| `what-a-database-is.webp` | Rewrite and regenerate: broken text, duplicate example, and unsafe simplifications. |
| `what-a-connector-is.webp` | Rewrite and regenerate: unfinished labels and a misleading “one adapter connects everything” implication. |
| `what-git-is.webp` | Adapt: duplicate timestamps and an over-broad description of checkout as undo. |
| `which-model-should-i-use.webp` | Rewrite and regenerate: an invented task-frequency claim and unsafe “careless” wording. |
| `where-your-words-actually-go.webp` | Fact-check and adapt: conversation replay, pricing, caching, and context behavior vary by product. |
| `what-weights-actually-means.webp` | Fact-check and adapt: model-file, capability, and confidentiality claims are too broad. |
| `the-same-model-four-places.webp` | Rewrite: products may use different model snapshots, system instructions, context assembly, and tools. |
| `how-a-website-actually-goes-live.webp` | Narrow to the taught Astro/Vercel route; remove universal hosting claims. |
| Remaining six current WebPs | Copy only after line-by-line text and factual review; retain a regeneration prompt as fallback. |

The repository also contains ten hand-built SVG diagrams with exact, editable
text and ARIA descriptions. These are safer starting points for Parts 1–3 than
generated raster text. Most can be adapted directly:

`chat-vs-folder`, `the-loop`, `your-toolkit`, `what-it-cannot-see`,
`index-not-everything`, `stay-in-the-loop`, `model-tiers-and-effort`,
`what-is-a-connector`, `what-is-git`, and `beyond-the-knowledge-base`.

### Specification stored with every visual

Each file in `infographics/specs/` records:

- lifecycle status: copy after QA, adapt, regenerate, or new;
- lesson, workshop step, and learning objective;
- source path, source commit or deck slide, creator/date where known, and
  licence/rights status;
- current and target dimensions;
- exact on-image copy;
- sources and verification dates for factual claims;
- full generation prompt and negative prompt;
- model/version and settings once generated;
- alt text, caption, and mobile fallback;
- known defects;
- copy, fact, accessibility, contrast, trademark, and instructor review;
- editable source and rendered output paths;
- revision history.

Dense visual scaffolds can be generated, but exact labels should be overlaid in
SVG or another editable layer before export. That is the direct response to the
spelling defects in the current generated images.

## 12. Production prompts

The full 31-item inventory and prompt packets are in
[`INFOGRAPHICS.md`](INFOGRAPHICS.md). Every item includes:

- its source and lifecycle status;
- exact layout and on-image copy;
- a production image-generation prompt;
- a factual guardrail;
- alt text and caption;
- a specific review gate.

The appendix also fixes the production contract at 1200×675 and records the
shared palette, type, arrow semantics, negative prompt, editable-source
requirement, and OCR/fact/accessibility checks.

## 13. Build order

1. Record the approved course scope, learner-selected app decision, and
   permission to recreate the supplied teaching visuals.
2. Create the fresh `ai-dev` repository and connect the public
   `fritzhand/ai-dev` remote.
3. Copy the generic site assets, workflow, and OG raster plumbing.
4. Replace the content registry and build validations before writing lessons.
5. Add the file tree, lesson template, project templates, and route skeletons.
6. Write the landing-page spine and two-hour instructor pack first.
7. Verify the landing route end to end with Astro, GitHub, and Vercel.
8. Write the app spine against the pinned KRSHH revision.
9. Implement and test the missing Google sign-in milestone in a learner repo.
10. Rewrite the reference material as just-in-time support for the two
    projects.
11. Produce, review, and add infographics; do not publish generated text without
    a line-by-line check.
12. Run build, browser, accessibility, route, link, source, licence, and
    secret-leak checks.
13. Generate the final OG card, save a version, and publish only after review.

## 14. Release gates

### Scope gate

- Jeremy has approved the course shape, lesson list, visual list, and
  exclusions.
- The app route is explicitly learner-selected; examples do not become a
  canonical product.
- Recreation from the Rapid Workflow written brief is approved.

### Landing-page gate

- A new learner can complete the self-serve path from prepared assets to a
  verified Vercel URL.
- An instructor can run the two-hour route with pre-work and recovery material.
- No step requires unstated prior knowledge.

### App gate

- The course is pinned to a tested upstream revision.
- Starter claims and unused integrations are removed or explicitly deferred.
- Supabase migrations, ownership, and direct Drizzle-query scope are reviewed.
- Google sign-in works locally and in production.
- The vertical slice passes automated and human acceptance checks.
- The upstream MIT notice remains.

### Publishing gate

- Every factual software claim has a current primary source.
- Every image passes text, factual, accessibility, and rights review.
- No secret, private source material, stale analytics ID, or startup-stack
  governance copy is present.
- The clean build and browser QA pass.

## 15. Sources used for this scope

### User decisions and supplied material

- Repository-owner decisions and curriculum/infographic brief supplied on
  2026-07-25.
- “Rapid App Development Workflow” written brief supplied on 2026-07-25, with
  explicit permission to recreate it.
- Owner-supplied workshop deck, inspected 2026-07-25. The private source file
  is not committed to this public repository.

### Local repository

- `web/build.mjs`
- `web/assets/site.css`
- `web/assets/site.js`
- `web/assets/tokens.css`
- `.github/workflows/pages.yml`
- `tools/make-og.mjs`
- `site.config.json`
- `docs/ai-basics.md`
- `docs/what-things-are.md`
- `docs/safety.md`
- `docs/infographics-ai.md`
- `docs/infographics-tools.md`
- `web/infographics/*.webp`

### Current primary sources

- [Pinned standard SaaS starter audit commit](https://github.com/KRSHH/standard-saas-starter/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb)
- [KRSHH template README at the tested commit](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/README.md)
- [KRSHH authentication guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/04-authentication.md)
- [KRSHH environment-variable guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/02-environment-variables.md)
- [KRSHH database guide](https://github.com/KRSHH/standard-saas-starter/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/docs/03-database.md)
- [Supabase: Google login](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Supabase: database security overview](https://supabase.com/docs/guides/database/overview)
- [Astro: getting started](https://docs.astro.build/en/getting-started/)
- [Astro: deployment](https://docs.astro.build/en/guides/deploy/)
- [Astro: Vercel integration](https://docs.astro.build/en/guides/integrations-guide/vercel/)
- [Vercel: Git deployments](https://vercel.com/docs/git)
