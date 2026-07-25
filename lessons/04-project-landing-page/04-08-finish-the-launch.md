---
summary: Add domains, metadata, forms, analytics, and search tooling only when the approved brief names the need.
requires: [04-07-deploy-through-github-and-vercel]
infographics: []
---

# Finish only the launch layers needed

**Requires:** A verified Vercel deployment and the approved brief.

**Done when:** Each required launch layer works in production with an owner and
evidence, while every unneeded layer is explicitly deferred.

## Step 0 — Check the ground

Do not add a custom domain, form provider, analytics script, cookie tool, or
search integration because “sites usually have one.” Find the named
requirement in the brief. If it is absent, write `Deferred` and stop.

## Prepare the change

1. Copy the launch checklist and mark each optional layer `Required`,
   `Deferred`, or `Not applicable`.
2. Verify title, description, canonical production URL, Open Graph image,
   favicon, robots behavior, sitemap, and missing-route behavior against the
   actual public URL.
3. If a custom domain is required, identify the domain owner, current DNS
   provider, intended primary host, redirect behavior, rollback records, and
   who may change DNS.
4. If a form is required, define fields, destination, validation, spam
   handling, privacy notice, retention, failure message, and a real delivery
   test before choosing a provider.
5. If analytics or search tooling is required, define the question it answers,
   data collected, consent/privacy effect, account owner, and removal path.

```prompt
Context: Read the approved brief, live URL, launch checklist, and current site
metadata/configuration. Do not create accounts or change external systems.

Produce a launch-gap report. For each possible layer—metadata, canonical URL,
share image, sitemap, custom domain, form, analytics, search tooling—mark it
Required, Deferred, or Not applicable and cite the brief. For required items,
list exact decisions, external writes, data exposure, verification, and
rollback. Do not recommend a product without a named need.
```

## Approval gate

The owner approves each external account connection, DNS change, data
collection decision, credential, and production deploy. Show the current state,
proposed state, verification, and rollback before the change.

## Steps

1. Change one approved source/configuration group or external system at a time.
2. Verify it in production before beginning another group.
3. Record its owner, date, deployed commit where applicable, and rollback.

## Verify

Test from the public URL and a browser that is not relying on your local
session. For a domain, check both primary and redirected hosts. For a form, send
clearly labelled test data and confirm receipt and failure behavior. For
analytics/search, confirm only the approved data is sent.

## Save point

Commit source/configuration changes separately from dashboard changes. Record
the deployed commit, external owner, date, and rollback instruction in the
launch checklist.

## If this fails

- **DNS change is uncertain:** do not guess. Preserve existing records and ask
  the domain owner/provider.
- **A form succeeds silently but no message arrives:** keep the old CTA or a
  direct contact fallback until delivery is proven.
- **Analytics causes privacy uncertainty:** leave it out until the owner
  approves the data and notice.
- **Metadata looks stale:** confirm the deployed commit and platform cache
  before changing source again.
