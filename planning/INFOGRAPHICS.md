# `ai-dev` — infographic inventory and production prompts

**Status:** Approved production appendix to [`SCOPE.md`](SCOPE.md).

**Verification:** Every visual remains subject to factual, copy,
accessibility, and rights review before publication.

**Publication:** Public. Private source paths are deliberately excluded.

**Prepared:** 2026-07-25

**Production status:** All 31 visuals were regenerated or constructed, reviewed,
exported at 1200×675, and published on 2026-07-25. The public
[infographic library](../reference/infographics.md) links every visual to its
standalone prompt and review specification.

## How to use this file

Each visual has a production prompt, alt text, caption, and review gate. The
prompt is a specification, not proof that the rendered image is correct.

For every generated image:

1. Check every word against the exact quoted copy.
2. Check every factual claim against the linked lesson sources.
3. Replace generated typography and product marks with editable SVG or another
   deterministic overlay when the raster output is not exact.
4. Check contrast, reading order, colour-independent meaning, and legibility at
   the width used on the course page.
5. Export the approved result as a 1200×675 WebP and retain the editable source.

## House style

Use this art direction for all new and regenerated visuals:

> Create a 1200×675, 16:9 teaching infographic for the `ai-dev` course. Use a
> clean flat-vector editorial style on an off-white `#f8fbfc` background.
> Primary text is near-black `#10222c`; primary blue is `#0b5a86`; secondary
> green is `#0c7a63`; warm highlight is `#d98218`; warning/action is `#c62c49`;
> supporting accents may use blue, teal, purple, and coral. Use an
> Instrument-Sans-like sans serif, a large navy title, a short muted subtitle,
> rounded white cards with thin tinted borders, restrained soft shadows,
> numbered stage circles, flat line icons, and clearly labelled arrows. Keep a
> 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than
> shrinking text. Make all text horizontal, exact, and readable at presentation
> size. Encode stages with labels or shapes as well as colour. Use product names
> in plain labelled badges unless an approved official mark will be overlaid
> later.

Use this negative direction on every generation:

> No photorealism, glossy 3D, fake screenshots, fake code, invented metrics,
> prices, version numbers, provider promises, decorative pseudo-text, lorem
> ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings,
> malformed product logos, colour-only meaning, or claims that one workflow is
> universal.

## Inventory summary

| # | Slug | Lifecycle | Primary placement | Source |
| ---: | --- | --- | --- | --- |
| 01 | `what-this-thing-actually-is` | Carry after QA; rebuild prompt retained | 01-01 | Existing MIT WebP |
| 02 | `how-a-model-gets-made` | Rebuild | 01-02 | Existing MIT WebP |
| 03 | `what-weights-actually-means` | Rewrite and rebuild | 01-02 | Existing MIT WebP |
| 04 | `the-loops-that-make-models-improve` | Rewrite and rebuild | 01-02 | Existing MIT WebP |
| 05 | `the-same-model-four-places` | Rewrite and rebuild | 02-01 | Existing MIT WebP |
| 06 | `what-agentic-actually-means` | Rebuild | 02-02 | Existing MIT WebP |
| 07 | `which-model-should-i-use` | Rewrite and rebuild | 01-03 | Existing MIT WebP |
| 08 | `where-your-words-actually-go` | Rewrite and rebuild | 01-04 | Existing MIT WebP |
| 09 | `how-all-of-this-fits-together` | Adapt and rebuild | 03-07 | Existing MIT WebP |
| 10 | `what-the-terminal-is` | Rebuild | 03-01 | Existing MIT WebP |
| 11 | `editors-ide-and-what-agentic-means` | Rewrite and rebuild | 03-02 | Existing MIT WebP |
| 12 | `what-git-is` | Rewrite and rebuild | 03-04 | Existing MIT WebP |
| 13 | `git-and-github-are-not-the-same` | Adapt and rebuild | 03-05 | Existing MIT WebP |
| 14 | `what-node-is` | Rewrite and rebuild | 03-03 | Existing MIT WebP |
| 15 | `what-a-database-is` | Rewrite and rebuild | 03-07 | Existing MIT WebP |
| 16 | `how-a-website-actually-goes-live` | Adapt to taught route and rebuild | 04-07 | Existing MIT WebP |
| 17 | `what-a-connector-is` | Rewrite and rebuild | 02-03 | Existing MIT WebP |
| 18 | `what-markdown-is` | Rebuild | 03-06 | Existing MIT WebP |
| 19 | `landing-page-workshop-flow` | Regenerate | Part 4 and instructor | Deck slide 9 |
| 20 | `what-astro-does` | Regenerate | 04-05 | Deck slide 8 |
| 21 | `vercel-deployment-chain` | Regenerate | 04-07 | Deck slide 10, variant A |
| 22 | `the-twelve-tool-map` | Rewrite and regenerate | Start/instructor | Deck slide 7 |
| 23 | `how-the-app-backend-fits` | Rewrite and regenerate | 05-04/05 | Deck slide 11 |
| 24 | `rapid-app-development-workflow` | Recreate from approved brief | Part 5 | Owner-supplied brief |
| 25 | `prompting-rag-or-fine-tuning` | New | 01-05 | Missing visual |
| 26 | `api-key-and-billing` | New | 02-04 | Missing visual |
| 27 | `secrets-and-environment-variables` | New | 06-02 | Missing visual |
| 28 | `context-engineering` | New | 06-03 | Missing visual |
| 29 | `how-to-tell-if-it-works` | New | 06-04 | Missing visual |
| 30 | `prd-anatomy` | New | 05-01 | Missing visual |
| 31 | `the-approval-gate` | New | 06-01 and both projects | Missing visual |

