# Sprint 13 — Component & Internal-Link Notes

## Article
**Cashew Shelf Life Guide**

## Page architecture
Shared Knowledge shell owns Hero, Meta, Tags, TOC, ReadingProgress, Navigation and RelatedArticles. MDX owns frontmatter, approved body-component imports and article body.

## Approved component reuse
- `QuickFacts`: core principles / key takeaways
- `InfoBox`: no universal duration; quality vs safety; accelerated-testing limitation; date-marking caution
- `ComparisonTable`: factors; product forms; quality-change dimensions; real-time vs accelerated
- `FAQ`: current production-approved `items` syntax
- `ArticleLink`: Continue Learning / natural contextual links

## No new component approved
Do not create ShelfLifeCalculator, ShelfLifeTimeline, FreshnessMeter, RancidityGauge, ShelfLifeFactorCard or AcceleratedTestConverter.

Decision gate: semantic MDX → existing component → static diagram → only then reusable UI.

## Outbound internal links
- **Cashew Moisture Standards:** moisture as stability input
- **Cashew Packaging Guide:** barrier/package/seal influence
- **Cashew Storage Guide:** temperature/humidity/handling/storage
- **Cashew Quality Standards:** acceptable quality over time
- **Cashew Food Safety:** quality shelf life does not replace safety controls

## Planned inbound-link review
Priority after publication:
1. Packaging Guide
2. Storage Guide
3. Moisture Standards
4. Quality Standards
5. Food Safety where natural

Potential target: `/knowledge/cashew-shelf-life-guide`

Do not force links or create dead future links.

## Duplicate-content boundaries
- Moisture: explain factor; do not repeat specifications/methods.
- Packaging: explain influence; do not repeat AFI/UNECE/material guide.
- Storage: explain deterioration-rate factor; do not repeat warehouse SOP.
- Quality: explain endpoints; do not recreate grading/defect classification.
- Food Safety: distinguish concepts; do not recreate HACCP/GMP.

## Factual rules
- No universal shelf-life number.
- No unsupported ambient/refrigerated/frozen duration table.
- RCN ≠ processed ≠ roasted ≠ flavoured.
- Study duration ≠ validated shelf life.
- Packaging/vacuum alone ≠ shelf life.
- Accelerated duration ≠ real-time duration without validated modelling.
- Quality shelf life ≠ food-safety validation.
- Shelf-life evidence ≠ automatic legal/commercial best-before date.

## Working metadata
Title: `Cashew Shelf Life Guide: Freshness, Storage, Packaging, and Quality`

Use an existing category after checking current production frontmatter.

Working tag concepts: `shelf-life`, `quality`, `storage`, `packaging`, `freshness`, `cashew-kernels`.

## Assets
Expected paths, subject to verification:
- `/images/knowledge/cashew-shelf-life-guide.jpg`
- `/images/knowledge/cashew-shelf-life-validation.jpg`

## QA
### Content
- [ ] No universal duration claim
- [ ] Product-form scope clear
- [ ] Study duration not presented as shelf life
- [ ] No unsupported refrigeration/freezing duration
- [ ] Accelerated limitation explicit
- [ ] Quality vs safety explicit
- [ ] Best-before distinction explicit
- [ ] No prior-article duplication

### Components / responsive
- [ ] QuickFacts, InfoBoxes, ComparisonTables render
- [ ] FAQ uses `items` and functions
- [ ] ArticleLinks resolve
- [ ] Tables/diagram usable on mobile
- [ ] Hero crops correctly

### Navigation / build
- [ ] TOC anchors work
- [ ] Continue Learning resolves
- [ ] Previous/Next and RelatedArticles render
- [ ] `npm run build` passes before commit

## Platform Requirements Backlog
**PR-001 — Product ↔ Knowledge Relationship:** Future product pages should support reusable relationships to relevant Knowledge articles rather than duplicate long technical explanations.

Sprint 13 action: documentation only; no schema/code implementation.

## Decision summary
Architecture: Reuse  
New component: No  
Schema change: No current requirement  
Required asset: Hero  
Recommended asset: Shelf-Life Validation Diagram  
Universal duration graphics: Prohibited  
Dead future links: Prohibited

## Status
**READY FOR DOCUMENTATION GATE REVIEW**
