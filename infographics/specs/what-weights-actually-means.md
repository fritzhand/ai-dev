# What “Weights” Means

**Slug:** `what-weights-actually-means`

**Status:** Approved for course use

**Placement:** Lesson 01-02

**Source:** Recreated from the owner’s MIT-licensed
[`startup-stack` upstream visual](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-weights-actually-means.webp)
with owner permission on 2026-07-25. The copy follows the approved AI Dev
course packet rather than transcribing the older image.

**Construction mode:** Built-in image generation, one targeted built-in image
edit, then deterministic resize and WebP export.

## Production prompt

The built-in generation used the base prompt and negative direction from
[`PROMPT-STYLE.md`](../PROMPT-STYLE.md), followed by:

```text
Use the header “What ‘Weights’ Means”. Build a left-to-right flow:
neural connections labelled “Training adjusts numbers on connections”; a file
labelled “Those learned numbers are the weights”; a processor labelled
“Running the model uses the weights to calculate an output.”

Add a bottom split card.
“Open-weight model”: “Weights are available under a licence. You can run them
where the licence and hardware allow.”
“Hosted model”: “The provider runs the model. You access it through an app or
API.”

Footer: “Open weights do not automatically mean open source, safer, private or
better.”

Technical guardrail — do not render as copy: Include no parameter counts, file
sizes, named providers, capability ranking, or illustrative numerical labels.
Do not add any text beyond the quoted copy.
```

The first render added illustrative numbers to the connection diagram. The
final PNG used this targeted built-in edit:

```text
In the first top-left neural-network diagram only, remove the six numeric
labels “0.2”, “-0.7”, “1.3”, “0.8”, “-1.1”, and “0.6”. Replace only those
label pixels with the surrounding white card background while keeping all
connection lines visually continuous. Preserve every other element and add no
replacement text, number, label, or decoration.
```

## Accessibility text

**Alt text:** Training adjusts numerical weights, which are then loaded to
calculate outputs, with open-weight and hosted access compared.

**Caption:** Weights are learned numbers used to calculate outputs; access to
them changes where a model can run.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The three-stage flow, open-weight comparison, hosted comparison, and footer
  match the approved copy.
- The open-weight/open-source distinction is explicit, and the visual does not
  promise privacy, safety, or better capability.
- Unrequested numerical labels were removed; no parameter count, file size,
  provider name, or capability ranking remains.
- Reading order, contrast, and type remain legible at course-page width.
- Known limitation: exact instructional text is raster rather than editable;
  the final generated PNG and complete prompt/edit record are retained.