The first 18 source files come from the owner's MIT-licensed
`startup-stack` repository. The workshop concepts come from owner-supplied
class material. On 2026-07-25, the owner approved recreating the Rapid App
Development Workflow and any other course visuals needed. Private source files
are not copied into this public repository.

## Prompt packets

Prepend the house-style and negative-direction blocks above to each prompt.
The on-image copy below is exact. Do not add explanatory filler inside the
image.

### 1. What This Thing Actually Is

**Prompt:** Build a three-column explainer. Header: “What This Thing Actually
Is”. Subtitle: “A language model predicts what text is likely to come next.”
Centre loop: “Predict the next piece of text” → “Add it” → “Repeat”. Left card,
“What it is good at”: “Following a clear brief”; “Producing and transforming
language”; “Repeating work without getting tired”. Right card, “What that does
not guarantee”: “Truth”; “Current information”; “Knowledge of your project”;
“A safe action”. Footer: “Fluency is not proof. Check the source and the
result.”

**Guardrail:** Do not equate a token with a word or claim that the model has
permanent memory.

**Alt:** A next-text prediction loop flanked by useful capabilities and things
fluency cannot guarantee.

**Caption:** A language model can produce fluent text without knowing whether
it is true.

**Review:** Confirm the central claim remains technically plain; remove any
implication of consciousness or built-in project knowledge.

### 2. How a Model Gets Made

**Prompt:** Use four equal numbered cards under “How a Model Gets Made” and the
subtitle “A common path, not one fixed recipe.” Card 1, “Prepare data”:
“Select, licence, clean and filter text, code, images or other material.” Card
2, “Pre-train”: “Learn statistical patterns by predicting missing or next
units.” Card 3, “Post-train”: “Use examples and feedback to make the model more
useful and safer.” Card 4, “Evaluate and operate”: “Test capabilities, limits
and failure modes before and after release.” Footer: “The recipe differs by
model maker. The model still does not know your private project unless you
provide access.”

**Guardrail:** Include no training-cost figures, corpus sizes, fixed universal
stage names, or universal knowledge-cutoff claim.

**Alt:** A representative four-stage path from prepared data through
pre-training, post-training, and evaluation.

**Caption:** Model makers prepare data, pre-train, post-train, and evaluate;
the details vary.

**Review:** Confirm the subtitle and footer make the simplification explicit;
verify that no stage is presented as mandatory for every model.

### 3. What “Weights” Means

**Prompt:** Use the header “What ‘Weights’ Means”. Build a left-to-right flow:
neural connections labelled “Training adjusts numbers on connections”; a file
labelled “Those learned numbers are the weights”; a processor labelled
“Running the model uses the weights to calculate an output.” Add a bottom
split card. “Open-weight model”: “Weights are available under a licence. You
can run them where the licence and hardware allow.” “Hosted model”: “The
provider runs the model. You access it through an app or API.” Footer: “Open
weights do not automatically mean open source, safer, private or better.”

**Guardrail:** Include no parameter counts, file sizes, named providers, or
capability ranking.

**Alt:** Training adjusts numerical weights, which are then loaded to
calculate outputs, with open-weight and hosted access compared.

**Caption:** Weights are learned numbers used to calculate outputs; access to
them changes where a model can run.

**Review:** Check the open-weight/open-source distinction and ensure privacy
is not promised merely because weights are downloadable.

### 4. The Loops That Make Models Improve

