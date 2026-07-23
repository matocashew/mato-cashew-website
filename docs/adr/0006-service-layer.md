# ADR-0006: Adopt a Service Layer Architecture

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

As the Mato Cashew platform grows, more business logic will be shared across multiple pages.

Examples include:

- Loading products
- Filtering resources
- Finding related content
- Building breadcrumbs
- Generating SEO metadata
- Reading navigation
- Loading categories

If pages perform this logic directly, code duplication and maintenance costs increase significantly.

A dedicated Service Layer is required.

---

# Decision

All business logic will be implemented inside the Service Layer.

Pages should never contain business logic.

Pages should only:

- Receive requests
- Call services
- Pass data to components
- Render the UI

---

# Objectives

The Service Layer should:

- Centralize business logic
- Eliminate duplicated code
- Improve testability
- Improve maintainability
- Support future APIs
- Support future CMS integration

---

# Architecture

Browser

↓

Astro Page

↓

Service Layer

↓

Configuration

↓

Shared Data

↓

Content Collections

↓

Response

---

# Responsibilities

## Pages

Responsibilities

- Routing
- Calling services
- Passing props
- Rendering components

Pages should not:

- Filter data
- Sort collections
- Build navigation
- Generate SEO manually

---

## Services

Services contain all business logic.

Examples

Product Service

Resource Service

Navigation Service

SEO Service

Category Service

Search Service

---

## Components

Components display data.

Components should not:

- Read content collections
- Perform filtering
- Query navigation
- Generate business rules

---

# Folder Structure

src/

services/

product.service.ts

resource.service.ts

navigation.service.ts

category.service.ts

seo.service.ts

search.service.ts

---

# Product Service

Responsible for:

Loading products

Finding featured products

Finding related products

Finding products by category

Finding products by slug

Sorting products

Future inventory integration

---

# Resource Service

Responsible for:

Loading resources

Finding related resources

Filtering by category

Sorting by publish date

Searching resources

Future pagination

---

# Navigation Service

Responsible for:

Reading navigation data

Building breadcrumbs

Returning localized navigation

Generating footer links

Future mega menu support

---

# Category Service

Responsible for:

Loading categories

Finding category metadata

Building category pages

Future category statistics

---

# SEO Service

Responsible for:

Page titles

Descriptions

Canonical URLs

Open Graph

Twitter Cards

Structured Data

Breadcrumb Schema

Future hreflang generation

---

# Search Service

Future responsibilities

Search products

Search resources

Search recipes

Search downloads

Search FAQ

Support multilingual search

---

# Service Rules

Services may read:

Configuration

Shared Data

Content Collections

Future APIs

Future CMS

Services should never render HTML.

---

# Dependency Rules

Pages

↓

Services

↓

Configuration

↓

Content

Components should never call services directly unless explicitly designed for client-side interaction.

---

# Return Values

Services should return structured objects.

Example

Product

Resource

Navigation

Breadcrumb

SEO Metadata

Avoid returning raw collections when processed data is more useful.

---

# Error Handling

Services should handle:

Missing content

Invalid slugs

Empty collections

Configuration errors

Pages should display user-friendly responses.

---

# Caching

Services should support future caching strategies.

Examples

Static cache

Content cache

Search index

Future API cache

---

# Future Compatibility

The Service Layer should support:

REST APIs

GraphQL

Headless CMS

Database

Search Engine

Partner Portal

Authentication

without changing page components.

---

# Alternatives Considered

## Option A

Business logic inside pages.

Rejected.

Reason

Creates duplication and tightly couples routing with business rules.

---

## Option B

Business logic inside components.

Rejected.

Reason

Components should remain reusable and presentation-focused.

---

## Option C

Dedicated Service Layer.

Accepted.

Reason

Improves maintainability, scalability, and separation of concerns.

---

# Consequences

Positive

Cleaner pages

Reusable logic

Better testing

Future CMS support

Future API support

Consistent architecture

Trade-offs

Additional abstraction

More files

Requires architectural discipline

These trade-offs are acceptable because they significantly improve long-term maintainability.

---

# Implementation Guidelines

One service per domain.

Keep services framework-independent.

Prefer pure functions where possible.

Avoid side effects.

Document public service methods.

Use explicit return types.

---

# Example Flow

Product Detail Page

↓

Product Service

↓

Load Product

↓

Load Related Products

↓

Generate Metadata

↓

Return View Model

↓

Render Page

---

# Related Documents

01-project-vision.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0001 Platform Vision

ADR-0004 Single Source of Truth

ADR-0005 BEM CSS Convention

---

# Review

Review this ADR when:

A Headless CMS is introduced.

A database replaces Content Collections.

Server-side rendering becomes the primary rendering strategy.

The platform introduces authenticated services.

---

# Conclusion

The Mato Cashew platform adopts a dedicated Service Layer to separate business logic from presentation.

This architecture improves maintainability, scalability, testability, and future integration with external systems while keeping pages and components clean and reusable.