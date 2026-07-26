---
summary: Decide which tested starter systems the learner's PRD requires and what must be changed, removed, or deferred.
---

# Starter map: keep, change, remove, defer

Baseline:
`KRSHH/standard-saas-starter@e887b0cc9d380576aa3318bf8c095afbc3d768cb`

| Surface/system | Decision | PRD reason | Required cleanup | Verification |
| --- | --- | --- | --- | --- |
| Next.js App Router shell | Keep |  |  |  |
| Supabase SSR auth | Keep |  |  |  |
| Drizzle/Postgres | Keep |  |  |  |
| Protected `/app` area | Keep/change |  |  |  |
| Starter marketing copy | Change |  |  |  |
| Starter legal copy | Change/remove |  |  |  |
| Stripe | Defer/remove |  |  |  |
| Razorpay | Defer/remove |  |  |  |
| Resend/notifications | Defer/remove |  |  |  |
| PostHog | Defer/remove |  |  |  |
| Sentry | Defer/remove |  |  |  |
| Turnstile | Defer/remove |  |  |  |
| Uploads | Keep only if PRD requires |  |  |  |
| Upstash/rate limiting | Keep only with named surface |  |  |  |

## Rules

- “Optional” does not mean “safe to leave visibly half-wired.”
- Remove buttons, claims, background requests, routes, and navigation for a
  deferred system, or configure the entire system deliberately.
- Preserve the upstream `LICENSE` and attribution.
- Run the baseline checks after each cleanup batch.

## Approval

- [ ] Every kept system serves an acceptance criterion.
- [ ] No public starter claim is presented as true for this product.
- [ ] Deferred systems have no misleading UI or failing background request.