**Prompt:** Make a two-by-two loop grid titled “The Loops That Make Models
Improve”. “Human feedback”: “Answer → people compare or rate → training
signal.” “Model feedback”: “Draft → critique against rules → revised draft →
filtered example.” “Verifiable checks”: “Attempt → test or checker → pass/fail
signal → update.” “Synthetic examples”: “Seed examples → generate more →
filter → train.” Footer: “A loop is only as good as its judge. Where no
reliable checker exists, human judgement remains.”

**Guardrail:** Do not rank the loops, claim that one always improves
capability, or imply that unfiltered self-training is reliable.

**Alt:** Four feedback loops using people, model critiques, verifiable checks,
and filtered synthetic examples.

**Caption:** Feedback loops improve models only when the signal judging the
result is useful.

**Review:** Verify every loop has an external check or filter; remove strength
meters and unsupported performance language.

### 5. The Model Is Only One Part of the Tool

**Prompt:** Place four cards under “The Model Is Only One Part of the Tool”.
Subtitle: “The answer depends on the model, the context, the tools and the
permissions.” “Chat”: “Sees the conversation and what you attach. Usually
returns an answer.” “Connected app”: “May reach services you authorise. Access
depends on scope.” “IDE or agent”: “May read files, edit them and run commands.
Actions depend on approvals.” “API”: “Another program assembles the request.
No interface of its own.” Footer: “Two surfaces may use different models or
settings. Check, do not assume.”

**Guardrail:** Never say that the model is necessarily identical across
surfaces.

**Alt:** Chat, connected apps, IDE agents, and APIs compared by context, tools,
and permissions.

**Caption:** A surface changes context, tools, and permissions — and may change
the model too.

**Review:** Confirm capability words are qualified with “may”; check that the
API is not depicted as autonomous.

### 6. What “Agentic” Actually Means

**Prompt:** Use the header “What ‘Agentic’ Actually Means”. Left card,
“Assistant”: “You ask → it answers → you act.” Right card, “Agent”: a circular
loop reading “Goal → plan → act → observe → check → stop or repeat.” Below the
loop: “Tools it may use”; “A way to see results”; “A stopping rule.” Add an
amber gate: “Pause before destructive, external or irreversible actions.”
Footer: “Short loops are easier to inspect and recover.”

**Guardrail:** Do not define agentic as unattended autonomy or imply that
self-reported success is sufficient.

**Alt:** A one-turn assistant contrasted with an agent that plans, acts,
observes, and checks inside a controlled loop.

**Caption:** An agent plans, acts, observes, and checks within tools,
permissions, and stop conditions.

**Review:** Ensure “observe” and “stop” are visually prominent; verify that the
approval gate interrupts the loop.

### 7. Which Model Should I Use?

**Prompt:** Header: “Which Model Should I Use?” Show two controls. Left ladder,
“Task need”: “Routine”; “Everyday”; “Hard or high-stakes”. Right dial,
“Thinking effort”: “Low”; “Medium”; “High”. Centre decision path: “Start with
a capable middle option” → “Check the result” → “Move up when reasoning is
weak” or “Move down when the same simple task repeats.” Add a context card:
“Context = the instruction, relevant material, tool results and working
output.” Footer: “Names and prices change. Choose by task, test and budget.”

**Guardrail:** Include no current model names, price comparisons, or promise
that higher effort always wins.

**Alt:** Model capability and thinking effort shown as separate controls,
followed by a test-and-adjust loop.

**Caption:** Choose model and effort by the task, then test the result.

**Review:** Confirm model choice and effort remain separate; check that no
provider-specific interface is implied.

### 8. Where Your Words Actually Go

**Prompt:** Build a horizontal flow titled “Where Your Words Actually Go”.
“Your instruction” → “Context is assembled”, with small labels “system rules”,
“conversation”, “selected files”, and “tool results” → “Text is split into
tokens” → “The model produces output” → “The app shows or acts on the result.”
Add a side card, “What may vary”: “The service may cache, retrieve, summarise
or drop older material.” Footer lines: “Longer context can cost more and make
relevant material harder to find.” “Do not assume the model remembers a past
chat or can see a file you did not provide.”

**Guardrail:** This is the simplified text-request path. Do not say every
service resends all content on every turn.

**Alt:** A request moves through context assembly, tokenisation, and model
output, with caching and retrieval shown as variable.

**Caption:** The app assembles context, tokenises it, and sends it to a model;
the details vary by service.

**Review:** Check that the caching caveat is present; remove universal price or
memory claims.

### 9. How an AI-Built Project Fits Together

**Prompt:** Stack five layers titled “How an AI-Built Project Fits Together”.
“You: goal, choices, approval.” “AI tool: reads the brief, proposes edits, uses
allowed tools.” “Local project: files, Git history, runtime.” “Online services:
repository, hosting, database, external APIs.” “People using the site or app.”
Put an amber approval gate between the AI tool and any change. Footer: “You do
not need every layer for every project. A landing page can be files + Git +
hosting.”

