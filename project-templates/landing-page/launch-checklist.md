---
summary: Record the reviewed commit, production checks, approved launch layers, owners, evidence, and rollback point.
---

# Landing-page launch checklist

Use this record to identify the reviewed commit, production checks, optional
launch layers, owners, and rollback point.

## Required before deploy

- [ ] The reviewed commit is identified.
- [ ] Production build passes from a clean checkout.
- [ ] Repository visibility and included source files are intentional.
- [ ] No credential, private source, or personal data is tracked.
- [ ] The owner approves production deployment.

## Required after deploy

- [ ] Production URL loads over HTTPS.
- [ ] Primary call to action works.
- [ ] Main routes, images, and fonts load.
- [ ] Narrow and wide layouts match the reviewed build.
- [ ] Page title, description, canonical URL, and share image are correct.
- [ ] A failed route does not reveal private information.

## Add only when the brief requires it

- [ ] Custom domain and redirects
- [ ] Form delivery and spam handling
- [ ] Analytics with consent/privacy review
- [ ] Search Console or equivalent
- [ ] Sitemap submission

## Handoff

- **Live URL:**
- **Repository:**
- **Deployed commit:**
- **Deployment owner:**
- **Domain owner:**
- **Known follow-up work:**
- **Rollback point:**
