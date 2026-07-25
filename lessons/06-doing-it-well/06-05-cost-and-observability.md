---
summary: Record the few usage, latency, failure, and capacity signals that answer an operational question without installing every dashboard.
requires: [06-04-evals-and-evidence]
infographics: [api-key-and-billing]
---

# Cost and observability

**Requires:** A working feature, its external systems, and a named question
about usage, cost, reliability, or capacity.

**Done when:** The owner can see the minimum signals needed to detect failure
and unexpected consumption, with thresholds and a response owner.

## Step 0 — Check the ground

Stop before adding an analytics or monitoring service. Write the question
first: “Did the provider fail?”, “How much model usage did this workflow
consume?”, or “Are database connections exhausting?” If no decision follows
from a metric, do not collect it.

## Prepare the signals

1. Inventory consumption surfaces: model/API calls, tokens or units reported by
   the provider, database/storage, deployment functions/bandwidth, email,
   payments, and other third parties actually used.
2. For each important user workflow, record success/failure, latency, and the
   smallest useful usage measure. Prefer provider-returned usage over an
   invented estimate.
3. Define a threshold or review cadence and the person who acts. “Collect
   forever” is not an operational plan.
4. Use existing provider/build logs before proposing a new service.

```prompt
Context: Inspect only the systems this released feature actually uses. Do not
install monitoring or analytics.

For each critical workflow, propose the minimum signal set for success/failure,
latency, usage/cost, and capacity. State the decision each signal supports,
source, data sensitivity, retention, threshold/review cadence, and response
owner. Prefer existing provider or platform signals. Flag any proposed log
that could expose credentials, prompts, or personal data.
```

## Approval gate

The product/data owner approves collection, retention, and access. The billing
owner approves alerts or budgets. A technical reviewer approves redaction and
failure handling before production logging changes.

## Steps

1. Add the approved correlation/request identifiers and minimum signals that
   connect a user-visible failure to a server event without logging secrets or
   unnecessary personal data.
2. Test whether a simulated failure produces a useful, redacted signal and a
   useful user response.
3. Review retention and access. Remove signals that expose more data than the
   approved question requires.

## Verify

- A known test failure can be found without exposing a secret.
- Usage/cost records identify provider configuration and workflow.
- The owner knows where to look and what action a threshold triggers.
- Removing an optional dashboard would not break the product.
- Collected data is no broader than the named question.

## Save point

Commit instrumentation and redaction tests separately from feature code.
Document dashboards/alerts by name and owner, never by secret URL or token.

## If this fails

- **Costs surprise the team:** pause or limit the consuming feature, inspect
  provider usage, and add the missing boundary before expanding.
- **Logs contain sensitive data:** restrict access, stop the logging path, and
  follow the required incident/deletion process.
- **There are too many alerts:** keep only actionable thresholds with owners.
- **A metric cannot be trusted:** record its source and limitations; do not
  turn it into a precise claim.
