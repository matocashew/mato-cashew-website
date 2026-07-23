# ADR-0002: Use Astro as the Primary Web Framework

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

The Mato Cashew platform requires a modern web framework that supports:

- Excellent SEO
- High performance
- Static Site Generation (SSG)
- Content-driven architecture
- Markdown content
- TypeScript
- Component-based development
- Internationalization
- Long-term maintainability

The website is expected to evolve from a marketing website into a knowledge platform with hundreds of content pages.

The selected framework must support this growth without unnecessary complexity.

---

# Decision

Astro is selected as the primary framework for the Mato Cashew platform.

Astro will be responsible for:

- Routing
- Page Rendering
- Content Collections
- Component Composition
- Static Site Generation
- SEO Metadata
- Structured Data
- Build Process

---

# Why Astro

## Performance First

Astro ships minimal JavaScript by default.

Pages are rendered as static HTML whenever possible.

Benefits

- Faster page loads
- Better Core Web Vitals
- Improved Lighthouse scores

---

## SEO Friendly

Astro generates static HTML.

Search engines can crawl pages efficiently.

Supports

- Meta Tags
- Open Graph
- Canonical URLs
- Structured Data
- Sitemap
- Robots.txt

---

## Excellent Content Collections

Astro Content Collections provide:

- Type-safe Markdown
- Validation
- Frontmatter schemas
- Easy organization

This is ideal for:

Products

Resources

Future Recipes

Industry News

FAQ

Downloads

---

## Component Architecture

Astro supports reusable components.

Examples

Layout

Header

Footer

ProductCard

ResourceCard

Breadcrumb

FAQ

This improves maintainability.

---

## Minimal JavaScript

Interactive JavaScript is only loaded when required.

Benefits

- Better performance
- Reduced bundle size
- Better mobile experience

---

## Static Site Generation

Most pages are generated at build time.

Benefits

- High speed
- Better security
- Lower hosting costs
- CDN friendly

---

## TypeScript Support

Astro provides first-class TypeScript support.

Benefits

- Better developer experience
- Improved code quality
- Strong typing

---

## Bilingual Support

Astro routing works well with:

English

Khmer

Future languages

The platform architecture supports language-specific routes without duplicating business logic.

---

## Flexible Rendering

Future pages may use:

Static Rendering

Server Rendering

Hybrid Rendering

depending on business needs.

---

# Alternatives Considered

## Option A

WordPress

Rejected.

Reasons

- Higher maintenance
- Plugin dependency
- Lower performance
- More security concerns

---

## Option B

Next.js

Rejected.

Reasons

- More JavaScript by default
- Greater complexity than required
- Less suitable for a content-first static platform

---

## Option C

Nuxt

Rejected.

Reasons

- Good framework
- Larger runtime than required
- Team already aligned with Astro architecture

---

## Option D

Astro

Accepted.

Reasons

- Excellent performance
- Content-first architecture
- Static-first design
- Outstanding SEO
- Modern developer experience
- Strong Markdown support

---

# Consequences

Positive

- Excellent performance
- Better SEO
- Type-safe content
- Smaller JavaScript bundles
- Easier maintenance
- Future scalability

Trade-offs

- Smaller ecosystem than React or Next.js
- Some advanced dynamic features require additional planning

These trade-offs are acceptable because the platform is primarily content-driven.

---

# Impact on Architecture

This decision affects:

Routing

Content Collections

Layouts

Components

Services

SEO Components

Build Process

Deployment

Documentation

---

# Implementation Guidelines

Use Astro Pages for routing.

Use Astro Components whenever possible.

Avoid unnecessary client-side JavaScript.

Prefer static rendering.

Hydrate components only when interaction is required.

Separate business logic into services.

Keep pages lightweight.

---

# Future Compatibility

Astro should support future additions including:

Knowledge Hub

Search

Partner Portal

Download Center

CMS Integration

API Integration

Additional Languages

Dark Mode

---

# Related Documents

01-project-vision.md

02-information-architecture.md

03-navigation-specification.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0001 Platform Vision

---

# Review

Review this ADR when:

The rendering strategy changes.

A CMS is introduced.

The platform requires significantly more dynamic functionality.

A major Astro version introduces architectural changes.

---

# Conclusion

Astro has been selected as the primary framework because it aligns with the Mato Cashew platform's long-term goals of performance, SEO, maintainability, scalability, and content-first development.

This decision establishes the technical foundation for all future platform development.