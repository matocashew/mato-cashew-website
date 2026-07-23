# Development Workflow

This document defines the development workflow for the Mato Cashew website.

---

# Core Principles

The project follows these principles:

- Build small, reusable components.
- Use a Service Layer for all content access.
- Never duplicate business logic.
- Keep pages lightweight.
- Keep components reusable.
- Prefer composition over duplication.

---

# Development Process

Every new feature follows this workflow.

```
Design
    │
    ▼
Architecture Review
    │
    ▼
Implementation
    │
    ▼
Build Verification
    │
    ▼
Code Review
```

Do not skip architecture review for new modules.

---

# Coding Workflow

For every implementation:

1. Modify one file.
2. Verify the build.
3. Continue to the next file.

This minimizes debugging complexity.

---

# Service Layer

Pages must never call Astro Content Collections directly.

Correct:

```
Page

↓

Service

↓

Content Collection
```

Incorrect:

```
Page

↓

getCollection()
```

---

# Content Standard

Every content module should include:

- slug
- title
- description
- publishDate
- updatedDate
- image

Module-specific fields are allowed.

---

# SEO Standard

Every module should include:

- Canonical URL
- Open Graph
- JSON-LD Schema
- Breadcrumbs
- Hreflang (when multilingual)

---

# Reusability

Before creating a new component:

- Check if an existing component can be reused.
- Check if a shared utility already exists.
- Avoid duplicate layouts.

---

# Future Modules

The following modules should follow this workflow:

- Gallery
- News
- FAQ
- Team
- Testimonials
- Distributor
- Customer Portal

---

# Goal

Maintain a clean, scalable, and CMS-ready architecture while minimizing future refactoring.