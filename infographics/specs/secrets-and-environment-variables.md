# Secrets and Environment Variables

**Slug:** `secrets-and-environment-variables`

**Status:** Approved for course use

**Placement:** Lesson 06-02 and Supabase setup

**Source:** New course visual based on both course stacks' environment setup.

**Construction mode:** Built-in image generation and corrective image edit, followed by deterministic resize and WebP export. The edit removed an unlabeled hosting step.

## Production prompt

```text
Create a 1200×675 infographic titled “Secrets and Environment Variables”. Subtitle: “Put each value where it belongs.”

LOCAL: “`.env.local` — real local values” → “ignored by Git” → “local app”.
REPOSITORY: “`.env.example` — variable names and safe placeholders only” → “Git”.
HOSTING: “Protected environment settings” → “deployed app”.

Comparison:
SECRET — “API key · service-role key · signing secret”.
NOT AUTOMATICALLY SECRET — “public URL · public identifier · browser-safe publishable key”.

Rules:
“Never commit real secrets”
“Use separate values by environment”
“Rotate exposed secrets — deleting the file is not enough”

Warning: “Anything sent to the browser can be read by the user.”

Include no real value, invented prefix, logo, or unlabeled step.
```

## Accessibility text

**Alt text:** Three lanes show real local values in a Git-ignored `.env.local`, safe variable names and placeholders in a committed `.env.example`, and protected hosting settings reaching the deployed app. A comparison separates true secrets from browser-safe public values, with a warning that browser-delivered data is readable by the user.

**Caption:** Secret values belong in protected environment settings, never source control.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- Local, repository, and hosting lanes have no unlabeled step.
- The comparison does not imply every environment variable is secret.
- Rotation is required after exposure; deletion alone is not presented as remediation.
- No key value, provider logo, or invented variable prefix appears.
