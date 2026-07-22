# Architecture Decision Log

This document records important architectural and technical decisions made during the development of the Mato Cashew website.

Each decision includes:

- Context
- Decision
- Reason
- Impact

This document helps future developers understand **why** decisions were made, not only **what** was implemented.

---

# ADR-001

## Use Astro as the Frontend Framework

### Status

Accepted

### Context

The project required:

- Excellent SEO
- Fast performance
- Static Site Generation
- Future CMS integration

### Decision

Astro was selected as the frontend framework.

### Reason

Astro provides:

- Static Site Generation
- Component architecture
- Excellent Lighthouse scores
- Minimal JavaScript
- Easy deployment

### Impact

The website is optimized for performance and search engines while remaining ready for future backend integration.

---

# ADR-002

## Separate Business Configuration

### Status

Accepted

### Decision

Business information is stored inside:

```
src/config/
```

instead of inside components.

### Reason

Business information changes over time.

Changing contact information or analytics should never require editing UI components.

### Impact

Maintenance becomes easier and safer.

---

# ADR-003

## Introduce a Service Layer

### Status

Accepted

### Decision

Components access business data through services.

```
Component

↓

Service

↓

Data
```

### Reason

Separates presentation from business logic.

### Impact

The data source can later be replaced by an API without changing components.

---

# ADR-004

## Centralize Product Data

### Status

Accepted

### Decision

Product information is stored in:

```
src/data/products.ts
```

### Reason

Single Source of Truth.

### Impact

Future migration to a database becomes straightforward.

---

# ADR-005

## Multilingual Product Structure

### Status

Accepted

### Decision

Each product stores translations inside:

```
translations.en

translations.km
```

instead of creating duplicate product records.

### Reason

One product should have one identity.

Only translated content changes.

### Impact

Cleaner data model and easier CMS integration.

---

# ADR-006

## Configuration-Driven Navigation

### Status

Planned

### Decision

Navigation will be generated from configuration rather than hard-coded links.

### Expected Impact

Adding or removing pages will require changes in only one location.

---

# ADR-007

## Documentation First

### Status

Accepted

### Decision

Core technical documentation is created before backend development.

### Reason

Clear documentation reduces future maintenance costs and improves onboarding.

### Impact

The project gains a long-term technical reference.

---

# ADR-008

## CMS-Ready Architecture

### Status

Accepted

### Decision

The frontend is designed so static data can later be replaced by REST APIs.

### Target Architecture

```
Frontend

↓

Service Layer

↓

REST API

↓

Database
```

### Impact

Minimal frontend changes during CMS implementation.

---

# ADR-009

## SEO as a Core Requirement

### Status

Accepted

### Decision

SEO is treated as a first-class feature.

### Includes

- Structured Data
- Canonical URLs
- Hreflang
- Open Graph
- Sitemap
- Robots.txt

### Impact

Improved discoverability and search engine compatibility.

---

# ADR-010

## Documentation as Living Documents

### Status

Accepted

### Decision

Documentation must evolve together with the codebase.

Whenever architecture changes significantly, the corresponding documentation should be updated in the same development cycle.

### Impact

Documentation remains accurate and trustworthy.