**Guardrail:** Do not imply every project needs a database, API, paid
subscription, or cloud AI.

**Alt:** A person, AI tool, local project, online services, and end users
connected in layers with an approval gate.

**Caption:** A person, an AI tool, local files, and online services form one
working system.

**Review:** Ensure the optional nature of online services is clear and that
the human remains above the approval gate.

### 10. What the Terminal Is

**Prompt:** Header: “What the Terminal Is”. On the left, draw a clean terminal
with three exact examples. `pwd` — “show the current folder”; `git status` —
“show changed files”; `npm run dev` — “start this project locally”. Right card,
“Your job”: “Check the command”; “Check the current folder”; “Check the
target.” Coral card, “Stop and inspect”: “delete”; “overwrite”; “elevated
permission”; “a path outside the project.” Footer: “The terminal records
commands and output. Git provides recovery for tracked files; it does not undo
every command.”

**Guardrail:** Mark the commands as examples. Do not claim that the terminal
itself has either universal undo or no recoverability.

**Alt:** A terminal with three example commands and a checklist for reviewing
the command, folder, and target.

**Caption:** The terminal is a text interface; review the command and its
target before running it.

**Review:** Test every displayed command; confirm no destructive command
appears as an example.

### 11. Chat, Editor and Agent

**Prompt:** Use a three-column comparison titled “Chat, Editor and Agent”.
“Chat”: “You provide text or attachments. It returns text.” “Editor or IDE”:
“Shows the project and lets you edit files.” “Agent in an editor or terminal”:
“Can read files, propose edits, run commands and inspect results — within its
permissions.” Add a bottom access bar: “More access means more to review.”
Footer: “Product names and features change. Check what your tool can actually
do.”

**Guardrail:** Include no product logos or claim that all tools expose the same
features.

**Alt:** Chat, an editor, and an agent compared by their access to project
files and commands.

**Caption:** Chat returns text; an agent can work on a project within its
permissions.

**Review:** Verify that the agent’s abilities are conditional; confirm access
increases from left to right without implying quality increases.

### 12. What Git Is

**Prompt:** Build a timeline titled “What Git Is”. “Working folder” → “Commit:
save a named snapshot” → “Make a change” → “Diff: inspect what changed” →
“Next commit”. Add a checklist: “Before AI work: commit a clean state.” “After
AI work: read the diff.” “If it is wrong: restore the specific tracked change.”
Footer: “Git protects tracked files. It does not back up secrets, databases,
untracked files or outside systems.”

**Guardrail:** Include no broad `checkout`, `reset --hard`, or destructive
recovery command.

**Alt:** A Git timeline showing a clean commit, a change, a diff, and a second
commit.

**Caption:** Commit before a risky change and read the diff after it.

**Review:** Have a developer verify the recovery wording; ensure Git is not
presented as a complete backup.

### 13. Git and GitHub Are Not the Same

**Prompt:** Split the canvas under “Git and GitHub Are Not the Same”. Left,
“Git”: “Runs on your computer”; “Records commits and branches”; “Works without
GitHub.” Right, “GitHub”: “Hosts a remote copy of a repository”; “Supports
sharing, review and automation”; “Repository visibility matters.” Arrows:
“push: send commits” and “clone or pull: receive commits.” Footer: “Git is the
history. GitHub is one place that can host a copy.” Coral note: “If a secret
reaches history, rotate it. Deleting it from the latest file is not enough.”

**Guardrail:** Do not say public data is literally permanent; explain the
practical history risk instead.

**Alt:** Local Git history connected by push and pull arrows to a repository
hosted on GitHub.

**Caption:** Git records local history; GitHub can host and share a remote
copy.

**Review:** Check arrow directions; verify public/private is described as
repository visibility, not a guarantee of confidentiality.

### 14. What Node.js Is

**Prompt:** Header: “What Node.js Is”. Three-stage flow: “JavaScript file —
instructions as text” → “Node.js — runs JavaScript outside the browser” →
“Result — build a site, start a server, run a tool.” Vocabulary card: “npm: a
package manager often installed with Node.js”; “package.json: project scripts
and dependencies”; “node_modules: installed packages”; “node --version: shows
the installed version.” Footer: “Use the version the project declares.”

**Guardrail:** Include no fixed minimum Node version and no suggestion that raw
Node runs every TypeScript file directly.

**Alt:** A JavaScript file passing through the Node.js runtime to produce a
build, server, or tool result.

**Caption:** Node.js runs JavaScript tools outside the browser.

