# Sprint 14 — Component & Internal-Link Notes

## Article
**Cashew Export Guide**

## 1. Page architecture
Shared Knowledge shell owns:
- KnowledgeHero
- KnowledgeMeta
- TagGroup
- KnowledgeTOC
- ReadingProgress
- KnowledgeNavigation
- RelatedArticles

MDX owns frontmatter, body imports, and article content only.

## 2. Approved component reuse

### QuickFacts
Use for:
- export readiness is layered;
- product/buyer/destination context;
- no universal checklist;
- exporter/importer distinction;
- current-rule verification.

### InfoBox
Use for:
1. No universal export checklist.
2. C/O scope.
3. Phytosanitary scope.
4. Destination-rule/current-date warning.
5. Guide does not replace competent authority/broker/importer.

### ComparisonTable
Use for:
- export-chain roles;
- document categories;
- exporter vs importer responsibilities;
- U.S. vs EU conceptual differences if useful.

### FAQ
Use current `items` prop pattern.

### ArticleLink
Use for Continue Learning and natural contextual links.

## 3. No new component approved
Do not create:
- ExportChecklist
- CountryRequirementsTable
- CustomsCalculator
- CertificateWizard
- TradeRouteCard
- TariffCalculator

Potential future country-requirement database belongs to Platform architecture, not static Knowledge content.

## 4. Outbound internal links

### Cashew Grading Standards
Use in product/grade definition.

### Cashew Quality Standards
Use in product conformity / buyer specification.

### Cashew Moisture Standards
Use where moisture is part of specification.

### Cashew Food Safety
Use for broader safety/hygiene framework.

### Cashew Packaging Guide
Use in packaging / marking / shipment protection.

### Cashew Shelf Life Guide
Use where buyer/product shelf-life expectations are discussed.

## 5. Planned inbound-link review after publication
Priority:
1. Packaging Guide
2. Shelf Life Guide
3. Quality Standards
4. Grading Standards
5. Food Safety where natural

Target:
`/knowledge/cashew-export-guide`

Do not force links solely for SEO.

## 6. Responsibility model
Exporter:
- product readiness;
- buyer specification;
- packaging / marking;
- export-side documents;
- customs export process;
- traceability.

Buyer / importer:
- destination-country import obligations;
- importer-side filings;
- buyer-side regulatory responsibilities.

Authorities / services:
- customs;
- plant-health authority;
- C/O issuer;
- lab / inspection body;
- freight forwarder;
- customs broker.

## 7. Duplicate-content boundaries

### Grading / Quality
Export Guide references grade/specification and links out. Do not recreate full grading/defect content.

### Moisture
Mention as a specification factor. Do not repeat moisture test methods.

### Food Safety
Mention destination/buyer safety requirements. Do not recreate HACCP/GMP.

### Packaging
Mention export packaging readiness. Do not recreate packaging technology guide.

### Shelf Life
Mention buyer/product shelf-life requirements. Do not recreate shelf-life validation framework.

## 8. Factual implementation rules
- No universal document checklist.
- No universal phytosanitary requirement.
- No universal C/O requirement.
- RCN ≠ processed-kernel requirements.
- U.S. FDA ≠ USDA APHIS.
- Exporter ≠ importer responsibilities.
- Buyer requirements may exceed regulatory minimums.
- EU requirements remain product/origin/current-rule specific.
- Verify destination requirements close to shipment time.
- No legal-advice framing.
- No promise that the article alone establishes compliance.

## 9. Working metadata

### Working title
`Cashew Export Guide: From Product Readiness to International Shipment`

### Category
Use an existing production taxonomy after checking latest frontmatter.

### Working tag concepts
- export
- quality
- packaging
- trade
- traceability
- cashew-kernels

Final format should follow existing collection conventions.

## 10. Expected assets
- `/images/knowledge/cashew-export-guide.jpg`
- `/images/knowledge/cashew-export-readiness-flow.jpg`

Verify final filenames before MDX is frozen.

## 11. QA

### Content
- [ ] No universal document checklist.
- [ ] C/O wording scoped.
- [ ] Phytosanitary wording scoped.
- [ ] RCN vs kernels clear.
- [ ] U.S. FDA vs APHIS clear.
- [ ] Exporter/importer responsibilities clear.
- [ ] Cambodia section remains high level.
- [ ] EU/U.S. examples remain examples, not complete country guides.
- [ ] Current-rule verification warning present.
- [ ] No duplicate content from existing articles.

### Components
- [ ] QuickFacts renders.
- [ ] ComparisonTables render.
- [ ] InfoBoxes match current variants.
- [ ] FAQ uses `items` and works.
- [ ] ArticleLinks resolve.

### Assets / responsive
- [ ] Hero loads and crops on desktop/mobile.
- [ ] Export-readiness diagram loads.
- [ ] Diagram readable on mobile.
- [ ] No misleading mandatory-document claims embedded in image.

### Navigation / build
- [ ] TOC works.
- [ ] Continue Learning works.
- [ ] Previous/Next renders.
- [ ] RelatedArticles render.
- [ ] `npm run build` passes before commit.

## 12. Platform Requirements Backlog

### PR-001 — Product ↔ Knowledge Relationship
Future product pages should reuse relationships to technical Knowledge content rather than duplicate it.

### PR-002 — Buyer / Export Journey
Future Mato Cashew Platform should support a buyer-oriented journey:

Discover Product  
→ Choose Grade  
→ View Specification  
→ Understand Quality  
→ View Packaging  
→ Supply / Export Information  
→ Inquiry / RFQ

Sprint 14 action: documentation only; no platform schema/UI implementation.

## Decision summary
**Architecture:** Reuse  
**New component:** No  
**Schema change:** No current requirement  
**Primary UI:** ComparisonTable + InfoBox  
**Required asset:** Hero  
**Recommended asset:** Export Readiness Flow Diagram  
**Universal legal checklist:** Prohibited  
**Dead future links:** Prohibited

## Status
**READY FOR DOCUMENTATION GATE REVIEW**
