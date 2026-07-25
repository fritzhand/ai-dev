# Context Engineering

**Slug:** `context-engineering`

**Status:** Approved for course use

**Placement:** Lesson 06-03 and both planning routes

**Source:** New course visual based on the course's routing and working-set method.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675 funnel titled “Context Engineering”. Subtitle: “Give the model the right working set.”

Inputs:
“Goal and done condition”
“Rules”
“Relevant source files”
“Good examples”
“Tool results”

Funnel: “RELEVANT · CURRENT · SCOPED · INSPECTABLE”.
Output: “Working context”.

Keep outside:
“Unrelated files”
“Stale copies”
“Secrets”
“Unsupported assumptions”

Loop:
“Route” → “retrieve” → “act” → “summarise” → “keep only what the next step needs” → “Route”.

Footer: “More context is not always better. Useful context is relevant, current and inspectable.”

Show secrets excluded, not deprioritised. Do not depict context as permanent memory.
```

## Accessibility text

**Alt text:** Goals, rules, relevant source files, good examples, and tool results enter a funnel labelled relevant, current, scoped, and inspectable, producing working context. Unrelated files, stale copies, secrets, and unsupported assumptions stay outside. A loop routes, retrieves, acts, summarises, and keeps only what the next step needs.

**Caption:** Good context is relevant, current, scoped, and inspectable.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All five useful inputs enter the working set.
- All four excluded items remain outside, with secrets clearly rejected.
- The maintenance loop returns to routing and does not imply permanent memory.
- No token limit or hidden-system-control claim appears.
