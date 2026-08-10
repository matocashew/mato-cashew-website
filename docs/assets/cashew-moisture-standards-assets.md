# Cashew Moisture Standards — Asset Plan

## Sprint
Sprint 11

## Purpose
Define the minimum visual assets needed for the `Cashew Moisture Standards` Knowledge Article while preserving the Mato Cashew Knowledge Design System and avoiding decorative or redundant visuals.

## Asset strategy
Use visuals only when they improve understanding.

Priority:
1. Reuse existing layout/components.
2. Use simple editorial imagery.
3. Use a diagram only where text alone is less clear.
4. Do not create an infographic when an existing component such as `ComparisonTable` communicates the information better.

---

## Asset 1 — Hero Banner

### Status
**Required**

### Purpose
Immediately establish the topic as cashew moisture measurement / quality control rather than cultivation or general storage.

### Visual direction
A clean quality-control setting featuring:
- processed cashew kernels;
- a moisture analyzer or laboratory-quality measurement context;
- weighing / sample-testing cues;
- clean trays or containers;
- professional cashew-processing or QC environment.

### Avoid
- raw cashew fruit as the dominant subject;
- generic warehouse imagery that reads mainly as “storage”;
- laboratory visuals implying medical testing;
- displaying a numerical result such as `4.0%` as though it is universally required;
- invented certification logos;
- text-heavy banner design unless consistent with the current Knowledge Center hero convention.

### Message
“Moisture is a measurable quality-control parameter.”

### Placement
Knowledge Hero image.

### Alt-text intent
Describe the activity rather than keyword stuffing.

Example:
`Cashew kernels being checked for moisture in a quality-control setting.`

### Filename
Finalize according to the existing Knowledge asset naming convention.

Likely semantic filename:
`cashew-moisture-standards.jpg` or project-equivalent.

---

## Asset 2 — Moisture Measurement Process Diagram

### Status
**Recommended**

### Purpose
Explain the loss-on-drying principle at a glance without writing a laboratory SOP.

### Diagram flow
Sample  
↓  
Initial Weight  
↓  
Controlled Drying  
↓  
Final Weight  
↓  
Moisture Result

### Design requirements
- simple horizontal or vertical educational flow;
- 5 steps maximum;
- consistent with existing Mato Cashew editorial colors and typography;
- readable on mobile;
- no complex laboratory formula;
- no claim that this diagram alone constitutes an official analytical procedure.

### Caption / note
Suggested:
“Conceptual loss-on-drying workflow. Commercial testing must follow the method required by the applicable specification or laboratory procedure.”

### Alt-text intent
`Diagram showing a simplified loss-on-drying workflow for measuring moisture in cashew kernels.`

### Important factual boundary
Do not imply that:
- every official method uses identical time/equipment settings;
- the diagram replaces AACCI/AOAC or equivalent validated methods.

---

## Asset 3 — Raw Nut vs Finished Kernel Stage Visual

### Status
**Optional**

### Purpose
Prevent readers from comparing moisture numbers from different product stages.

### Visual concept
Raw Cashew Nut  
→ Processing  
→ Finished Cashew Kernel

Potential supporting labels:
- pre-shelling / conditioning;
- drying;
- finished-kernel quality control.

### Recommendation
Only create this asset if the section is still difficult to understand in MDX after using headings, text, and `InfoBox`.

### Alternative
Use a simple text flow in MDX. No new component is necessary.

---

## Asset explicitly NOT required — AFI vs UNECE infographic

### Decision
**Do not create.**

### Reason
The existing `ComparisonTable` component is better because:
- values remain selectable and accessible;
- wording can be updated without recreating an image;
- mobile behavior follows the existing design system;
- it avoids duplicating technical information in image form.

---

## Asset explicitly NOT required — Wet Basis vs Dry Basis graphic

### Decision
**Not required for first implementation.**

### Reason
The distinction can be explained in two short paragraphs. Add a visual only if QA demonstrates a comprehension/readability problem.

---

## Image quality requirements
- editorial / professional;
- realistic cashew kernels;
- clean and uncluttered;
- no misleading instruments or impossible readings;
- sufficient resolution for KnowledgeHero;
- appropriate crop for desktop and mobile;
- compressed/optimized for static-site delivery.

## Accessibility requirements
- meaningful alt text;
- no essential technical information available only inside an image;
- diagram text must remain readable at mobile width;
- decorative imagery should not carry unsupported claims.

## Asset factual safeguards
- [ ] No image presents 3%–5% as a universal global requirement.
- [ ] No image presents 5.0% as a universal requirement outside UNECE context.
- [ ] No instrument reading is presented as a guaranteed target unless clearly contextualized.
- [ ] No fake standard/certification marks.
- [ ] Measurement diagram is labelled conceptual.
- [ ] Essential AFI/UNECE comparison remains HTML content, not image-only content.

## Asset gate
**Hero: Required**  
**Measurement diagram: Recommended**  
**Raw-vs-finished visual: Optional**  
**New UI component: Not required**
