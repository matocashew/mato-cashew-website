# Mato Cashew Website

Official website of **Mato Cashew (ចន្ទីមាតុភូមិ)**, a premium Cambodian cashew producer and exporter supplying local and international markets.

The project is built with **Astro** using a **Service-Oriented** and **CMS-Ready Architecture**, allowing future migration from static content to a headless CMS or backend API with minimal code changes.

---

# Business Information

**Company**

Mato Cashew (ចន្ទីមាតុភូមិ)

**Industry**

Premium Cambodian Cashew Processing & Export

**Address**

Village: Chanloung  
Commune: Damril  
District: Ou Reang Ov  
Province: Tbong Khmum  
Country: Cambodia

**Website**

https://matocashew.com

**Languages**

- 🇺🇸 English
- 🇰🇭 Khmer

---

# Project Overview

The website is designed to promote Mato Cashew products and services while providing educational resources about Cambodian cashews.

Current public modules include:

- Home
- About
- Products
- Resources
- Gallery
- Wholesale
- Contact

The architecture is designed to support future migration to a complete CMS and backend platform.

---

# Features

## Public Website

- Responsive Design
- SEO Optimized
- JSON-LD Structured Data
- Open Graph
- Twitter Cards
- XML Sitemap
- Robots.txt
- Canonical URLs
- Hreflang Support
- Breadcrumb Schema
- Product Schema

---

## Products

- Product Listing
- Dynamic Product Pages
- Product Specifications
- Product Applications
- Related Products
- Wholesale Information

---

## Resources

- Educational Articles
- SEO-Friendly URLs
- Content Collections

---

## Gallery

- Production
- Farmers
- Factory
- Packaging
- Export

---

## Wholesale

- OEM
- Private Label
- Export Information
- International Buyers

---

## Contact

- Contact Form
- Cloudflare Turnstile
- Email Integration
- Google Analytics 4

---

# Technology Stack

## Frontend

- Astro
- TypeScript
- CSS

## Content

- Astro Content Collections

## SEO

- JSON-LD
- Sitemap
- Canonical URLs
- Open Graph
- Twitter Cards
- Hreflang

## Deployment

- Cloudflare Pages

## Analytics

- Google Analytics 4

---

# Current Project Status

| Module | Status |
|---------|--------|
| Home | ✅ Complete |
| About | ✅ Complete |
| Products | ✅ Complete |
| Resources | ✅ Complete |
| Gallery | ✅ Complete |
| Wholesale | ✅ Complete |
| Contact | ✅ Complete |
| SEO | ✅ Complete |
| Documentation | ✅ Complete |
| Service Layer | ✅ Complete |
| CMS Ready | 🚧 In Progress |
| Backend API | ⏳ Planned |
| Admin Dashboard | ⏳ Planned |

---

# Project Structure

```
src/

components/
config/
content/
data/
i18n/
layouts/
pages/
services/
styles/
types/
utils/

public/

docs/

project-info/

scripts/
```

---

# Architecture

The project follows a layered architecture.

```
Pages

↓

Layouts

↓

Components

↓

Services

↓

Content Collections

↓

Configuration
```

Future architecture

```
Pages

↓

Components

↓

Services

↓

REST API

↓

Database
```

No UI components should require modification during future backend migration.

---

# Configuration

Business information is centralized inside

```
src/config/
```

Configuration includes

- Company Information
- Contact Information
- Address
- Website Settings
- Analytics
- Social Media
- SEO Defaults

No business information should be hard-coded inside components.

---

# Internationalization

Supported languages

- English
- Khmer

Translation files

```
src/i18n/
```

Business configuration remains inside

```
src/config/
```

This separation keeps content maintainable.

---

# Developer Toolkit

Developer utilities are available through npm scripts.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Type Checking

```bash
npm run check
```

## Optimize Images

```bash
npm run optimize-images
```

## Generate Project Tree

```bash
npm run project:tree
```

## Generate Project Map

```bash
npm run project:map
```

## Complete Audit

```bash
npm run audit
```

## Content Audit

```bash
npm run audit:content
```

## SEO Audit

```bash
npm run audit:seo
```

## Image Audit

```bash
npm run audit:images
```

## Unused Files Audit

```bash
npm run audit:unused
```

---

# Documentation

All documentation is located inside

```
docs/
```

| Document | Purpose |
|----------|---------|
| README.md | Project overview |
| architecture.md | System architecture |
| folder-structure.md | Folder organization |
| coding-standards.md | Coding conventions |
| api-design.md | API design |
| deployment.md | Deployment guide |
| product-model.md | Product model |
| business-rules.md | Business rules |
| cms-roadmap.md | CMS migration |
| developer-toolkit.md | Developer tools |
| decision-log.md | Architecture decisions |
| CHANGELOG.md | Version history |

---

# Project Information

Project reports are stored in

```
project-info/
```

Includes

- Project Tree
- Project Map
- Sprint Status
- Roadmap
- Change Log
- Project Rules
- Architecture Version

---

# Development Workflow

Daily

```bash
npm run dev
```

Before Commit

```bash
npm run check

npm run build
```

Weekly

```bash
npm run audit

npm run project:tree

npm run project:map
```

Before Release

```bash
npm run check

npm run build

npm run audit

npm run audit:content

npm run audit:seo

npm run audit:images
```

---

# Coding Principles

The project follows these principles.

- Component-Based Architecture
- Service-Oriented Design
- Separation of Concerns
- Configuration-Driven Development
- CMS-Ready Structure
- Reusable Components
- SEO-First Development
- Performance-First Development
- Type Safety
- Documentation First

---

# Future Roadmap

## Phase 1

Public Website

Status

✅ Completed

---

## Phase 2

CMS Ready Architecture

- Configuration Layer
- Service Layer
- Content Collections
- Developer Toolkit

Status

🚧 In Progress

---

## Phase 3

Backend

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- Authentication
- REST API

---

## Phase 4

Admin Dashboard

- Authentication
- Dashboard
- Product Management
- Gallery Management
- Resources Management
- Contact Management
- Website Settings

---

## Phase 5

Business Expansion

- Distributor Portal
- Customer Portal
- Inventory Management
- ERP Integration
- Mobile API

---

# Version

Current Version

**1.0.0**

Architecture

- Service Layer
- Content Collections
- CMS Ready

---

# License

Copyright © 2026 Mato Cashew (ចន្ទីមាតុភូមិ).

All Rights Reserved.