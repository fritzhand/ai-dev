# Publishing engine

Run:

```sh
node web/build.mjs
```

The dependency-free builder writes the production site to `_site/`. Do not
edit that directory by hand.

## Configuration

`course.config.json` is the content contract:

- `title`, `tagline`, and `description` describe the course.
- `basePath`, `siteUrl`, and `repoUrl` record the public location.
- `contentRoots` lists the Markdown trees the builder must register.
- `routes` supplies the home-page route cards. Each `start` is a
  repository-relative Markdown path.
- `parts` supplies the ordered lesson groups and their sidebar labels.

`site.config.json` holds publishing metadata. Its URL must include the GitHub
Pages base path (`/ai-dev/`). Leave `analyticsId` empty to omit analytics.

Every Markdown file under a configured content root is published:

- `INDEX.md` or `README.md` becomes the directory's `index.html`.
- another Markdown filename becomes the same path with `.html`.
- a directory without `INDEX.md` receives a generated section landing.

Lesson pages require `summary`, `requires`, and `infographics` front matter.
Prerequisites may use a repository path, a path relative to the current
lesson, a front-matter id, or a unique filename slug.

An `infographics` entry is a release claim, not a wish list: its WebP must
exist in `web/infographics/`, its inventory row must say `approved`, and its
reviewed specification must exist under `infographics/specs/`. Keep planned
visuals in the inventory without listing them in lesson front matter.

## Prompts and figures

A reusable prompt is a fenced block whose language is `prompt`:

````md
```prompt
Context: ...
Output: ...
```
````

The block gets a copy button, an anchor on its lesson page, a search record,
and an entry in `/prompts/`.

Use a portable course-root path for a production infographic:

```md
![A useful description of the complete diagram.](/infographics/example.webp)
```

The builder rewrites that path for GitHub Pages. It fails if the image is
missing, the alt text is empty, the asset is not displayed by a curriculum
page, or `infographics/INDEX.md` has no record for it.

Small theme-aware SVG diagrams live in `web/assets/diagrams/` and can be
placed with:

```md
<!-- DIAGRAM: diagram-slug -->
```

## What the production build checks

- every curriculum Markdown file was registered and written
- route, part, and navigation targets exist
- lesson prerequisites exist and contain no cycles
- repository-relative links resolve
- internal anchors exist on their target pages
- figures have alt text and infographic inventory records
- production infographics are valid 1200×675 WebPs
- all production infographics appear in the curriculum
- SVG diagram tokens match the light-theme palette
- the Open Graph card matches current course counts and metadata
- copied engine files contain no legacy identifiers

Run `node tools/make-og.mjs` after the title, tagline, lesson count, prompt
count, project-route count, or production infographic count changes. The tool
regenerates the committed 1200×630 SVG and PNG social cards.
