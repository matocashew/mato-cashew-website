# Coding Standards

This document defines the coding conventions used throughout the Mato Cashew project.

The goal is to ensure consistency, maintainability, readability, and scalability across the entire codebase.

---

# General Principles

Every line of code should follow these principles.

- Readable
- Predictable
- Reusable
- Maintainable
- Strongly Typed
- Performance Conscious

---

# Project Philosophy

The project follows

- Component First
- Service Layer
- Configuration Driven
- SEO First
- Performance First
- CMS Ready

---

# Folder Naming

Folders use

```
kebab-case
```

Examples

```
product-card/

contact-form/

featured-products/
```

---

# File Naming

Astro Components

```
PascalCase
```

Examples

```
Header.astro

Footer.astro

ProductCard.astro
```

---

TypeScript

```
camelCase
```

Examples

```
product.service.ts

gallery.service.ts

navigation.ts
```

---

CSS

```
kebab-case
```

Examples

```
header.css

footer.css

products-page.css
```

---

# Variable Naming

Variables use

```
camelCase
```

Example

```ts
const featuredProducts = [];
```

---

Constants

```
UPPER_CASE
```

Example

```ts
const MAX_PRODUCTS = 12;
```

Global configuration

```ts
SITE

NAVIGATION
```

---

# TypeScript

Always use interfaces for business models.

Good

```ts
interface Product {

}
```

Avoid

```ts
any
```

unless absolutely necessary.

---

# Components

Each component should have one responsibility.

Good

```
ProductCard
```

Not

```
ProductCardAndGalleryAndFAQ
```

Components should never contain business logic.

Business logic belongs inside

```
services/
```

---

# Services

Services are responsible for

- Reading data
- Filtering
- Searching
- Sorting
- Mapping

Services should never render UI.

---

# Configuration

Business configuration belongs inside

```
src/config/
```

Examples

```
SITE

NAVIGATION
```

Never hard-code

- Email
- Phone
- Address
- Website URL
- Analytics ID

inside components.

---

# Data

Business data belongs inside

```
src/data/
```

Components should never import

```
products.ts
```

directly.

Always use

```
product.service.ts
```

---

# CSS

Use CSS Variables whenever possible.

Example

```css
color: var(--color-primary);
```

Avoid magic numbers.

Use spacing variables.

```css
padding: var(--space-lg);
```

---

# Responsive Design

Follow

```
Desktop First
```

(Current project standard)

Breakpoints

```
1200px

992px

768px

576px
```

---

# Performance

Prefer

- Lazy Loading
- Optimized Images
- CSS Variables
- Static Generation

Avoid

- Large JavaScript bundles
- Inline styles
- Duplicate CSS

---

# SEO

Every page should include

- Title
- Description
- Canonical
- Open Graph
- Twitter Card
- Structured Data

---

# Accessibility

Every image

must contain

```
alt
```

Buttons

must contain

```
aria-label
```

where necessary.

Forms

must use

```
label
```

elements.

---

# Documentation

Every major module should include documentation.

Current documentation

```
README

architecture

folder-structure

product-model
```

Future documentation

```
api-design

deployment

cms-roadmap
```

---

# Git

Recommended branch naming

```
feature/

bugfix/

hotfix/

release/
```

Examples

```
feature/product-service

feature/admin-dashboard

bugfix/contact-form
```

Commit messages

```
feat:

fix:

docs:

refactor:

style:

perf:
```

Example

```
feat: add product service layer

docs: update architecture

fix: responsive product cards
```

---

# Future Backend

The same coding standards should be followed for

- REST API
- Admin Dashboard
- Database Layer

to ensure consistency across the entire platform.

---

# Summary

The Mato Cashew project is designed to be:

- Clean
- Scalable
- Maintainable
- SEO Friendly
- CMS Ready
- Enterprise Ready