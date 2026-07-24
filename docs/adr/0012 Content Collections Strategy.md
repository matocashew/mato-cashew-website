# ADR 0012: Content Collections Strategy

Status: Accepted

Date: 2026-07-25

Decision Makers

- Mato Cashew Platform Team

---

# Context

The Mato Cashew Platform is a Content-First Platform.

The platform will publish multiple types of content, including:

- Products
- Knowledge
- Articles
- Recipes
- Guides
- FAQs
- Downloads
- Gallery
- Videos
- Industry News
- Future educational resources

One architectural decision must be made before implementation:

Should all content exist inside one collection?

or

Should each content type have its own collection?

This decision affects:

- Routing
- SEO
- Search
- CMS Integration
- Build Performance
- Content Validation
- Type Safety

---

# Decision

The platform adopts the **Multiple Content Collections Strategy**.

Every major content type owns its own collection.

Collections represent business domains rather than presentation categories.

---

# Collection Structure

Current

src/content/

products/

knowledge/

resources/

Future

src/content/

products/

knowledge/

articles/

recipes/

guides/

downloads/

gallery/

videos/

faq/

news/

---

# Why Multiple Collections

Each collection has:

- Different schema
- Different URL structure
- Different SEO
- Different metadata
- Different publishing workflow

Keeping them separated reduces complexity.

---

# Products

Purpose

Commercial products.

Example URL

/products/premium-cashew-250g

Schema

Product

---

# Knowledge

Purpose

Educational evergreen content.

Example URL

/knowledge/cashew-processing

Schema

Knowledge

---

# Articles

Purpose

News and blog posts.

Example URL

/articles/cambodian-cashew-market-2026

Schema

Article

---

# Recipes

Purpose

Cooking and food inspiration.

Example URL

/recipes/cashew-cookies

Schema

Recipe

---

# Guides

Purpose

Step-by-step educational documents.

Example URL

/guides/exporting-cambodian-cashews

Schema

Guide

---

# Downloads

Purpose

Files available for download.

Example URL

/downloads/company-profile

Schema

Download

---

# Gallery

Purpose

Image collections.

Example URL

/gallery/factory

Schema

Gallery

---

# Videos

Purpose

Educational media.

Example URL

/videos/how-cashews-are-processed

Schema

Video

---

# FAQ

Purpose

Frequently asked questions.

Example URL

/faq/export

Schema

FAQ

---

# News

Purpose

Industry updates.

Example URL

/news/global-cashew-prices

Schema

News

---

# Shared Architecture

Although collections are separate,

they all inherit the same shared model.

BaseContent

↓

Knowledge

Article

Recipe

Guide

Download

News

FAQ

Gallery

Video

This keeps metadata consistent while allowing each collection to define its own fields.

---

# Routing

Each collection owns its own route.

Examples

/products/{slug}

/knowledge/{slug}

/articles/{slug}

/recipes/{slug}

/guides/{slug}

/downloads/{slug}

/faq/{slug}

URLs remain clean and predictable.

---

# Search

Search indexes all collections.

Search results may contain

Products

Knowledge

Articles

Recipes

Downloads

Results should display their content type.

---

# Navigation

Navigation should not depend on folder structure.

Navigation is driven by

Navigation Service

↓

Content Service

↓

Collections

This preserves Separation of Concerns.

---

# SEO

Each collection has independent SEO rules.

Example

Knowledge

Article Schema

Article

NewsArticle Schema

Product

Product Schema

Recipe

Recipe Schema

Collections may share metadata while using different structured data.

---

# CMS Compatibility

Future CMS mapping becomes straightforward.

Knowledge

↓

Knowledge Collection

Products

↓

Product Collection

Articles

↓

Article Collection

No migration is required.

---

# Performance

Astro builds only the collections that exist.

Validation is performed per collection.

Type safety is improved.

Schema complexity remains manageable.

---

# Scalability

Future collections may include

Market Reports

Research Papers

Case Studies

Learning Modules

Events

Testimonials

No architectural redesign is required.

---

# Alternatives Considered

## Single Collection

Example

src/content/content/

Pros

Simple initial setup

Cons

Large schema

Complex validation

Mixed metadata

Poor scalability

Difficult CMS mapping

Rejected.

---

## Multiple Collections

Pros

Clear separation

Strong typing

Better validation

Cleaner routing

CMS friendly

SEO friendly

Scalable

Accepted.

---

# Consequences

Positive

- Better maintainability
- Better scalability
- Cleaner schemas
- Easier search
- Better CMS integration
- Better SEO
- Better routing

Trade-offs

- More collections
- More schemas
- Slightly more setup

These trade-offs are acceptable.

---

# Implementation Guidelines

Developers should:

Create one schema per collection.

Reuse BaseContent where applicable.

Avoid mixing unrelated content.

Keep business logic inside services.

Never access collections directly from components.

---

# Related ADRs

ADR-0001 Platform Vision

ADR-0003 Bilingual Content

ADR-0004 Single Source of Truth

ADR-0006 Service Layer

ADR-0010 Content-First Platform

ADR-0011 Shared Content Model

---

# Related Documents

02 Platform Architecture

03 Information Architecture

09 Content Strategy

11 API Design

12 Product Model

---

# Review

Review this ADR when:

A new content type is introduced.

CMS integration begins.

Routing strategy changes.

Search architecture changes.

---

# Status

Accepted

Version

1.0