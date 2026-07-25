---
summary: Decide which starter systems serve the PRD and remove or disable misleading optional surfaces in reviewable batches.
requires: [05-02-start-from-the-tested-template]
infographics: [rapid-app-development-workflow]
---

# Map and strip the starter

**Requires:** A passing, committed pinned baseline and the approved PRD.

**Done when:** `keep-change-ignore.md` is approved, public copy is true for the
learner's product, and deferred systems have no misleading UI or failing
background behavior.

## Step 0 — Check the ground

Copy
[`keep-change-ignore.md`](../../project-templates/app/keep-change-ignore.md).
Stop if the unchanged baseline does not pass its recorded checks. Cleanup
without a baseline makes every failure ambiguous.

## Prepare the cleanup

1. Map PRD needs to the starter's routes, components, packages, environment
   variables, API routes, tests, and background requests without editing.
2. Use the pinned
   [README](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/README.md)
   to inventory the supplied systems. At this commit, the
   [notification bell](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/components/dashboard/notification-bell.tsx)
   polls notification routes, while the
   [production rate limiter](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/src/lib/security/rate-limit.ts)
   throws when its required Upstash configuration is absent. If the learner
   keeps that surface, they must configure and test the whole dependency path.

```prompt
Context: Read the approved PRD, keep-change-ignore.md, package.json, environment
schema, routes, navigation, client-side polling, tests, and starter copy. Do
not delete or edit yet.

For each starter system, classify it Keep, Change, Remove, or Defer. Trace every
classification through UI, routes, packages, environment variables, background
requests, tests, and public claims. Explain the smallest safe cleanup batches
and the check after each. Do not retain a system merely because it is already
installed.
```

## Approval gate

The product owner approves the system map and public copy. A technical reviewer
approves the exact deletion/disable list for each batch. Show the diff before
moving to the next batch. Do not edit or delete until this gate passes.

## Steps

1. Keep the core shell, Supabase SSR auth, Drizzle/Postgres, protected `/app`
   area, callback route, profile trigger, health route, and useful test
   baseline unless the approved plan says otherwise.
2. Change starter brand, navigation, dashboard, and copy to an honest neutral
   shell derived from the PRD. Remove placeholder pricing, trial, organization,
   and legal claims that are not true.
3. Defer Stripe, Razorpay, Resend, notifications, PostHog, Sentry, Turnstile,
   uploads, and their rate-limit dependencies unless a named PRD criterion
   requires them.
4. For each deferred system, trace more than the package: remove or disable its
   visible control, navigation, route, polling/background request,
   configuration demand, copy, and test expectation as appropriate.
5. Work one system group at a time. Run `bun run check`, relevant tests, and
   the local app after each group.
6. Preserve `LICENSE` and upstream attribution.

## Verify

- Every visible control has a working, approved purpose.
- No page claims a plan, trial, organization, legal term, or integration that
  the product does not provide.
- Deferred systems do not emit background errors or demand production secrets.
- Baseline check, test, and build behavior remains known.
- MIT licence and attribution remain.

## Save point

Commit each coherent cleanup batch, then commit the honest branded shell. Record
the approved decisions in `keep-change-ignore.md`.

## If this fails

- **Removing one package breaks many imports:** restore the last save point,
  map the full surface, and remove the feature from its boundary inward.
- **You are unsure whether a system is needed:** defer it in the PRD and remove
  its visible promise; it can return later.
- **The app no longer builds:** fix the first missing import/config reference in
  the current batch or roll back that batch.
- **Starter copy persists:** search rendered pages and source for the original
  product terms before continuing.
