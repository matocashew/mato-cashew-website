# ADR 0010: Content-First Platform

Status: Accepted

Date: 2026-07-25

Decision Makers:

- Mato Cashew Platform Team

---

# Context

Traditional company websites are primarily designed to showcase products and company information.

Typical architecture follows this pattern:

Home

↓

Products

↓

Contact

↓

About

This approach limits long-term SEO growth and provides little educational value to visitors.

The vision of the Mato Cashew Platform is fundamentally different.

The platform aims to become the leading Cambodian Cashew Knowledge Platform, serving multiple audiences including consumers, distributors, exporters, researchers, and international buyers.

To achieve this vision, content must become a core product of the platform rather than an additional feature.

---

# Decision

The platform adopts a **Content-First Architecture**.

Content is treated as a first-class domain alongside products.

Navigation, search, SEO, internal linking, and future CMS integration will be designed around content.

Product pages are important, but educational content is equally important.

The platform will prioritize helping users learn before encouraging them to purchase.

---

# Principles

## 1. Knowledge Before Marketing

Educational content should answer user questions before promoting products.

Examples:

- What is Cashew?
- Cashew Nutrition
- Cashew Grades
- Cashew Processing

Product recommendations may appear naturally inside educational pages.

---

## 2. Products Are Connected to Knowledge

Every product page should recommend related educational content.

Example

Premium Cashew 250g

↓

Health Benefits

↓

Recipes

↓

Nutrition

This improves:

- User experience
- SEO
- Customer trust

---

## 3. Knowledge Connects Back to Products

Educational pages should recommend relevant products whenever appropriate.

Example

Cashew Nutrition

↓

Premium Raw Cashew

↓

Roasted Cashew

↓

Wholesale Cashew

Content should support commercial goals without becoming promotional.

---

## 4. Internal Linking

Every content page should link to related pages.

Examples

Knowledge

↓

Articles

↓

Products

↓

Recipes

↓

Wholesale

Internal linking is a core architectural requirement.

---

## 5. Single Source of Truth

Knowledge content must exist only once.

Different sections of the platform should reuse the same content rather than duplicate it.

---

## 6. Content Types

The platform supports multiple content types.

Current

- Products
- Knowledge
- Resources

Future

- Articles
- Recipes
- Downloads
- Videos
- FAQs
- Industry News
- Case Studies
- Research Papers

Each content type should have its own schema.

---

## 7. SEO First

Every content page should include:

- SEO Title
- Meta Description
- Canonical URL
- Open Graph
- Twitter Card
- Structured Data
- Breadcrumb Schema
- Related Content

SEO is part of the architecture rather than an afterthought.

---

## 8. CMS Ready

Content should remain independent of the presentation layer.

Future CMS integration should require minimal changes to components.

Components consume services rather than reading content directly.

---

## 9. Search Ready

Every content type should be searchable.

Future search features include:

- Full-text search
- Category search
- Tag search
- Semantic search
- AI-assisted search

---

## 10. Multilingual

English is the primary publishing language.

Khmer translations follow the English version.

Future languages may include:

- Chinese
- Japanese
- Korean
- French

The architecture should support multilingual content without redesign.

---

# Consequences

Positive

- Stronger SEO
- Better user experience
- Higher customer trust
- Easier content expansion
- Future CMS compatibility
- Better internal linking
- Scalable knowledge platform

Trade-offs

- More planning required
- More content management effort
- Larger information architecture
- Additional editorial workflow

These trade-offs are acceptable because they directly support the platform vision.

---

# Examples

Instead of

Home

↓

Products

↓

Contact

The platform becomes

Home

↓

Knowledge

↓

Products

↓

Wholesale

↓

Resources

↓

Contact

Products and knowledge complement each other rather than competing.

---

# Implementation Guidelines

Developers should:

- Build reusable content components.
- Consume content through the service layer.
- Avoid hardcoding content into UI components.
- Keep business logic inside services.
- Keep content independent from presentation.

---

# Related ADRs

- ADR 0001 — Platform Vision
- ADR 0003 — Bilingual Content
- ADR 0004 — Single Source of Truth
- ADR 0006 — Service Layer
- ADR 0008 — Navigation Data
- ADR 0009 — UI Library

---

# Related Documents

- 01 Project Vision
- 02 Platform Architecture
- 03 Information Architecture
- 04 Navigation Specification
- 05 Design System
- 09 Content Strategy

---

# Review

This ADR should be reviewed when:

- A CMS is introduced.
- New content types are added.
- The search architecture changes.
- AI-powered knowledge features are implemented.

---

# Status

Accepted

Version

1.0