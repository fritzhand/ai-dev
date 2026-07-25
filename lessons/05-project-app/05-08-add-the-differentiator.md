---
summary: Add the learner's product-specific value after the protected core workflow works, with explicit inputs, failures, and evaluation.
requires: [05-07-build-one-vertical-slice]
infographics: [prompting-rag-or-fine-tuning, context-engineering, how-to-tell-if-it-works]
---

# Add the differentiator

**Requires:** A passing protected vertical slice and an approved differentiator
in the learner's PRD.

**Done when:** The differentiator improves the named workflow, passes its
acceptance and failure cases, and does not weaken authentication, ownership, or
data handling.

## Step 0 — Check the ground

Stop if “add AI” is the requirement. Name the user input, useful output,
decision it supports, ordinary non-AI baseline, unacceptable result, and how a
human will judge it.

## Prepare the feature

Identify the proposed acceptance criteria, new data, service, package,
environment, billing, latency, privacy, and failure surfaces without changing
source or creating a provider account. Decide whether the need calls for a
deterministic rule, a model prompt, retrieved source context, or another
system. Do not choose a model merely because the project is an AI course.

```prompt
Context: Read the approved differentiator and its acceptance criteria. The
existing protected vertical slice must remain intact.

Propose the smallest implementation and evaluation plan. Separate deterministic
logic from any model call. State inputs, allowed source context, output schema,
server-only configuration, cost/latency signals, ownership boundary, failure
behavior, and a fixed eval set. Identify product decisions for human approval.
Do not edit code or choose a provider/model without approval.
```

## Approval gate

The owner approves the user experience, data sent externally, unacceptable
output, provider/account, likely usage surface, and fallback. A technical
reviewer approves the server boundary, secret handling, output validation,
owner scoping, and eval set. Do not change the PRD, create an external account,
add a dependency, or implement the feature until this gate passes.

## Steps

1. Add the approved differentiator-specific acceptance criteria to the PRD and
   [`eval-plan.md`](../../project-templates/app/eval-plan.md).
2. If a model is used, keep its API key server-only. Implement only the approved
   data and source-context boundary.
3. Build the smallest call behind an authenticated, owner-scoped server
   boundary. Validate input and output. Provide a useful loading, timeout,
   refusal, malformed-output, and provider-failure path.
4. Record provider/model configuration rather than relying on an undocumented
   default.
5. Run the fixed evaluation set before and after prompt/code changes. Include
   ordinary, edge, adversarial, and failure cases.
6. Show generated output as generated when the user must review it. Do not
   silently turn uncertain model output into a factual database update.

## Verify

- The original vertical slice still passes.
- Differentiator acceptance cases pass against the fixed set.
- Failure/refusal/timeout does not corrupt the core object.
- No server secret reaches browser source or Git.
- Logs and prompts exclude data the PRD marks private.
- A human can distinguish generated output and correct it where required.

## Save point

Commit the evaluation fixture/plan before the feature, then commit the smallest
passing implementation. Record provider/model configuration and result without
credentials.

## If this fails

- **One demo looks good but the set regresses:** keep the fixed set and compare;
  do not optimize for the demo.
- **Output structure varies:** validate against a schema and reject malformed
  output safely.
- **Cost or latency is unclear:** add minimal timing/usage recording before
  expanding traffic.
- **The feature needs sensitive data:** stop for a privacy/data decision or
  redesign it to use less.
- **The differentiator consumes the project:** narrow it to the first useful
  user decision and move extensions to non-goals.