**Review:** Verify vocabulary against the project setup; ensure the image does
not imply npm is the only package manager.

### 15. What a Database Is

**Prompt:** Use three panels titled “What a Database Is”. “Published site”:
“Pages and assets. The same published content can be served without stored
user records.” “Database”: “Keeps records the product must remember: users,
bookings, orders, settings.” “App request”: “Create, read, update or delete
permitted records. Return the result.” Add a decision strip: “Need one when
submitted or business data must persist, change or be queried.” “May not need
one when content is published as files and no submitted data is kept.” Footer:
“Hosting and a database are different jobs, even when one vendor sells both.”

**Guardrail:** Include no provider comparison and do not claim that a form
always requires a database; a form may send data elsewhere.

**Alt:** A published site contrasted with an app that stores and retrieves
persistent records from a database.

**Caption:** A database keeps data that must persist and be queried.

**Review:** Check the hosting/database distinction; ensure persistence, not
“strangers typing”, is the decision criterion.

### 16. How a Website Goes Live

**Prompt:** Header: “How a Website Goes Live”. Subtitle: “One common deployment
path.” Six-stage chain: “Local project — files on your computer” → “Git
repository — saved source and history” → “Build — framework creates deployable
output” → “Hosting — serves the deployed result” → “DNS — points a domain to
the host” → “Visitor — requests the site over HTTPS.” Footer: “A later push
changes production only when the host is configured to deploy it.”

**Guardrail:** Include no hosting cost, deployment-speed, or “always
automatic” claim.

**Alt:** A common path from local source through Git, build, hosting, and DNS
to a site visitor.

**Caption:** Source becomes a live website through version control, build,
hosting, and DNS.

**Review:** Verify that Git is labelled as a common path rather than a
technical requirement; check the DNS arrow direction.

### 17. What a Connector Is

**Prompt:** Header: “What a Connector Is”. Centre card: “Connector — a
permissioned adapter”. Left: “AI tool”. Right service icons labelled “Mail”,
“Drive”, “Calendar”, and “Repository”. Scope card: “Which service?” “Which
account or folder?” “Read, write or send?” “When may it act?” Flow: “Connect →
authorise → request → inspect result.” Small note: “MCP is one protocol
connectors may use.” Footer: “Start with the narrowest read access. Save
relevant material and its origin if the result must remain auditable.”

**Guardrail:** Do not describe every connector as MCP or imply that read-only
access is risk-free.

**Alt:** An AI tool reaching external services through a connector with
explicit scope and permission controls.

**Caption:** A connector gives a tool scoped access to another service.

**Review:** Confirm write and send are distinct; check that the audit note does
not imply copying restricted material is always permitted.

### 18. What Markdown Is

**Prompt:** Use a split view titled “What Markdown Is”. Left, “Plain text”,
with this exact sample on separate lines: `# Project plan`; `## Next step`; `-
Review the brief`; `- Build the first page`; `[Open the
source](https://example.com)`. Right, “Rendered document”, showing the same
structure. Bottom cards: “Portable — supported by many tools”; “Readable —
opens without a special app”; “Diff-friendly — changes are easy to inspect.”
Footer: “Markdown describes structure. It is not a design system or a
database.”

**Guardrail:** Do not claim that Markdown is always cheaper for a model than
Word or PDF.

**Alt:** The same project plan shown as raw Markdown and as a rendered
document.

**Caption:** Markdown is portable, inspectable plain text with lightweight
structure.

**Review:** Render the exact sample and compare it with the right panel; run
link and punctuation OCR.

### 19. The Landing-Page Workshop Route

**Prompt:** Rebuild deck slide 9 as a five-stage horizontal map titled
“Landing-Page Workshop Flow”. Stage 1, “Set up”: “Node.js”; “Git”; “GitHub and
Vercel accounts”; “one scoped project folder”. Stage 2, “Inputs”: “prepared
assets”; “project brief”; “content and links”; “design references”. Stage 3,
“AI workspace”: a vertical sequence “knowledge-base.md” → amber “Human review”
→ “design.md” → amber “Human review” → “implementation-plan.md” → amber
“Approve build”. Stage 4, “Build and version”: “Astro project” → “local
preview” → “Git commit” → “GitHub”. Stage 5, “Launch and verify”: “Vercel
build” → “production URL” → teal “browser checks pass”. Put “domain, forms,
analytics and search tools” in a separate box labelled “Optional after the
workshop”. Add a coral return arrow from a failed check to “Fix one issue and
check again.” Exact legend: “Navy: learner or normal sequence”; “Purple: AI or
tool work”; “Amber: human approval”; “Teal: verified output”; “Coral: stop and
fix.”

