---
summary: Turn the approved PRD into repeatable acceptance, boundary, and production checks with recorded evidence.
---

# App evaluation plan

PRD version/commit:

## Acceptance matrix

| ID | PRD criterion | Test level | Fixture/account | Expected result | Evidence |
| --- | --- | --- | --- | --- | --- |
| AC-01 |  | Human/browser |  |  |  |

## Required boundary cases

- [ ] Signed-out user requests a protected page.
- [ ] User A requests User B's record by a guessed identifier.
- [ ] Required input is missing or invalid.
- [ ] Empty state appears before the first record.
- [ ] External service fails or returns slowly.
- [ ] Repeated submission does not create unintended duplicates.
- [ ] Narrow viewport and keyboard route work.

## AI feature evaluation, if applicable

- **Input set and source:**
- **Expected properties, not preferred wording:**
- **Unacceptable outputs:**
- **Grounding/source check:**
- **Cost/latency to record:**
- **Human reviewer:**

Do not tune a prompt on one attractive example. Keep a small fixed set of
ordinary, edge, and failure cases, then compare changes against the same set.

## Test commands

- Static/check:
- Unit:
- Browser/E2E:
- Production smoke:

## Result record

- **Commit:**
- **Environment:**
- **Date:**
- **Passed:**
- **Failed:**
- **Decision: ship / fix / rollback / narrow scope**
