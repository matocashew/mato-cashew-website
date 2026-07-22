# Architecture

This document describes the overall software architecture of the Mato Cashew website.

The project is designed using a layered architecture that emphasizes:

- Separation of Concerns
- Reusability
- Maintainability
- Performance
- SEO
- CMS Readiness

---

# High-Level Architecture

```
                    Browser
                       │
                       ▼
                 Astro Pages
                       │
                       ▼
                   Layouts
                       │
                       ▼
                  Components
                       │
                       ▼
                   Services
                       │
                       ▼
                  Static Data
                       │
                       ▼
                 Configuration
```

The presentation layer never accesses business data directly.

All business data should pass through the Service Layer.

---

# Layer Responsibilities

## 1. Pages

Location

```
src/pages/
```

Responsibilities

- Route definitions
- URL structure
- SEO metadata
- Page composition

Pages should never contain business logic.

Example

```
products/index.astro

products/[slug].astro

gallery/index.astro

contact/index.astro
```

---

## 2. Layouts

Location

```
src/layouts/
```

Responsibilities

- HTML document
- Global metadata
- Fonts
- Analytics
- Footer
- Header

Layouts are shared by multiple pages.

---

## 3. Components

Location

```
src/components/
```

Responsibilities

- UI rendering
- Reusable presentation
- Small independent blocks

Examples

```
Hero

ProductCard

GalleryCard

FAQ

ContactForm

Footer
```

Components should never know where data comes from.

---

## 4. Services

Location

```
src/services/
```

Responsibilities

- Read data
- Filter data
- Search
- Sorting
- Mapping

Examples

```
getProducts()

getFeaturedProducts()

getProductBySlug()

getResources()

getGallery()
```

This layer hides the data source from the UI.

---

## 5. Data Layer

Location

```
src/data/
```

Current

```
products.ts

gallery.ts

resources.ts
```

Currently static.

Future

```
REST API

Database

CMS
```

No component should import files from this folder directly.

---

## 6. Configuration Layer

Location

```
src/config/
```

Contains

- Website name
- Brand information
- Contact information
- Navigation
- Analytics
- Social links

Configuration is separated from content.

---

# Data Flow

Current Flow

```
products.ts

↓

product.service.ts

↓

ProductCard

↓

Products Page
```

Future Flow

```
Database

↓

REST API

↓

product.service.ts

↓

ProductCard

↓

Products Page
```

The UI remains unchanged.

---

# Internationalization

Current languages

- English
- Khmer

Translation files

```
src/i18n/
```

Business configuration

```
src/config/
```

Product translations

```
translations.en

translations.km
```

This keeps multilingual content organized and scalable.

---

# SEO Architecture

Each page contains

- Title
- Description
- Canonical
- Open Graph
- Twitter Card
- JSON-LD
- Breadcrumb
- Hreflang

Shared SEO components

```
OrganizationSchema

WebsiteSchema

WebPageSchema

BreadcrumbSchema
```

---

# Performance Architecture

Current optimizations

- Optimized images
- Lazy loading
- Responsive images
- Static generation
- CSS optimization
- Deferred third-party scripts
- Cloudflare Turnstile lazy loading

Future optimizations

- AVIF images
- Image CDN
- Edge caching
- Partial hydration
- Asset preloading

---

# Security

Current

- Cloudflare Turnstile
- Form validation
- Static website
- HTTPS

Future

- Rate limiting
- Admin authentication
- Audit logs
- Role-based permissions

---

# Future CMS Architecture

```
Admin Dashboard
        │
        ▼
 REST API
        │
        ▼
 Business Services
        │
        ▼
 PostgreSQL
        │
        ▼
 Astro Frontend
```

The frontend should never communicate directly with the database.

---

# Design Principles

The project follows these principles.

## Separation of Concerns

Each layer has a single responsibility.

---

## Reusability

Components should be reusable.

---

## Configuration Driven

Business settings belong in

```
src/config/
```

not inside components.

---

## Service Layer

Pages and components should never read data directly.

Always use services.

---

## Strong Typing

Every business model should have a TypeScript interface.

Examples

```
Product

Article

GalleryItem

NavigationItem
```

---

## CMS Ready

The project is designed so that static data can later be replaced by an API without changing the UI layer.

---

# Technology Stack

Frontend

- Astro
- TypeScript
- CSS

Deployment

- Cloudflare Pages

Analytics

- Google Analytics 4

Security

- Cloudflare Turnstile

SEO

- Schema.org
- Open Graph
- XML Sitemap
- Robots.txt

---

# Architecture Goals

The architecture is designed to achieve the following goals.

- Fast performance
- Excellent SEO
- Easy maintenance
- Scalable codebase
- Multilingual support
- CMS readiness
- Future backend integration
- Enterprise-quality project structure