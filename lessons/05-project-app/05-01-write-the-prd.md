---
summary: Define one learner-chosen user, job, data object, complete workflow, differentiator, and observable acceptance set.
requires: [00-start-here]
infographics: [prd-anatomy, rapid-app-development-workflow]
---

# Write the PRD

![A product requirements document is annotated with problem, user, outcome, scope, out of scope, user flows, data and permissions, acceptance checks, and open questions.](/infographics/prd-anatomy.webp)

**Requires:** A problem you can describe from real experience or evidence and a
person who can make product decisions.

**Done when:** A human approves a PRD with one primary user, one job, one core
object, signed-out and signed-in flows, ownership rules, a differentiator,
acceptance criteria, and non-goals.

## Step 0 — Check the ground

Stop if the idea is only a technology (“an AI app”) or a feature list. Name the
person, their job, and the evidence that the problem exists. This course does
not supply a canonical app or data model.

## Steps

1. Copy [`prd.md`](../../project-templates/app/prd.md).
2. Write one product sentence: user, job, useful outcome.
3. Name the core data object in the user's language. Record its owner, required
   fields, and who may read, change, and delete it.
4. Describe signed-out, sign-in, and signed-in flows. Include empty, invalid,
   unauthorized, and unavailable states.
5. Define one vertical slice that completes a useful workflow from interface to
   database and back.
6. Name the differentiator, but keep it after the ordinary protected workflow.
7. Write acceptance criteria as observable Given/When/Then statements,
   including User A attempting to access User B's data.
8. List non-goals and optional systems this release does not need.

```prompt
Context: Interview me to complete prd.md for my own app. Do not propose a
sample product, schema, feature, customer, or business model.

Ask one decision-sized question at a time. Challenge vague terms with a request
for evidence or an observable example. When enough is known, draft:
- one user and job;
- one core object and ownership rules;
- signed-out and signed-in flows;
- one complete vertical slice;
- a differentiator;
- acceptance criteria and boundary cases;
- explicit non-goals and unresolved decisions.

Do not plan code until I approve the PRD.
```

## Approval gate

The product owner reads every acceptance criterion and non-goal. They decide
the product choices the prompt surfaced. A technical reviewer flags sensitive
data, permission boundaries, and external systems, but does not silently change
the product.

## Verify

Give the PRD to someone else. They should be able to state:

- who uses the app and for what job;
- what record they create or manage;
- what a signed-out person sees;
- what User B cannot do to User A's record;
- what evidence proves the first release works;
- what is explicitly postponed.

## Save point

Commit the approved PRD before cloning or changing application code:
`docs: approve app PRD`.

## If this fails

- **The PRD keeps growing:** choose one vertical slice and move every other
  workflow to non-goals.
- **The core object is unclear:** describe the thing the user expects to find
  when they return tomorrow.
- **The differentiator needs AI:** define the useful input/output and evaluation
  before choosing a provider.
- **No one can approve the product choices:** stop at an open-decisions list.
