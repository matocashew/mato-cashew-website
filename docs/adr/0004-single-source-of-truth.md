# ADR-0004: Single Source of Truth

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

As the Mato Cashew platform grows, many pieces of information are reused across multiple pages and components.

Examples include:

- Site information
- Navigation
- Categories
- Footer links
- Social links
- SEO settings
- Feature flags
- Languages
- Routes

If these values are duplicated throughout the project, maintenance becomes difficult and errors become more likely.

A centralized approach is required.

---

# Decision

The platform will adopt the Single Source of Truth (SSOT) principle.

Every shared configuration or reusable data structure must have one authoritative location.

Components and pages must consume data from that location instead of duplicating values.

---

# Objectives

The architecture should:

- Reduce duplicated information.
- Improve maintainability.
- Simplify updates.
- Prevent inconsistencies.
- Support future scalability.

---

# Configuration Layer

Platform configuration belongs in

src/config/

Examples

site.ts

routes.ts

seo.ts

features.ts

languages.ts

theme.ts

Configuration changes rarely.

---

# Data Layer

Reusable structured data belongs in

src/data/

Examples

navigation.ts

footer.ts

categories.ts

social.ts

countries.ts

downloads.ts

Data changes more frequently than configuration.

---

# Site Information

Site information must exist only once.

Example

Site Name

Domain

Description

Email

Phone

Address

Logo

Default Language

SEO defaults

Every component should read from site.ts.

---

# Navigation

Navigation items must be defined only once.

Example

Home

About

Products

Resources

Gallery

Wholesale

Contact

Header

Footer

Breadcrumbs

Search

Sitemap

must all reference the same navigation data.

---

# Categories

Categories should never be duplicated.

Example

Cashew Knowledge

Health Benefits

Recipes

Processing

Export Guide

Industry News

FAQ

Category pages, filters, breadcrumbs, and search should use the same category definitions.

---

# Routes

All application routes should come from

routes.ts

Avoid hard-coded URLs.

Bad

href="/products"

Good

href=routes.products

---

# Feature Flags

Platform features should be configurable.

Example

Search

Knowledge Hub

Recipes

Wholesale

Dark Mode

Example

features.search

features.recipes

---

# SEO

Default SEO values belong in

seo.ts

Examples

Site Name

Default Title

Default Description

Default Image

Twitter Card

Open Graph defaults

---

# Languages

Supported languages belong in

languages.ts

Example

English

Khmer

Future languages

Japanese

Chinese

French

---

# Social Links

Social media should exist in one location.

Examples

Facebook

LinkedIn

YouTube

Telegram

TikTok

Footer

Contact

Schema

should all reference the same data.

---

# Design Tokens

Visual values also follow SSOT.

Location

src/design/tokens/

Examples

Colors

Spacing

Typography

Radius

Shadow

Motion

Breakpoints

No hard-coded design values.

---

# Component Rules

Components should receive shared data via

Props

Services

Configuration

Never duplicate shared values inside components.

---

# Service Layer

Services should read from

Configuration

↓

Data

↓

Content

Services should not duplicate configuration.

---

# Benefits

Single update location.

Fewer bugs.

Consistent UI.

Consistent navigation.

Consistent SEO.

Simpler maintenance.

Better scalability.

---

# Examples

Good

navigation.ts

↓

Header

↓

Footer

↓

Breadcrumb

↓

Sitemap

↓

Search

Bad

Header contains one menu.

Footer contains another.

Breadcrumb uses a third definition.

---

# Alternatives Considered

## Option A

Hard-code values throughout the project.

Rejected.

Reason

Creates duplication and technical debt.

---

## Option B

Use Single Source of Truth.

Accepted.

Reason

Improves maintainability, scalability, and consistency.

---

# Consequences

Positive

Less duplication.

Cleaner architecture.

Simpler updates.

Better developer experience.

Trade-offs

Requires additional planning.

Requires configuration files.

These trade-offs are acceptable because they significantly reduce long-term maintenance costs.

---

# Impact on Architecture

This decision affects

Configuration

Navigation

Footer

SEO

Services

Design Tokens

UI Components

Routing

Localization

Future CMS Integration

---

# Implementation Guidelines

Store configuration separately from reusable data.

Never duplicate shared values.

Prefer configuration-driven components.

Use services to access shared data.

Document every new shared configuration.

---

# Related Documents

01-project-vision.md

02-information-architecture.md

03-navigation-specification.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0001 Platform Vision

ADR-0002 Use Astro

ADR-0003 Bilingual Content Architecture

---

# Review

Review this ADR when

Configuration architecture changes.

A CMS replaces local configuration.

Routing changes significantly.

Platform expansion introduces new shared configuration.

---

# Conclusion

The Mato Cashew platform adopts the Single Source of Truth principle to ensure that all shared configuration and reusable data exist in exactly one authoritative location.

This decision minimizes duplication, reduces maintenance effort, improves consistency, and provides a strong architectural foundation for future growth.