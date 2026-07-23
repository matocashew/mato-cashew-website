# ADR-0008: Navigation Driven by Shared Data

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

As the Mato Cashew platform expands, navigation will become increasingly complex.

Future navigation includes:

- Desktop Navigation
- Mobile Navigation
- Mega Menu
- Footer Navigation
- Breadcrumbs
- Search Categories
- Sitemap
- Related Navigation
- Future Partner Portal

Hard-coded navigation items across multiple components create maintenance problems and inconsistent user experiences.

A centralized navigation architecture is required.

---

# Decision

The Mato Cashew platform adopts a data-driven navigation architecture.

Navigation will be defined in a single shared data source.

UI components must render navigation from this shared data.

Navigation structure must never be duplicated.

---

# Objectives

The navigation system should:

- Eliminate duplicated navigation
- Support multilingual navigation
- Simplify updates
- Improve maintainability
- Support Mega Menu
- Support future CMS integration
- Support automatic sitemap generation

---

# Navigation Source

Navigation data belongs in

src/data/navigation.ts

Navigation components should never contain hard-coded menu items.

---

# Architecture

navigation.ts

↓

Navigation Service

↓

Header

↓

Mega Menu

↓

Mobile Menu

↓

Footer

↓

Breadcrumb

↓

Sitemap

↓

Search Categories

---

# Navigation Structure

Each navigation item should include

id

label

href

children

icon (optional)

description (optional)

featured (optional)

visibility

permissions (future)

---

# Example Structure

Main Navigation

Home

About

Products

Resources

Gallery

Wholesale

Contact

Each item may contain children.

---

# Products

Children

Retail Products

Wholesale Products

OEM

Packaging

Cashew Grades

Specifications

Featured Product

---

# Resources

Children

Cashew Knowledge

Health Benefits

Processing

Buying Guide

Export Guide

Recipes

Industry News

FAQ

Featured Article

---

# Wholesale

Children

OEM

Private Label

MOQ

Export Markets

Catalogue

Request Quote

---

# Navigation Service

Navigation components should never read

navigation.ts

directly.

Instead

Pages

↓

Navigation Service

↓

Navigation Data

↓

Components

This separates business logic from presentation.

---

# Language Support

Navigation labels should come from

src/i18n/

Navigation URLs remain shared.

Example

English

Products

Khmer

ផលិតផល

The same navigation structure supports multiple languages.

---

# Breadcrumbs

Breadcrumbs should be generated from the navigation hierarchy.

Example

Home

↓

Products

↓

Wholesale

↓

OEM

No manual breadcrumb creation.

---

# Footer Navigation

Footer links should reuse navigation data whenever appropriate.

Additional footer-only links may exist.

Examples

Privacy Policy

Terms

Careers

---

# Search Integration

Future search should use navigation categories.

Examples

Products

Resources

Recipes

Downloads

FAQ

Search filters should remain synchronized with navigation.

---

# Sitemap

XML Sitemap

HTML Sitemap

Future Search Index

should all derive from the same navigation hierarchy.

---

# Visibility

Navigation items should support visibility rules.

Examples

Public

Hidden

Coming Soon

Future

Partner Only

Admin Only

---

# Feature Flags

Navigation should support feature flags.

Example

Recipes

↓

Disabled

↓

Automatically hidden

No component changes required.

---

# Icons

Navigation items may define icons.

Desktop

Optional

Mobile

Recommended

Search

Recommended

---

# Future Compatibility

The navigation architecture should support

Mega Menu

CMS

Partner Portal

Authentication

Role-based Navigation

Downloads

Knowledge Hub

Additional Languages

---

# Alternatives Considered

## Option A

Hard-coded navigation.

Rejected.

Reason

Difficult to maintain.

Creates duplicated navigation.

Poor scalability.

---

## Option B

Navigation driven by shared data.

Accepted.

Reason

Centralized.

Scalable.

Supports multilingual architecture.

Supports future CMS integration.

---

# Consequences

Positive

Single update location.

Consistent navigation.

Simpler Mega Menu.

Automatic breadcrumbs.

Automatic sitemap.

Future-ready.

Trade-offs

Additional architecture.

Navigation service required.

These trade-offs are acceptable because they significantly improve maintainability.

---

# Impact on Architecture

This decision affects

Header

Footer

Breadcrumbs

Search

Mega Menu

Sitemap

Localization

Future CMS

Future Partner Portal

---

# Implementation Guidelines

Store navigation in one shared data file.

Never duplicate navigation items.

Generate breadcrumbs automatically.

Use services to expose navigation.

Keep UI components presentation-only.

Document new navigation fields before implementation.

---

# Example Data Flow

navigation.ts

↓

Navigation Service

↓

Localized Navigation

↓

Header

↓

Mega Menu

↓

Breadcrumb

↓

Footer

↓

Sitemap

---

# Related Documents

02-information-architecture.md

03-navigation-specification.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0004 Single Source of Truth

ADR-0006 Service Layer

---

# Review

Review this ADR when

The navigation structure changes significantly.

A Headless CMS replaces local navigation.

Role-based navigation is introduced.

The Mega Menu architecture is redesigned.

---

# Conclusion

The Mato Cashew platform adopts a shared data-driven navigation architecture.

Navigation is defined once, consumed through the Service Layer, and reused across the Header, Footer, Breadcrumbs, Mega Menu, Search, and Sitemap.

This decision ensures consistency, scalability, multilingual support, and long-term maintainability while reducing duplication throughout the platform.