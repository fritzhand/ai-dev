---
summary: Place a specific human decision before code, data, external, destructive, and production actions instead of reviewing after the consequence.
requires: []
infographics: [the-approval-gate]
---

# Approval gates

![An AI-proposed action reaches a human gate that checks the change, target, reversibility, impact, and evidence before one scoped approval or a stop.](/infographics/the-approval-gate.webp)

**Requires:** A proposed action and enough information to describe what it
changes.

**Done when:** The project names each consequential action, approver, evidence
to review, approved scope, verification, and rollback before it runs.

## Step 0 — Check the ground

Stop if the request is only “approve this.” The reviewer needs the current
state, proposed change, exact target, commands or external actions, risks,
evidence, and recovery route.

## Steps

1. Classify the next action:
   - read/inspect;
   - reversible local edit;
   - dependency or generated-code change;
   - database/data mutation;
   - credential, permission, billing, or external-system change;
   - destructive action;
   - production deployment.
2. Put the gate immediately before the consequential action, not at the end of
   a long autonomous run.
3. Show exact scope: repository, branch, files, account, database project,
   environment, records, or production URL.
4. Show what the human will inspect: PRD, plan, diff, generated SQL, permission
   set, dashboard preview, test evidence, or deployment summary.
5. Record `approve`, `revise`, or `stop`, including any scope limit.
6. After the action, verify the approved outcome and record the save/rollback
   point. Approval is not proof the change worked.

```prompt
Context: I am about to perform [ACTION]. Do not perform it.

Prepare an approval packet with:
- current and proposed state;
- exact target and scope;
- commands or external writes;
- data, permission, cost, and production effects;
- evidence the reviewer should inspect;
- verification after the action;
- rollback or recovery;
- decisions that cannot be inferred.

End with a single clear approval question. Wait.
```

## Approval gate

For this lesson, the learner reviews the packet with another person or performs
a deliberate self-review. They approve only the stated scope. A changed target,
command, migration, permission, or deploy needs a new gate.

## Verify

Take one recent project action and answer:

- Could the reviewer identify the exact target?
- Did they see the consequential part before it happened?
- Was their decision recorded?
- Did post-action evidence prove the intended result?
- Could the team return to the previous state?

## Save point

Keep approval decisions near the plan, pull request, milestone review, or
deployment record. Never store credentials in the record.

## If this fails

- **The packet is too long:** reduce it to decision, effect, evidence, and
  rollback; link detail.
- **The approver cannot judge the technical diff:** add a qualified reviewer,
  a smaller test, or a safer environment.
- **The action changes while running:** stop and request a new approval.
- **There is no rollback:** use a disposable environment, backup, smaller
  scope, or do not proceed.
