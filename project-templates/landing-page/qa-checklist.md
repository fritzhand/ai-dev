---
summary: Record build, content, responsive, accessibility, link, visual, performance, and release evidence for the landing page.
---

# Landing-page QA checklist

Record evidence, not only checkmarks.

## Build

- [ ] Dependency install completes.
- [ ] Development server starts without an unexplained error.
- [ ] Production build completes.
- [ ] Browser console has no unexplained errors.

## Content

- [ ] Name, offer, audience, proof, and contact details match approved sources.
- [ ] No `[TBD]`, placeholder copy, fake testimonial, or sample link is public.
- [ ] Every call to action reaches the intended destination.
- [ ] Page title and description are specific and true.

## Layout

| Viewport | Page/route | Evidence file | Result or issue |
| --- | --- | --- | --- |
| Narrow |  |  |  |
| Wide |  |  |  |

- [ ] No horizontal scrolling caused by page content.
- [ ] Text remains readable at browser zoom.
- [ ] Images do not hide required information when cropped.

## Keyboard and accessibility basics

- [ ] Every interactive control is reachable by keyboard.
- [ ] Focus is visible.
- [ ] Headings form a useful outline.
- [ ] Images have useful alt text or an empty alt when decorative.
- [ ] Controls have names; form fields have labels and useful errors.
- [ ] Text and control contrast has been checked.
- [ ] Motion respects reduced-motion preferences.

## Links and production

- [ ] Internal links work from the production build.
- [ ] External links have been opened and checked.
- [ ] Missing routes show a useful response.
- [ ] The deployed URL was tested on a second browser or device.

## Review record

- **Reviewed commit:**
- **Reviewer:**
- **Date:**
- **Open issues accepted for launch:**
