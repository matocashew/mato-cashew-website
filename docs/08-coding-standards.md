# Mato Cashew Website
## Coding Standards

Version: 1.0

Status: Approved

Last Updated: July 2026

---

# Purpose

This document defines the coding standards for the Mato Cashew website.

The goal is to ensure the project remains:

- Maintainable
- Scalable
- Consistent
- Readable
- SEO Friendly
- Performance Optimized

Every contributor should follow these standards before submitting code.

---

# General Principles

1. Keep components small and reusable.

2. Prefer readability over clever code.

3. Every page should provide value.

4. Documentation comes before implementation.

5. Code should be easy to maintain.

6. Build should always succeed before commit.

---

# Technology Stack

Frontend

- Astro
- TypeScript
- CSS

Content

- Markdown
- Astro Content Collections

Version Control

- Git
- GitHub

---

# Folder Structure

The project should follow this structure.

src/

components/

layouts/

pages/

services/

content/

styles/

data/

utils/

i18n/

public/

docs/

---

# Responsibilities

components/

Reusable UI Components

Example

ProductCard

ResourceCard

MegaMenu

---

layouts/

Shared Layouts

Example

Layout

PageLayout

---

pages/

Application Routes

Pages should contain minimal business logic.

---

services/

Business Logic

Example

product.service.ts

resource.service.ts

---

content/

Markdown Content

Products

Resources

---

styles/

Component Styles

Global Styles

---

data/

Static Data

Navigation

Categories

Settings

---

utils/

Reusable Helper Functions

---

i18n/

Translations

Language Utilities

---

# Component Standards

One Component

=

One Responsibility

Good

ProductCard

ProductGrid

ProductFilters

ProductSpecifications

Bad

ProductEverything.astro

---

Maximum Responsibility

A component should do one thing well.

If a component exceeds approximately 250–300 lines, consider splitting it into smaller components.

---

# File Naming

Components

PascalCase

Example

ProductCard.astro

ResourceCard.astro

MegaMenu.astro

---

Services

camelCase

Example

product.service.ts

resource.service.ts

---

Markdown

kebab-case

Example

what-is-cashew.md

cashew-health-benefits.md

---

Folders

kebab-case

Example

cashew-knowledge

health-benefits

---

# CSS Standards

## BEM Naming Convention

Use BEM.

Example

.product-card

.product-card__image

.product-card__content

.product-card__footer

.product-card--featured

---

Avoid

.product-image

.product-content

.product-title

These generic names caused CSS collisions in previous versions.

---

One Component

=

One CSS File

Example

ProductCard

↓

product-card.css

Do not place unrelated component styles inside one file.

---

Avoid Duplicate Selectors

Never do this.

.product-card {}

...

.product-card {}

Merge selectors instead.

---

Use CSS Variables

Good

var(--primary)

var(--spacing-lg)

var(--radius-xl)

Bad

#1A8F45

16px

32px

Hard-coded values should be minimized.

---

No Global Component Styles

Avoid

img {}

button {}

a {}

Instead

.product-card img {}

.resource-card a {}

---

# Astro Standards

Pages

↓

Services

↓

Components

Pages should only

- Load data
- Pass props
- Render components

Business logic belongs inside services.

---

# TypeScript Standards

Avoid

any

Prefer

interface

type

Example

interface ProductCardProps {

title: string

image: string

weight: string

}

---

Use Explicit Types

Every component should define its Props interface.

---

# Content Standards

Every Markdown file should follow the same schema.

Required

title

slug

description

category

author

publishDate

draft

Optional

subcategory

updatedDate

featured

tags

readingTime

seo

---

Example

title:

slug:

description:

category:

subcategory:

author:

publishDate:

updatedDate:

featured:

draft:

tags:

---

# SEO Standards

Every page should contain

Title

Description

Canonical URL

Open Graph

Schema.org

Breadcrumbs

Language Metadata

---

Product Pages

Must include

Product Schema

Related Products

Canonical

---

Resource Pages

Must include

Article Schema

Related Resources

Reading Time

Updated Date

---

Accessibility Standards

Every image

↓

Must have alt text.

Every button

↓

Must have an accessible label.

Navigation

↓

Keyboard Accessible

Focus Visible

Semantic HTML

Use

header

nav

main

section

article

footer

---

Performance Standards

Images

Lazy Load

Responsive

Optimized

---

JavaScript

Load only when necessary.

Prefer Astro islands over unnecessary hydration.

---

CSS

Avoid unused CSS.

Avoid duplicate rules.

---

Fonts

Limit font families.

Limit font weights.

---

Development Workflow

Every feature should follow.

Plan

↓

Document

↓

Design

↓

Develop

↓

Test

↓

Review

↓

Build

↓

Commit

↓

Release

---

Git Commit Convention

Use Conventional Commits.

Examples

feat:

fix:

docs:

refactor:

style:

test:

chore:

Examples

feat: add mega menu navigation

fix: resolve product image css collision

docs: update coding standards

---

Testing Checklist

Before every commit

Run

npm run build

Must succeed.

Verify

Desktop

Tablet

Mobile

404

SEO Metadata

Images

Language Switch

Console Errors

Broken Links

Accessibility

---

Documentation Standards

Every significant feature should include

Documentation

Architecture Notes

Roadmap Update

Changelog Update

---

Definition of Done

A feature is complete only if

✓ Build succeeds

✓ Responsive

✓ SEO implemented

✓ Accessibility checked

✓ Documentation updated

✓ Changelog updated

✓ No console errors

✓ Reviewed

---

Content Quality Standard

Every article should answer

Who is this article for?

What problem does it solve?

What should the reader do next?

Every article should include

Related Articles

Related Products

Call to Action

---

Project Principles

Content before promotion.

Educate before selling.

Build trust before asking for inquiries.

Quality over quantity.

Every page must provide value.

---

Future-Proofing

All future development should support

English

Khmer

SEO

Scalability

Accessibility

Component Reusability

Documentation

---

Lessons Learned

Previous issues have shown that

Generic CSS class names can create collisions.

Every component should own its styles.

Documentation should be written before implementation.

Architecture decisions should be recorded.

---

Conclusion

These standards exist to ensure that the Mato Cashew website remains clean, scalable, and maintainable as it grows into Cambodia's leading digital platform for premium cashews, knowledge sharing, and international trade.