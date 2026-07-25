# PRD Anatomy

**Slug:** `prd-anatomy`

**Status:** Approved for course use

**Placement:** App lesson 05-01

**Source:** New course visual based on the learner-selected PRD template.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675 flat-vector annotated document titled “PRD Anatomy”. Subtitle: “Define the problem and boundaries before the build.”

Use nine numbered callouts:
1. “Problem” — “what is happening now?”
2. “User” — “who has this problem?”
3. “Outcome” — “what changes for them?”
4. “Scope” — “what is included?”
5. “Out of scope” — “what will not be built?”
6. “User flows” — “what must the user be able to do?”
7. “Data and permissions” — “what is stored, and who may see or change it?”
8. “Acceptance checks” — “how will we know it works?”
9. “Open questions” — “what must be decided before build?”

Footer: “A PRD sets the problem and boundaries. It does not need to prescribe every implementation detail.”

Do not invent a product, user, requirement, or metric.
```

## Accessibility text

**Alt text:** A blank product requirements document is surrounded by nine callouts: problem, user, outcome, scope, out of scope, user flows, data and permissions, acceptance checks, and open questions.

**Caption:** A useful PRD names the user, boundary, flow, data, and acceptance checks without inventing the implementation.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All nine sections match `project-templates/app/prd.md`.
- Acceptance checks are outcomes, not implementation tasks.
- The central document contains no invented product requirements.
- Leader lines and numbering preserve a clear reading order.
