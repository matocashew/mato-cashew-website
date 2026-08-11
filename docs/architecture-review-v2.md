# Mato Cashew Platform Architecture Baseline v2

**Status:** Platform Phase Baseline  
**Based on:** `architecture-review.md` (July 2026)

## 1. Core Architecture

```text
User Journeys
  ↓
Information Architecture
  ↓
Pages
  ↓
Layouts
  ↓
Components
  ↓
Domain Services
  ↓
Content / Data Layer
  ↓
Astro Content Collections
  ↓
Future CMS / API / Database
```

Hard rule: Pages and UI components do not access Astro Content Collections directly. Data access goes through services.

## 2. Module Status

| Module | Status |
|---|---|
| Foundation | ✅ Complete |
| Product Module | ✅ Complete |
| Resource Module | ✅ Complete |
| Knowledge Module | ✅ Complete — Core v1 |
| Gallery Module | ⏳ Planned |
| Buyer / RFQ Platform Layer | ⏭ Next |
| CMS Backend | ⏳ Future |

## 3. Standard Module Contract

```text
module
├── content / data
├── service
├── listing page
├── detail page
├── metadata / SEO
├── related-content logic
└── module-specific UI
```

Only implement UI primitives the module actually needs. Reuse existing components before creating new ones.

## 4. Service Layer

Common methods where relevant:

```ts
getItems()
getItemBySlug(slug)
getFeaturedItems(limit?)
getRelatedItems(slug, limit?)
```

Optional:

```ts
getItemsByCategory(category)
getLatestItems(limit)
searchItems(keyword)
```

Domain-specific methods are allowed.

### Product examples

```ts
getProductBySlug(slug)
getProductsByForm(form)
getProductsByGrade(grade)
getRelatedKnowledge(slug)
```

### Knowledge examples

```ts
getKnowledgeArticles()
getKnowledgeBySlug(slug)
getKnowledgeByTag(tag)
getRelatedKnowledge(slug)
getRelatedProducts(slug)
```

## 5. Data Access Rules

- Pages must not call `getCollection()` directly.
- UI components must not call `getCollection()` directly.
- Only services/adapters access Astro Content Collections.
- Future CMS/API integration should modify the service/data layer, not UI pages.
- Public URLs remain slug-based.

## 6. Routing

```text
/products
/products/[slug]

/resources
/resources/[slug]

/knowledge
/knowledge/[slug]

/gallery
/gallery/[slug]
```

Use `data.slug` as the public identifier.

## 7. Shared Base Content Direction

```ts
BaseContent {
  slug
  title
  description
  publishedAt
  updatedAt
  language
  image
  category
  tags
  featured
  draft
  seo
}
```

Module-specific schemas may extend this base after data-model review.

## 8. Product ↔ Knowledge Relationship

```text
Product
  ├── form
  ├── grade
  ├── specification
  ├── packaging
  └── relatedKnowledge[]
             ↓
         Knowledge
```

Reverse:

```text
Knowledge
  └── relatedProducts[]
```

Goal: Product pages should reference reusable technical Knowledge content instead of duplicating long explanations.

## 9. Buyer Journey

```text
Home
  ↓
Products
  ↓
Choose Kernel Form
  ↓
Choose Grade / Size
  ↓
View Specification
  ↓
Understand Quality / Packaging
  ↓
Supply / Export Information
  ↓
Request Quote
```

## 10. Platform Requirements Backlog

### PR-001 — Product ↔ Knowledge Relationship
Reuse Knowledge relationships on product pages.

### PR-002 — Buyer / Export Journey

```text
Discover Product
→ Choose Grade
→ View Specification
→ Understand Quality
→ View Packaging
→ Supply / Export Information
→ Inquiry / RFQ
```

### PR-003 — Product / Grade Selection Architecture

```text
Products
→ Kernel Form
→ Grade / Size
→ Specification
→ Packaging Options
→ Availability / MOQ
→ Request Quote
```

## 11. SEO Architecture

Reuse shared SEO primitives where possible:

```text
BaseSEO
├── OrganizationSchema
├── BreadcrumbSchema
├── ArticleSchema
├── ProductSchema
└── module-specific extensions
```

Do not create a new schema component if an existing generic schema is sufficient.

## 12. Naming

New services:

```text
product.service.ts
knowledge.service.ts
gallery.service.ts
news.service.ts
```

Keep legacy `resourceService.ts` unchanged until a deliberate refactor phase.

## 13. Deferred Work

- CMS migration
- PostgreSQL / Prisma
- REST / GraphQL adapters
- legacy naming cleanup
- content cache layer
- advanced shared search
- tag service
- pagination refactor
- Gallery implementation unless prioritized
- country-requirement database
- product-grade selector UI

## 14. Platform Phase Order

```text
1. Architecture Baseline
2. User / Buyer Journey Review
3. Information Architecture
4. Product Data Model
5. Product Detail Architecture
6. RFQ / Inquiry Architecture
7. Product ↔ Knowledge Integration
8. Navigation / Search / Discovery
9. UI Design Review
10. Implementation
11. Build
12. QA
13. Commit
```

## 15. Architecture Gates Before Code

- [ ] User types defined
- [ ] Buyer journey approved
- [ ] Navigation / information architecture approved
- [ ] Product content model approved
- [ ] Product ↔ Knowledge relationship approved
- [ ] RFQ / inquiry flow approved
- [ ] Existing components audited for reuse
- [ ] No premature CMS/schema migration
- [ ] SEO routing and canonical slug strategy confirmed

## Final Decision

**Keep:** Service Layer, Content Collections abstraction, slug URLs, reusable components, module architecture, SEO-first design, CMS-ready separation.

**Add:** Knowledge Module, User Journey layer, Buyer/RFQ architecture, Product↔Knowledge relationships, shared base content-model direction, Platform information architecture.

**Defer:** CMS migration, database/API migration, legacy naming cleanup, caching, advanced search, Gallery unless prioritized.

**Status: READY FOR REVIEW**
