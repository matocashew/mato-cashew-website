# Sprint 15 — Component & Internal-Link Notes

## Article
**Cashew Kernel Grades & Uses: Size, Quality, and Buyer Selection**

## Page architecture
Shared Knowledge shell owns Hero, Meta, Tags, TOC, ReadingProgress, Navigation, and RelatedArticles. MDX owns frontmatter, approved body imports, and article content only.

## Approved component reuse
- `QuickFacts`: form/size/quality distinction; buyer-selection principles
- `InfoBox`: size ≠ quality; larger ≠ better; UNECE ≠ AFI; piece terminology scope
- `ComparisonTable`: kernel forms; whole sizes; UNECE vs AFI; functional application needs
- `FAQ`: current production `items` syntax
- `ArticleLink`: Continue Learning / contextual links

## No new component approved
Do not create GradeSelector, GradeCard, UseCaseMatrix, BuyerWizard, SizeQualityGauge, GradeRanking, or PriceTierBadge.

## Outbound internal links
- Cashew Grading Standards
- Cashew Quality Standards
- Cashew Moisture Standards
- Cashew Packaging Guide
- Cashew Export Guide

## Planned inbound-link review
Priority:
1. Cashew Grading Standards
2. Cashew Export Guide
3. Cashew Quality Standards
4. Cashew Packaging Guide where natural
5. Cashew Moisture Standards where natural

Target: `/knowledge/cashew-kernel-grades-uses`

## Duplicate-content boundaries
- Grading: do not recreate full definitions/tolerances.
- Quality: do not recreate the full defect framework.
- Moisture: mention only as specification attribute.
- Packaging: mention only as commercial-specification factor.
- Export: mention buyer/market context only.

## Factual implementation rules
- Size ≠ complete quality.
- Larger ≠ automatically better.
- W-number ≠ fixed application.
- No “W320 = retail / W450 = bakery” mapping.
- UNECE terminology ≠ AFI terminology.
- No direct UNECE↔AFI quality-class equivalence.
- Piece terminology remains specification-specific.
- Application guidance uses “consider”, “may suit”, or “depending on specification”.
- Roast-performance wording remains contextual.
- Buyer specification remains the final commercial reference.

## Expected assets
- `/images/knowledge/cashew-kernel-grades-uses.jpg`
- `/images/knowledge/cashew-grade-buyer-selection-flow.jpg`

## QA
### Content
- [ ] Size vs quality distinction explicit.
- [ ] Lower-count/larger-kernel explanation accurate.
- [ ] No size-based quality ranking.
- [ ] No fixed grade-to-use mapping.
- [ ] UNECE and AFI remain separate.
- [ ] No unsupported crosswalk.
- [ ] Piece terminology scoped.
- [ ] Roast-performance wording contextual.
- [ ] Buyer specification central.
- [ ] No duplicate Grading Standards content.

### Components / responsive
- [ ] QuickFacts, InfoBoxes, ComparisonTables render.
- [ ] FAQ uses `items` and works.
- [ ] ArticleLinks resolve.
- [ ] Hero and selection diagram work on desktop/mobile.

### Build
- [ ] TOC works.
- [ ] Previous/Next renders.
- [ ] Related Articles render.
- [ ] `npm run build` passes before commit.

## Platform Requirements Backlog
### PR-001 — Product ↔ Knowledge Relationship
Reuse Knowledge relationships on future product pages.

### PR-002 — Buyer / Export Journey
Discover Product → Choose Grade → View Specification → Understand Quality → View Packaging → Supply / Export Information → Inquiry / RFQ

### PR-003 — Product / Grade Selection Architecture
Products → Kernel Form → Grade / Size → Specification → Packaging Options → Availability / MOQ → Request Quote

Sprint 15 action: documentation only; no Platform implementation.

## Decision summary
Architecture: Reuse
New component: No
Schema change: No current requirement
Required asset: Hero
Recommended asset: Buyer Selection Flow
Fixed grade-to-use mapping: Prohibited
Size-as-quality ranking: Prohibited

## Status
**READY FOR DOCUMENTATION GATE REVIEW**