**Guardrail:** Preserve the teaching purpose and arrow-colour legend from deck
slide 9, but use this revised course copy rather than trying to OCR malformed
or outdated wording.

**Alt:** A five-stage landing-page workshop from setup and prepared inputs
through reviewed planning, an Astro build, GitHub, Vercel, and browser checks.

**Caption:** The landing-page project moves from prepared inputs to a verified
Vercel URL, with a human gate before code.

**Review:** Compare the route with deck slide 9, the final Part 4 lesson list,
and the 120-minute run sheet; test the legend in greyscale and confirm every
optional launch layer sits outside the workshop finish line.

### 20. What Astro Does

**Prompt:** Rebuild deck slide 8 as a three-stage explainer titled “What Astro
Does”. Left, “Your source”: “pages”; “components”; “content”; “styles”;
“images”. Centre, “Astro build”: “combines components”; “renders pages”;
“processes project assets”. Right, “Published site”: “HTML”; “CSS”;
“JavaScript and images where configured”. Teal note: “Client-side JavaScript
is added where the page needs interaction.” Footer: “Astro is the framework
for the landing-page project. It does not provide a database or user accounts
by itself.”

**Guardrail:** Do not say Astro ships zero JavaScript or imply that it cannot
use server rendering or integrations.

**Alt:** Astro turns project pages, components, content, and assets into a
published website.

**Caption:** Astro turns project sources into a deployable website and adds
client JavaScript where configured.

**Review:** Compare the composition with deck slide 8; verify terminology
against current official Astro documentation and the actual course starter.

### 21. From Git Push to Live Site on Vercel

**Prompt:** Rebuild deck slide 10, variant A, under the header “From Git Push
to Live Site on Vercel”. Chain: “Commit locally” → “Push to GitHub” → “Vercel
detects the commit” → “Install and build” → branch split. Upper branch: “Pull
request or non-production branch → Preview deployment”. Amber gate: “Review
the preview”. Lower branch: “Configured production branch → Production
deployment”. Final: “Domain serves that deployment.” Coral branch: “Build
fails → read the log → fix → push again.” Footer: “This flow applies when the
repository and deployment settings are connected.”

**Guardrail:** Do not hard-code a branch name, promise an automatic deployment,
or include price or speed claims.

**Alt:** A connected Git repository producing Vercel preview and production
deployments, with a review gate and failed-build loop.

**Caption:** A connected Vercel project can turn a Git commit into a preview
or production deployment.

**Review:** Compare against deck slide 10, variant A, and the course project’s
Vercel settings; verify that failed builds do not point to a live result.

### 22. The Twelve-Tool Map

**Prompt:** Rewrite deck slide 7 as a radial hub titled “The Twelve-Tool Map”.
Centre: “One project, different jobs.” Four grouped quadrants with exactly
three labels each. “Think and build”: “AI chat”; “Agentic editor”; “Terminal”.
“Write and keep”: “Markdown”; “Git”; “GitHub”. “Landing page”: “Node.js”;
“Astro”; “Vercel”. “App”: “Bun”; “Next.js template”; “Supabase”. Footer: “You
will not use all twelve at once. Each has one job.”

**Guardrail:** This is a curriculum rewrite of deck slide 7, not a literal
transcription. Do not add or remove tools without reconciling the final
syllabus.

**Alt:** Twelve course tools grouped by thinking, project history,
landing-page work, and app work.

**Caption:** The course uses different tools for thinking, editing,
versioning, publishing, and storing data.

**Review:** Compare the grouping with deck slide 7 and the final setup lesson;
confirm there are exactly twelve labels and explain Node/npm versus Bun in
lesson copy.

### 23. How a Learner App Stores and Protects Data

**Prompt:** Rewrite deck slide 11 as an architecture diagram titled “How a
Learner App Stores and Protects Data”. Top auth lane: “Browser” → “Sign in with
Google” → “Supabase Auth” → “Session cookie” → “Protected Next.js route”.
Primary data lane: “Browser action” → “Next.js server” → “Validate the session
and input” → “Drizzle query scoped to this user” → “Supabase Postgres”.
Place a coral warning beside this lane: “The template’s direct Drizzle
connection can bypass RLS. Server code must authorise and scope the query.”
Add a secondary dotted lane labelled “Only if the project uses the Supabase
Data API”: “Supabase client” → “RLS policy” → “Postgres”. Side card,
“Storage”: “Signed upload or download”. Footer: “Authentication proves who the
user is. Authorisation decides what that user may do.” Bottom warning: “Never
expose service-role or database credentials to the browser.”

