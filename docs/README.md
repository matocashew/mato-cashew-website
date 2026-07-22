# Mato Cashew Website

Official website for **Mato Cashew (ចន្ទីមាតុភូមិ)**, a Cambodian producer and supplier of premium cashew kernels for local and international markets.

This project is built with **Astro** and is designed with a **CMS-ready architecture**, allowing future migration from static content to a dynamic content management system without major code restructuring.

---

# Project Overview

Mato Cashew aims to provide a modern, fast, SEO-friendly, and multilingual website that showcases:

- Company information
- Product catalog
- Wholesale solutions
- Export capability
- Educational resources
- Media gallery
- Customer inquiries

The website currently supports:

- 🇺🇸 English
- 🇰🇭 Khmer

---

# Features

## Public Website

- Responsive Design
- SEO Optimized
- Structured Data (Schema.org)
- Open Graph & Twitter Cards
- XML Sitemap
- Robots.txt
- Canonical URLs
- Hreflang Support
- Breadcrumb Schema

---

## Products

- Product Listing
- Product Detail Pages
- Product Specifications
- Packaging Information

---

## Resources

- Educational Articles
- SEO Friendly URLs

---

## Gallery

- Production
- Factory
- Farmers
- Packaging
- Export

---

## Wholesale

- OEM
- Private Label
- Export Information

---

## Contact

- Contact Form
- Cloudflare Turnstile
- Email Integration
- Google Analytics

---

# Technology Stack

## Frontend

- Astro
- TypeScript
- CSS

## SEO

- JSON-LD
- Sitemap
- Open Graph
- Hreflang
- Canonical URLs

## Deployment

- Cloudflare Pages

## Analytics

- Google Analytics 4

---

# Project Structure

```
src/

components/
layouts/
pages/
styles/
scripts/

config/
data/
services/
types/
utils/

public/

docs/
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

Data

↓

Configuration
```

This architecture allows future migration to:

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

without changing the UI components.

---

# Configuration

Business information is centralized inside:

```
src/config/
```

Current configuration includes:

- Website Information
- Brand Information
- Contact Information
- Address
- Analytics
- Social Media

This avoids hard-coded business data throughout the project.

---

# Internationalization

The website currently supports:

- English
- Khmer

Translations are managed inside:

```
src/i18n/
```

Business information remains inside:

```
src/config/
```

This separation keeps content maintainable.

---

# Performance

Current optimization includes:

- Optimized Images
- Lazy Loading
- Responsive Images
- CSS Optimization
- SEO Optimization

Future improvements:

- AVIF Images
- Image CDN
- Edge Caching

---

# Documentation

Project documentation is located in:

```
docs/
```

Documents include:

- Architecture
- Folder Structure
- Product Model
- CMS Roadmap
- API Design
- Coding Standards
- Deployment Guide
- Changelog

---

# Future Roadmap

## Phase 1

Public Website

- Home
- About
- Products
- Gallery
- Resources
- Wholesale
- Contact

Status:

Completed

---

## Phase 2

CMS Ready Architecture

- Configuration Layer
- Data Layer
- Service Layer
- Product Model

Status:

In Progress

---

## Phase 3

Backend

- Node.js
- Express
- PostgreSQL
- Prisma
- Authentication
- REST API

---

## Phase 4

Admin Dashboard

- Login
- Dashboard
- Product Management
- Gallery Management
- Resources Management
- Contact Management
- Website Settings

---

## Phase 5

Future Expansion

- Distributor Portal
- Customer Portal
- Mobile API
- Inventory Integration
- ERP Integration

---

# Development

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# Coding Principles

This project follows several core principles.

- Component-based architecture
- Separation of concerns
- Configuration-driven design
- Service layer abstraction
- Reusable UI components
- SEO-first development
- Performance-first development

---

# License

Copyright © 2026 Mato Cashew.

All Rights Reserved.