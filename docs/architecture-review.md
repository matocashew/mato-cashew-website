# Mato Cashew Architecture Review

Last Updated: July 2026

---

# Overall Status

| Module | Status |
|---------|--------|
| Foundation | ✅ Complete |
| Product Module | ✅ Complete |
| Resource Module | ✅ Complete |
| Gallery Module | ⏳ Planned |
| CMS Backend | ⏳ Planned |

---

# Current Architecture

```
Pages
    │
    ▼
Layouts
    │
    ▼
Components
    │
    ▼
Services
    │
    ▼
Content Collections
```

Pages never access Content Collections directly.

All data access should go through the Service Layer.

---

# Standard Module Structure

Every content module should follow the same structure.

```
module

├── content
├── service
├── listing page
├── detail page
├── card
├── grid
├── related
├── meta
└── schema
```

---

# Naming Convention

## Services

All **new modules** should follow this naming convention.

```text
product.service.ts
gallery.service.ts
news.service.ts
team.service.ts
faq.service.ts
```

### Legacy

The current project still contains:

```text
resourceService.ts
```

This file is considered **legacy naming**.

It should remain unchanged until a major refactoring phase to avoid unnecessary import changes.

---

## Components

Component names should follow PascalCase.

```text
ProductCard
ProductGrid
ProductMeta
RelatedProducts

ResourceCard
ResourceGrid
ResourceMeta
RelatedResources

GalleryCard
GalleryGrid
GalleryMeta
RelatedGallery
```

---

## Pages

Listing

```text
/products
/resources
/gallery
```

Detail

```text
/products/[...slug].astro
/resources/[...slug].astro
/gallery/[...slug].astro
```

---

## Content

Each content collection should contain:

```text
slug
title
description
publishDate
updatedDate
image
```

Additional fields depend on the module.

---

## SEO

Each module owns its own Schema component.

```
ProductPageSchema
ResourcePageSchema
GalleryPageSchema
```

---

# Routing Standard

Listing

```
/products
/resources
/gallery
```

Detail

```
/products/[slug]
/resources/[slug]
/gallery/[slug]
```

All URLs should use

```
data.slug
```

instead of

```
id
```

---

# Service Layer Standard

Every content module should expose a consistent API.

## Required Methods

```ts
getItems()

getItemBySlug(slug)

getFeaturedItems(limit?)

getRelatedItems(slug, limit?)
```

## Optional Methods

```ts
getItemsByCategory(category)

getLatestItems(limit)

searchItems(keyword)
```

## Rules

- Pages must never call `getCollection()` directly.
- Components must never call `getCollection()` directly.
- Only Services access Astro Content Collections.
- Future CMS integration should only modify the Service Layer.

---

# CMS Readiness

The current architecture allows replacing Astro Content Collections with:

- Headless CMS
- REST API
- GraphQL
- PostgreSQL
- Prisma

without changing UI Components.

---

# Current Assessment

## Strengths

- Consistent folder structure
- Service Layer adopted
- Reusable Components
- Multilingual support
- SEO-first architecture
- CMS-ready design

## Future Improvements

- Gallery Module
- Shared pagination utilities
- Search service
- Tag service
- Content cache layer
- API adapters

---

# Conclusion

The Product Module and Resource Module now provide the architectural standard for all future modules in the Mato Cashew website.