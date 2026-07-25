# The Approval Gate

**Slug:** `the-approval-gate`

**Status:** Approved for course use

**Placement:** Both project routes, instructor material, and lesson 06-01

**Source:** New course visual based on the course's human-review contract.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675 flat-vector decision flow titled “The Approval Gate”. Subtitle: “Approval is a decision, not a reflex.”

Left: “AI proposes an action”.

Centre amber gate titled “CHECK BEFORE APPROVING”:
1. “What will change?”
2. “Where will it change?”
3. “Can it be undone?”
4. “Does it affect people, money, data or an external system?”
5. “Did the checks pass?”

Teal route: “Approve one scoped action”.
Coral route: “Stop, narrow the scope or ask for evidence”.

Bottom risk strip:
“READ-ONLY” — “can still expose sensitive data”
“REVERSIBLE PROJECT EDIT” — “review the diff”
“DESTRUCTIVE · EXTERNAL · IRREVERSIBLE” — “explicit human approval”

Footer: “Read the exact action and target.”

Show accountability staying with the person at the gate. Do not imply that read-only access is automatically safe.
```

## Accessibility text

**Alt text:** An AI-proposed action reaches a human gate with five checks about the change, target, reversibility, impact, and evidence. It can proceed as one scoped action or stop for a narrower scope or more evidence. A risk strip distinguishes read-only, reversible, and destructive or external actions.

**Caption:** A human approval gate checks the exact action, target, reversibility, impact, and evidence.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All five gate questions match the course method.
- Approve and stop routes use words, icons, and shapes as well as colour.
- Read-only access is explicitly described as potentially sensitive.
- Destructive, external, and irreversible actions require explicit human approval.
