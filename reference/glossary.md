---
summary: Plain-language definitions for the AI, code, web, data, and deployment terms used by the course.
requires: []
infographics: []
---

# Glossary

These definitions describe how the course uses each term. Product-specific behaviour still comes from current official documentation.

## AI and working context

**Agent**
An AI system that can use tools, observe results, and take several steps toward a goal. Tool access does not grant permission to use every available action.

**Alignment**
Training and system design intended to shape model behaviour toward instructions, safety requirements, and human preferences.

**API (application programming interface)**
A structured way for one program to request data or an action from another.

**API key**
A credential commonly used to identify and authenticate an API caller or project. Whether it is secret, publishable, restricted, or privileged depends on the provider's documentation.

**Connector**
An integration that lets a tool access another system, such as a repository or file store, within granted permissions.

**Context**
The working material available to a model for a request. It can include instructions, messages, files, retrieved passages, selected code, and tool results.

**Context window**
The model-specific limit on how much input and output can be handled in one interaction or sequence, as defined by the provider.

**Embedding**
A numerical representation used to compare meaning or similarity. Retrieval systems often use embeddings to find relevant passages.

**Evaluation (eval)**
A repeatable set of cases and checks used to measure whether a model or workflow meets its requirements.

**Fine-tuning**
Additional training on examples to shape recurring model behaviour for a defined task. It is not a live document store.

**Inference**
Running a trained model to produce an output from current input.

**Language model**
A model trained to generate or score sequences such as text. A fluent answer is not automatically a sourced fact.

**Model**
The trained system that transforms an input into an output. The surrounding product adds instructions, tools, context, permissions, and storage.

**Model tier**
A provider's grouping or choice that trades capability, speed, and cost. Names and availability change.

**Prompt**
Instructions and context supplied to a model for a task.

**RAG (retrieval-augmented generation)**
A pattern that finds relevant source material and adds it to the model's request-time context.

**Reasoning effort**
A setting exposed by some models or products that controls how much work the model spends before answering. It is distinct from model choice.

**Token**
A unit processed by a model. Tokens are not the same as words, and providers use them to describe limits and usage.

**Weights**
Numerical parameters adjusted during training and used by a model to produce outputs. They are not a browsable table of the original training documents.

## Files, code, and local tools

**Branch**
A named line of Git history used to develop or review changes separately.

**Build**
The process that turns project source into output that can run or be deployed.

**CLI (command-line interface)**
A program controlled by commands typed in a terminal.

**Commit**
A Git snapshot of the staged project state with an identifier and message.

**Dependency**
External code or a package that the project declares it needs.

**Diff**
A line-by-line representation of changes between two file states.

**Directory**
Another name for a folder.

**Editor**
A program for reading and changing files.

**Environment variable**
A named value supplied by the environment where a program runs. It is configuration, not automatically a secret.

**File path**
The sequence of folders and filename that locates a file.

**Git**
A distributed version-control system that records project history locally and can exchange it with remotes.

**GitHub**
A service that hosts Git repositories and collaboration features. It is not Git itself.

**IDE (integrated development environment)**
An editor with integrated project tools such as search, terminal, debugging, version control, and agent panels.

**Lockfile**
A package-manager file that records the resolved dependency graph for reproducible installs.

**Markdown**
Plain text with lightweight markers for headings, lists, links, images, code, and other structure.

**Migration**
A versioned change to a database schema or its data. Applying one can be consequential or destructive.

**Node.js**
A JavaScript runtime commonly used by web build tools and servers.

**Package manager**
A tool such as npm or Bun that installs declared packages and runs project scripts.

**Project root**
The top folder of one project, usually containing its README, manifest, and version-control metadata.

**Repository**
A project folder tracked by Git, including its history and configuration.

**Runtime**
The environment that executes a program.

**Secret**
A value that grants access or authority and must not be exposed, such as a private API key or database credential.

**Terminal**
A text interface for running commands in a particular working directory.

## Web, hosting, and data

**Astro**
The web framework taught for the landing-page project.

**Authentication**
Checking who a user is.

**Authorization**
Checking what an authenticated user is allowed to access or change.

**Callback URL**
A route to which an external authentication or integration flow returns the browser.

**Canonical URL**
The preferred public URL for a page when more than one URL could display it.

**Client**
Code running in the user's browser or device. Public client code must not contain server secrets.

**Database**
A system for storing and querying structured data with rules about access and consistency.

**Deployment**
A built version of the project made available in an environment such as preview or production.

**DNS (Domain Name System)**
Records that map a domain name to the service responsible for it.

**Domain**
A human-readable internet name, such as `example.com`.

**Environment**
A distinct configuration and runtime target, commonly local, preview, or production.

**Framework**
Code and conventions that organize how an application or site is built.

**Next.js**
The React framework used by the course's application starter.

**OAuth**
A protocol used to authorize access and support sign-in through another provider without giving the application the user's provider password.

**Preview**
A non-production deployment used to inspect a proposed change.

**Production**
The environment serving the real audience or users.

**PRD (product requirements document)**
A reviewed definition of the user, problem, flows, constraints, acceptance criteria, and non-goals for the app.

**Pull request**
A GitHub proposal to compare, discuss, test, and merge changes from one branch into another.

**RLS (row-level security)**
Database policies that control which rows a database role or user may access. A privileged server connection can have different enforcement behaviour, so the actual query path still requires review.

**Server**
Code running in a controlled runtime rather than the public browser. Server-side location alone does not make a query authorized.

**Session**
State that lets an application recognize an authenticated user across requests.

**Supabase**
The service used by the app route for Postgres and authentication.

**Vercel**
The deployment host taught for the landing-page and app routes.

**Vertical slice**
One complete user workflow through interface, server logic, data, and verification.

If a course page uses an unexplained term, open an issue or propose a glossary addition. Do not guess from the name.