**Guardrail:** Freeze this visual against the exact
`KRSHH/nextjs-template` commit used by the course. Google is an available
provider, not automatically configured. Do not imply that RLS protects direct
Drizzle queries made through the template’s privileged database connection.

**Alt:** A learner app’s Google sign-in and Supabase session leading to a
Next.js server that validates and scopes privileged Drizzle queries, with an
optional separate RLS-protected Data API path.

**Caption:** The app authenticates with Supabase, then authorises and scopes
each privileged server query to the current user.

**Review:** Compare the composition with deck slide 11 and audit the pinned
template’s authentication, database, architecture, and environment-variable
docs; have a database reviewer verify the Drizzle/RLS distinction and confirm
Google is enabled in the lesson setup.

### 24. Rapid App Development Workflow

**Prompt:** Build a wide workflow titled “Rapid App Development Workflow”. Top
sequence: “PRD — problem, user, scope, done” → “Agentic IDE — open the repo and
source material” → “Plan — no code yet; steps, risks, dependencies” → amber
“Human review — correct assumptions; approve the first milestone” →
“todos.md — ordered, checkable work” → “Baseline commit — clean recovery
point”. Milestone loop: “Build one milestone” → “Add data when required —
Supabase” → “Add sign-in when required — Google through Supabase Auth” → “Test
→ review diff → commit” → “Next milestone”. Side panel, “Human in the loop”:
“You decide: scope, architecture, approvals, data and what ships.” “AI does:
propose, edit, run and report.” “Stop when: requirements are unclear, a
destructive action is proposed, or checks fail.”

**Guardrail:** The source is the owner-approved written brief. Do not claim an
exact visual match to an unavailable original file. Preserve the decision
structure and human-in-the-loop teaching point.

**Alt:** A reviewed app workflow from PRD and planning through todos, a
baseline commit, milestone builds, Supabase, authentication, testing, and
further commits.

**Caption:** Build the app in reviewed, testable milestones with a commit at
each recovery point.

**Review:** Obtain the user’s reference before matching its composition;
confirm the sequence against the Part 5 lessons; show Supabase and
authentication only when a milestone requires them.

### 25. Prompting, Retrieval or Fine-Tuning?

**Prompt:** Use a three-column decision visual titled “Prompting, Retrieval or
Fine-Tuning?” “Prompting”: “Change the instruction and examples in the
request.” “Use when: the task, format or constraints are unclear.” “Retrieval,
often called RAG”: “Find relevant material at request time and place it in
context.” “Use when: answers depend on changing or private documents.”
“Fine-tuning”: “Train on labelled examples to make a recurring pattern more
consistent.” “Use when: stable behaviour must repeat across many requests.”
Footer path: “Start with prompting → add retrieval when facts live outside the
model → consider fine-tuning after you have good examples and an eval.” Coral
note: “Fine-tuning is not a live document store.”

**Guardrail:** Do not present the three methods as mutually exclusive or claim
that fine-tuning cannot encode any knowledge.

**Alt:** Prompting, retrieval, and fine-tuning compared by what each changes
and when it is useful.

**Caption:** Prompting changes instructions, retrieval supplies current
material, and fine-tuning changes recurring behaviour.

**Review:** Have a technical reviewer check the RAG and fine-tuning wording;
ensure the final path is advice, not a mandatory sequence.

### 26. What an API Key Is — and How Billing Works

**Prompt:** Header: “What an API Key Is — and How Billing Works”. Flow: “Your
server” → “Request + secret API key” → “Provider API” → “Response”. Key card:
“A secret credential for software”; “Identifies the project or account making
the request”; “Does not belong in browser code, screenshots or Git.” Billing
card: “Usage may be measured by input, output, calls or tool use”; “Prices and
limits differ by model and provider”; “Set budgets and alerts in the provider
account.” Footer: “A chat plan may not include API usage. Check the provider’s
billing page.” Coral note: “If a secret key is exposed, rotate it immediately.”

**Guardrail:** Say “secret API key”; some services also issue intentionally
public or short-lived credentials.

**Alt:** A server authenticating an API request with a secret key, alongside
provider-dependent usage billing.

**Caption:** An API key identifies software requests; API usage may be billed
separately from chat subscriptions.

**Review:** Verify the claims against every provider taught in the course;
ensure no key format, rate, currency, or allowance appears.

### 27. Secrets and Environment Variables

**Prompt:** Use three lanes titled “Secrets and Environment Variables”. Local
lane: “`.env.local` — real local values” → “ignored by Git” → “local app”.
Repository lane: “`.env.example` — variable names and safe placeholders only”
→ “Git”. Hosting lane: “Protected environment settings” → “deployed app”.
Split card: “Secret: API key, service-role key, signing secret.” “Not
automatically secret: public URL, public identifier, browser-safe publishable
key.” Rules: “Never commit real secrets”; “Use separate values by environment”;
“Rotate exposed secrets — deleting the file is not enough.” Coral strip:
“Anything sent to the browser can be read by the user.”

