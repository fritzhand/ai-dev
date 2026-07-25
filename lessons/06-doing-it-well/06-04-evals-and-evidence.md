---
summary: Turn requirements into a fixed set of repeatable checks so code, prompt, and model changes can be compared rather than admired.
requires: []
infographics: [how-to-tell-if-it-works]
---

# Evals and evidence

![A repeatable evaluation loop defines tasks and representative cases, writes checks, runs the same cases, inspects failures, changes one thing, and repeats.](/infographics/how-to-tell-if-it-works.webp)

**Requires:** A stated user outcome or acceptance criterion and a candidate
implementation.

**Done when:** A fixed set covers ordinary, edge, permission, and failure
behavior; results identify a commit/configuration and lead to a ship, fix,
rollback, or scope decision.

## Step 0 — Check the ground

Stop if the only criterion is “looks good.” Ask what a user does, what result
must be true, what must never happen, and what evidence another person can
repeat.

## Steps

1. Convert each requirement into a check with input/setup, action, expected
   result, and evidence.
2. Choose the smallest useful level:
   - static/type/lint for source constraints;
   - unit for deterministic logic;
   - integration for boundaries;
   - browser/E2E for the user path;
   - human review for meaning, usefulness, and visual judgment.
3. Include an ordinary case, empty/invalid case, boundary case, permission
   case, external failure, and regression for every serious past bug.
4. For model output, define properties and unacceptable results rather than
   one preferred sentence. Keep a fixed input set with ordinary, difficult,
   adversarial, and refusal/failure cases.
5. Freeze the commit, prompt, model/provider configuration, data fixture, and
   environment before running.
6. Record failures before making changes. Change one meaningful variable where
   practical, then rerun the same set.
7. Separate harness failure, service failure, and product failure.
8. Use the evidence to decide: ship, fix, narrow scope, or rollback.

```prompt
Context: Read the approved requirements and current implementation. Do not
change code or prompts.

Create a compact evaluation matrix with ID, requirement, setup/input, action,
expected result, test level, evidence artifact, and failure severity. Include
ordinary, empty/invalid, permission, service failure, and regression cases. For
model output, define observable properties and unacceptable outputs. Identify
requirements with no credible evidence.
```

## Approval gate

The product owner approves that the set represents real usefulness and
unacceptable outcomes. A technical reviewer approves fixtures, permission
boundaries, environments, and what blocks release.

## Verify

Give the set and build to a second person. They should reproduce the result
without reading the implementation chat. Confirm every pass refers to the same
commit/configuration and every failure has a disposition.

## Save point

Commit durable tests and safe fixtures. Store human/browser evidence with the
milestone record, including commit, environment, date, and configuration but no
credentials or personal data.

## If this fails

- **Results vary without a code change:** record environment/model/service
  configuration and run enough repetitions to expose the variation.
- **The set grows without bound:** keep release-critical checks, representative
  boundaries, and regressions; route exploratory cases separately.
- **The team changes prompts after every single example:** freeze a small set
  and compare changes against all of it.
- **A passed test does not prove the user job:** add the browser/human outcome,
  not more implementation-detail assertions.
