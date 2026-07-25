---
summary: Convert approved content and design into routes, files, milestones, checks, integrations, and non-goals before code.
requires: [04-02-build-the-knowledge-base, 04-03-write-design-md]
infographics: [the-approval-gate]
---

# Approve the implementation plan

**Requires:** Approved `project-brief.md`, `knowledge-base.md`, and `design.md`.

**Done when:** The owner approves a plan that maps every page and component to
source content and divides the build into verifiable milestones.

## Step 0 — Check the ground

Stop if any required page depends on missing primary content, or if the project
folder contains unexplained existing code. Audit what exists before planning
what changes.

## Steps

1. Copy the
   [`implementation-plan.md`](../../project-templates/landing-page/implementation-plan.md)
   template.
2. Ask the agent to inspect the current file tree without editing it.
3. Map each route to its purpose, source content, components, and browser
   acceptance check.
4. List files to create or change. Separate shared layout and tokens from page
   content.
5. Split the work into milestones that each run locally and have a clear diff.
6. For every integration, name the requirement, data sent outside the site,
   credentials, cost surface, fallback, and owner. Write `None` if none is
   needed.
7. Repeat the non-goals. This is the easiest place to stop scope creep.

```prompt
Context: Read the approved brief, knowledge base, design rules, and current
file tree. Do not edit files and do not install anything.

Produce an implementation plan with:
- route-to-content mapping;
- proposed components and exact files;
- ordered milestones that each leave a running site;
- required integrations and their data/credential implications;
- production-build, responsive, keyboard, link, and content checks;
- explicit non-goals;
- unresolved human decisions.

Do not choose new content, add pages "for completeness", or begin coding.
```

## Approval gate

The owner checks that the plan represents the approved brief. The technical
reviewer checks file scope, dependencies, integrations, tests, and milestone
order. Only then may the agent install packages or write code.

## Verify

Trace every proposed route, component, integration, and dependency back to an
approved need. Then trace every definition-of-done item forward to a planned
check. Remove anything that fails both tests.

## Save point

Commit the approved plan by itself:
`docs: approve landing-page implementation plan`.

## If this fails

- **The plan is a paragraph:** require a route table, file table, milestones,
  checks, and non-goals.
- **The plan hides decisions:** move copy, layout, and integration choices into
  the approval gate.
- **The project is too large:** narrow the brief before shortening the review.
- **Existing files are unclear:** inspect their purpose and history; do not
  overwrite them.