**Guardrail:** Do not imply that every environment variable is secret or every
key-shaped value must remain server-only.

**Alt:** Local, repository, and hosting paths for environment variables,
separating true secrets from browser-visible values.

**Caption:** Secret values belong in protected environment settings, never
source control.

**Review:** Compare filenames and public-variable prefixes with both course
stacks; run a secret scan on sample code.

### 28. Context Engineering

**Prompt:** Build a funnel titled “Context Engineering: Give the Model the
Right Working Set”. Inputs entering the funnel: “Goal and done condition”;
“Rules”; “Relevant source files”; “Good examples”; “Tool results”. Outside the
funnel in muted cards: “Unrelated files”; “Stale copies”; “Secrets”;
“Unsupported assumptions”. Output: “Working context”. Loop below: “Route →
retrieve → act → summarise → keep only what the next step needs.” Footer:
“More context is not always better. Useful context is relevant, current and
inspectable.”

**Guardrail:** Do not claim that the user controls every hidden system
instruction or every automatic context-management step.

**Alt:** Relevant goals, rules, files, examples, and tool results entering a
working context while stale and sensitive material stays out.

**Caption:** Good context is relevant, current, scoped, and inspectable.

**Review:** Ensure secrets are excluded rather than merely deprioritised;
confirm the diagram does not equate context with permanent memory.

### 29. How to Tell If It Actually Works

**Prompt:** Build a circular evaluation loop titled “How to Tell If It Actually
Works”. “Define the task” → “Create representative cases” → “Write pass/fail
checks” → “Run the same cases” → “Inspect failures” → “Change one thing” →
repeat. Scorecard: “Correct?” “Complete?” “Uses the right sources?” “Safe to
act on?” “Works again?” Footer: “A demo asks, ‘Can it work once?’ An eval asks,
‘Does it work reliably on the cases that matter?’” Small note: “Use automated
checks where possible and human judgement where needed.”

**Guardrail:** Include no invented score, pass rate, benchmark, or claim that
every quality can be reduced to a binary test.

**Alt:** A repeatable evaluation cycle with a scorecard for correctness,
completeness, sourcing, safety, and consistency.

**Caption:** Evals turn a promising demo into repeatable evidence.

**Review:** Tie example cases to actual lesson outputs; require expected
results and named human-review criteria before publishing an eval.

### 30. PRD Anatomy

**Prompt:** Draw an annotated document titled “PRD Anatomy”. Centre page with
nine labelled sections and callout arrows. “Problem — what is happening now?”
“User — who has this problem?” “Outcome — what changes for them?” “Scope —
what is included?” “Out of scope — what will not be built?” “User flows —
what must the user be able to do?” “Data and permissions — what is stored, and
who may see or change it?” “Acceptance checks — how will we know it works?”
“Open questions — what must be decided before build?” Footer: “A PRD sets the
problem and boundaries. It does not need to prescribe every implementation
detail.”

**Guardrail:** Do not fill the mock PRD with invented product requirements or
user data.

**Alt:** A product requirements document annotated with problem, user,
outcome, scope, flows, data, checks, and open questions.

**Caption:** A useful PRD names the user, boundary, flow, data, and acceptance
checks.

**Review:** Compare the labels with the course PRD template; ensure
“acceptance checks” are outcomes rather than implementation tasks.

### 31. The Approval Gate

**Prompt:** Build a decision flow titled “The Approval Gate”. Left: “AI
proposes an action”. Centre amber gate with five questions: “What will change?”
“Where will it change?” “Can it be undone?” “Does it affect people, money,
data or an external system?” “Did the checks pass?” Green route: “Approve one
scoped action.” Coral route: “Stop, narrow the scope or ask for evidence.”
Bottom risk strip: “Read-only can still expose sensitive data.” “Reversible
project edit: review the diff.” “Destructive, external or irreversible:
explicit human approval.” Footer: “Approval is a decision, not a reflex. Read
the exact action and target.”

**Guardrail:** Do not label all read-only actions safe or imply that an
approval dialog transfers accountability to the tool.

**Alt:** An AI-proposed action passing through five human checks before
approval or a stop-and-narrow route.

**Caption:** A human approval gate checks the exact action, target,
reversibility, and impact.

**Review:** Test the gate against deletion, deployment, email sending,
database migration, and secret-reading examples; ensure risky actions cannot
bypass the amber decision.
