---
summary: Define one learner-selected user, job, workflow, data boundary, differentiator, acceptance set, and explicit non-goals.
---

# App product requirements document

The learner chooses the product. Keep this first version to one complete,
useful workflow.

## Product sentence

For **[one user]** who needs to **[one job]**, this app lets them **[one useful
outcome]**.

## User and problem

- **Primary user:**
- **Problem observed:**
- **Source or evidence:**
- **Current workaround:**

## Core object

- **Object name:**
- **Fields the user must supply:**
- **Fields the system supplies:**
- **Who owns it:**
- **Who may read it:**
- **Who may change/delete it:**

## Flows

### Signed out

1.

### Sign in

1.

### Signed in core workflow

1. Create:
2. View:
3. Update:
4. Delete or archive:

### Failure and empty states

- No records:
- Invalid input:
- Unauthorized access:
- Service unavailable:

## Differentiator

- **What makes this useful beyond ordinary CRUD:**
- **Why it must wait until the core workflow works:**
- **If it uses AI, what input, output, source context, and evaluation apply:**

## Acceptance criteria

Use observable Given/When/Then statements.

1. Given ..., when ..., then ...
2. Given ..., when ..., then ...
3. Given User A owns a record, when User B requests it, then ...

## Data and safety

- Personal or sensitive data involved:
- Data that must never reach a model:
- Retention/deletion expectation:
- Abuse or permission risks:

## Non-goals

-

## Release evidence

- Static checks:
- Automated tests:
- Browser evidence:
- Real authentication evidence:
- Human reviewer:

## Approval

- [ ] One user, one job, and one core object are named.
- [ ] Signed-out and signed-in behavior is explicit.
- [ ] Ownership and unauthorized access have acceptance criteria.
- [ ] Optional systems are excluded unless the product needs them.
- [ ] A human approves this PRD before implementation planning.
