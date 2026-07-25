# Rapid App Development Workflow

**Slug:** `rapid-app-development-workflow`

**Status:** Approved for course use

**Placement:** Part 5 project landing and instructor app guide

**Source:** Recreated from the repository owner's written teaching brief with explicit permission on 2026-07-25.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Teaching purpose

Show that rapid app development is a reviewed sequence, not one giant prompt. The human owns scope, architecture, approvals, data, and release. The AI proposes and carries out bounded work. Each milestone ends with checks, review, and a recoverable commit.

## Production prompt

```text
Create a polished 1200×675, 16:9 flat-vector educational infographic for a beginner course called AI Dev. This is a visual production draft for an asset named “Rapid App Development Workflow”. Off-white #f8fbfc background; near-black #10222c and navy #0b5a86 type; teal #0c7a63, amber #d98218, coral #c62c49 accents; large readable sans-serif; rounded white cards with thin tinted borders; restrained shadows; 48px safe margin; horizontal text; labels and shapes as well as colour; no logos.

Title exact: “Rapid App Development Workflow”
Subtitle exact: “Build a learner-chosen app in reviewed, testable milestones.”

Top planning sequence, left to right with arrows and numbered stage circles:
1. “PRD” with small line “problem · user · scope · done”
2. “Agentic IDE” with small line “repo + source material”
3. “Plan” with small line “steps · risks · dependencies”
4. amber diamond “HUMAN REVIEW” with small line “correct assumptions · approve milestone”
5. “todos.md” with small line “ordered · checkable work”
6. “Baseline commit” with small line “clean recovery point”

Below, a clear teal milestone loop with arrows:
“Build one milestone” → “Add data when required” with badge “Supabase” → “Add sign-in when required” with badge “Google via Supabase Auth” → “Test · review diff · commit” → “Next milestone”, with the arrow returning to “Build one milestone”.

Right-side or bottom-right coral-bordered panel titled exact “Human in the loop” with three compact rows:
“You decide” — “scope · architecture · approvals · data · what ships”
“AI does” — “propose · edit · run · report”
“STOP” — “unclear requirements · destructive action · failed checks”

Emphasize the human review diamond, baseline commit, and repeated test/review/commit loop. Make the decision structure unmistakable and the hierarchy clean. Keep all supplied text exact and legible. If space is tight, simplify icons, never shrink or alter the text.

Avoid: photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, versions, pseudo-text, lorem ipsum, tiny type, duplicated labels, cropped edges, misspellings, malformed logos, colour-only meaning, or suggesting this is the only valid software workflow.
```

## Accessibility text

**Alt text:** A two-row app workflow. The top row moves from PRD through an agentic IDE, plan, human review, todos, and a baseline commit. The lower row loops through one milestone, optional Supabase data, optional Google sign-in through Supabase Auth, tests, diff review, and a commit. A side panel says the human decides scope and release, while AI proposes and carries out bounded work.

**Caption:** Build a learner-chosen app in reviewed, testable milestones, with a commit at each recovery point.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- Every rendered label matches the approved copy.
- The arrows and numbered cards preserve a clear reading order.
- Review and stop states use words and shapes, not colour alone.
- The workflow makes optional data and sign-in steps explicit.
- No logo, metric, price, version, secret, or provider promise appears.
- The full-size PNG and production WebP are retained in `infographics/source/`.
