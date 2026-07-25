# Prompting, Retrieval or Fine-Tuning?

**Slug:** `prompting-rag-or-fine-tuning`

**Status:** Approved for course use

**Placement:** Lesson 01-05 and app differentiator routing

**Source:** New course visual. Technical wording follows the lesson's primary-source review.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675 three-column decision visual titled “Prompting, Retrieval or Fine-Tuning?” Subtitle: “Choose based on what needs to change.”

PROMPTING: “Change the instruction and examples in the request.” Use when “the task, format or constraints are unclear.” Badge: “Changes this request”.

RETRIEVAL (RAG): “Find relevant material at request time and place it in context.” Use when “answers depend on changing or private documents.” Badge: “Changes the supplied context”.

FINE-TUNING: “Train on labelled examples to make a recurring pattern more consistent.” Use when “stable behaviour must repeat across many requests.” Badge: “Changes recurring behaviour”.

Decision path: “Start with prompting” → “Add retrieval when facts live outside the model” → “Consider fine-tuning after you have good examples and an eval”.

Warning: “Fine-tuning is not a live document store.” Show that the methods may be combined. Include no performance claim or metric.
```

## Accessibility text

**Alt text:** Three connected columns compare prompting, retrieval, and fine-tuning by what each changes and when it is useful. A suggested path starts with prompting, adds retrieval for outside facts, and considers fine-tuning after examples and an eval. A warning says fine-tuning is not a live document store.

**Caption:** Prompting changes the request, retrieval supplies current material, and fine-tuning changes a recurring behaviour.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All three method descriptions and use cases match the approved copy.
- Overlapping connectors show that the methods are not mutually exclusive.
- The decision path is advice, not a claim that every project must follow it.
- No invented performance, price, or version claim appears.
