---
summary: Verify accounts, local tools, source material, repository decisions, and a recovery route before the landing-page workshop clock starts.
requires: [04-01-prepare-assets-and-brief]
infographics: [landing-page-workshop-flow]
---

# Landing-page workshop pre-work

Send this early enough for account and machine problems to be resolved outside
the session. Ask learners to return the evidence checklist before class.

## Learner message

> In this workshop you will turn your own approved, publishable source material
> into an Astro landing page, review it, push it to GitHub, and deploy it on
> Vercel. The two-hour clock assumes the checks below already pass. We will not
> invent company content, recover accounts, configure a custom domain, or add
> analytics/forms during the live build.

## Learner checklist

### Accounts

- [ ] I can sign in to the intended GitHub account.
- [ ] I can create a repository with the intended visibility.
- [ ] I can sign in to Vercel and authorize the intended GitHub account.
- [ ] I know whether a production deployment is permitted.

### Machine

Run these in the terminal and paste versions, not personal paths or tokens:

```bash
node --version
npm --version
git --version
```

- [ ] My Node version meets the current
  [Astro installation requirement](https://docs.astro.build/en/install-and-setup/).
- [ ] My coding agent can read and write one chosen project folder.
- [ ] I can open a local URL in a browser.
- [ ] Git has a name and email I intend to use for this project.

### Source material

- [ ] I have the exact public name and one-sentence description.
- [ ] I have one primary visitor, one call to action, and its real destination.
- [ ] Required claims have approved sources.
- [ ] Images have publication permission and useful filenames.
- [ ] I have marked missing input rather than asking AI to invent it.
- [ ] Private documents and credentials are outside the public project folder.

### Project decision

- [ ] Repository name:
- [ ] Public or private:
- [ ] Site owner/approver:
- [ ] Workshop definition of done: reviewed GitHub commit + working Vercel URL.

## Instructor verification

Collect only:

- tool versions;
- account readiness yes/no;
- source readiness yes/no;
- repository visibility decision;
- accessibility/accommodation needs;
- a screenshot of the prepared public-safe source folder if useful.

Do not collect source files, credentials, or participant account details unless
the workshop agreement explicitly requires and protects them.

## Instructor preparation

- [ ] Run the [maintenance check](maintenance-check.md).
- [ ] Test the exact Astro scaffold and Vercel route on the teaching network.
- [ ] Prepare a known-good public-safe recovery source pack you have permission
  to distribute; label all its claims as fictional if invented.
- [ ] Prepare a known-good recovery project at each milestone. Record its
  commit locally or in an instructor-controlled repository.
- [ ] Test screen sharing, projector legibility, timer, and narrow/wide browser
  demonstrations.
- [ ] Decide who handles account/network support while teaching continues.

## Stop rule

A learner who has not completed account access, local tooling, or minimum
source preparation joins in observation/pair mode and uses the documented
recovery route. Do not spend the class clock inventing content or recovering
third-party accounts.
