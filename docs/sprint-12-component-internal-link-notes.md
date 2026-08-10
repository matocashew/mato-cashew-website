# Sprint 12 — Component & Internal-Link Notes

## Article
**Cashew Packaging Guide**

## Architecture
Shared page shell owns `KnowledgeHero`, `KnowledgeMeta`, `TagGroup`, `KnowledgeTOC`, `ReadingProgress`, `KnowledgeNavigation`, and `RelatedArticles`.

MDX owns frontmatter, imports, and article body only. Do not hard-code page-shell elements.

## Approved component reuse
- **QuickFacts:** packaging principles and key takeaways.
- **InfoBox:** requirements vs technology; hermetic vs vacuum; AFI gas scope; shelf-life/material cautions.
- **ComparisonTable:** AFI vs UNECE and packaging-system comparison.
- **FAQ:** latest `items` prop pattern.
- **ArticleLink:** Continue Learning/contextual learning links.

## No new component approved
Do not create PackagingTypeCard, BarrierChart, VacuumVsMAP, PackagingFlow, ShelfLifeBadge, or GasCompositionGauge.

Decision gate: semantic MDX → existing component → static diagram → only then consider reusable UI.

## Outbound internal links
### Cashew Moisture Standards
Packaging protects finished moisture condition. Use in Why Packaging Matters, Moisture/Oxygen Protection, Continue Learning.

### Cashew Storage Guide
Packaging operates within storage/distribution conditions. Use in Package Integrity and Continue Learning.

### Cashew Food Safety
Clean/suitable packaging supports contamination control. Use in Hygiene/Food Safety and Continue Learning.

### Cashew Quality Standards
Packaging preserves finished quality. Use in Why Packaging Matters and Continue Learning.

### Complete Guide to Cashew Processing
Packaging follows processing/drying/grading. Use in product-flow context and Continue Learning.

## Inbound-link review after publication
Prioritize natural links from Cashew Moisture Standards and Cashew Storage Guide; add Food Safety/Quality links only where context is natural.

Target: `/knowledge/cashew-packaging-guide`

Do not force links solely for link count.

## Future-link policy
Potential future articles: Cashew Shelf Life Guide and Cashew Export Guide. Do not create production links until pages exist.

## Duplicate-content boundaries
- **Moisture:** barrier/protection only; no analytical-method duplication.
- **Storage:** package integrity only; no full warehouse guidance.
- **Food Safety:** packaging hygiene only; no HACCP/GMP duplication.
- **Quality:** preservation only; no grading/defect duplication.
- **Shelf Life:** influence only; no universal shelf-life promise/model.
- **Export:** identification/traceability and market dependence only; no customs/tariffs/certificates workflow.

## Factual implementation rules
- AFI claims remain AFI-scoped.
- UNECE claims remain UNECE-scoped.
- Never merge both into one universal standard.
- Hermetic ≠ vacuum.
- Vacuum is not universally best.
- Nitrogen is not universally mandatory.
- AFI CO2/N2 provision retains AFI context.
- No universal laminate/material recipe.
- No unsupported shelf-life guarantee.

## Working metadata
Working title: `Cashew Packaging Guide: Protection, Packaging Systems, and Quality Preservation`

Use an existing category after checking current frontmatter conventions. Working tag concepts: packaging, quality, storage, food-safety, cashew-kernels.

## Sprint-specific QA
### Content
- [ ] AFI/U.S. scope preserved.
- [ ] UNECE scope preserved.
- [ ] Hermetic vs vacuum accurate.
- [ ] MAP wording not overgeneralized.
- [ ] AFI gas provision scoped.
- [ ] No universal material recommendation.
- [ ] No unsupported shelf-life claim.
- [ ] Retail vs bulk clear.
- [ ] Export/Shelf Life boundaries preserved.

### Components / responsive
- [ ] QuickFacts renders.
- [ ] Both ComparisonTables render and work on mobile.
- [ ] InfoBoxes match existing variants.
- [ ] FAQ uses `items` and interaction works.
- [ ] ArticleLink paths resolve.
- [ ] Hero/diagram load and crop/read well on mobile.

### Navigation / build
- [ ] TOC works.
- [ ] Continue Learning works.
- [ ] Previous/Next and Related Articles render.
- [ ] Added inbound links resolve.
- [ ] `npm run build` passes before commit.

## Decision summary
**Architecture:** Reuse  
**New component:** No  
**Schema change:** No current requirement  
**Primary technical UI:** `ComparisonTable`  
**Required asset:** Hero  
**Recommended asset:** Packaging-system diagram  
**Dead future links:** Prohibited

## Status
**READY FOR ASSET PHASE AFTER DOCUMENTATION REVIEW**
