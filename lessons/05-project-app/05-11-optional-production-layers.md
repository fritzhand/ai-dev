---
summary: Add one optional production system only when a named product need justifies its full data, security, cost, failure, and maintenance surface.
requires: [05-10-deploy-and-verify-production]
infographics: [api-key-and-billing]
---

# Add optional production layers deliberately

**Requires:** A verified core production release and an approved PRD change
that names the missing capability.

**Done when:** One selected system is fully configured, tested, documented,
owned, and observable—or the team has deliberately added none.

## Step 0 — Check the ground

Do not enable billing, email, notifications, uploads, analytics, error
tracking, rate limiting, or bot protection because the starter includes code
for it. Name the user or operational need and its acceptance criterion first.

## Prepare the addition

Draft the need and non-goals without changing the PRD. Map the proposed
system's UI, server route, package, environment values, provider account, data
sent, webhooks, permissions, cost, logs, failure behavior, tests, deletion, and
owner without adding a dependency or creating an account.

```prompt
Context: The verified core app works. Read the approved new PRD criterion and
the current keep/change/defer map. Do not add a dependency or create an account.

For the single system [NAME], map UI, routes, packages, environment variables,
external data, permissions, webhooks, idempotency/signature needs, cost,
failure behavior, tests, observability, owner, and removal path. Compare
restoring the pinned starter surface with a minimal alternative. Keep all other
optional systems deferred. Stop for approval.
```

## Approval gate

The product owner approves the requirement and user experience. The data owner
approves information sent externally and retention. The account/billing owner
approves the provider and cost surface. A technical reviewer approves secrets,
webhooks, permissions, failure behavior, and rollback before connection or
deployment. Do not change the PRD, source, dependencies, provider account, or
environment until this gate passes.

## Steps

1. Add the approved need and non-goals to the PRD.
2. Decide whether to restore/adapt the pinned starter's deferred surface or
   implement another reviewed design. Do not restore unrelated optional
   systems with it.
3. Classify every credential. Keep server and provider secrets out of browser
   code and source.
4. Define idempotency and signature verification for inbound webhooks where
   applicable.
5. Implement behind the existing auth and ownership boundary.
6. Test success, provider failure, duplicate delivery, invalid signature,
   unavailable service, and cost/usage signals relevant to the system.
7. Verify in a non-production environment. Return for a separate approval
   before any production connection.
8. Document account owner, dashboard location, billing owner, limits to watch,
   disable path, and user-data deletion path.

## Verify

- The named acceptance criterion passes.
- The core workflow and ownership regression tests still pass.
- Missing provider configuration fails clearly rather than half-working.
- Duplicate or forged inbound events cannot cause repeated/unauthorized state.
- Usage/cost signal and owner are recorded.
- The system can be disabled without losing the core app.

## Save point

Commit one optional system as its own milestone. Update `keep-change-ignore.md`,
the environment example using placeholders only, tests, and the operational
handoff.

## If this fails

- **Many services become prerequisites:** return to the one named need and
  remove bundled additions.
- **The provider fails closed in production:** keep the feature disabled until
  every required dependency is configured and tested.
- **Webhook state duplicates:** stop processing, preserve event evidence, and
  implement verified signatures plus idempotency before replay.
- **No one owns the account or bill:** do not launch the integration.
