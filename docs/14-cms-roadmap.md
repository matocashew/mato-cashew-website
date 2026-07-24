# CMS Roadmap

This document outlines the long-term roadmap for evolving the Mato Cashew website into a complete digital business platform.

The roadmap is divided into multiple phases to ensure steady, maintainable growth.

---

# Vision

The long-term goal is to transform the current static website into a modern content management platform that supports:

- Product Management
- Content Management
- Media Management
- Wholesale Management
- Customer Inquiries
- Business Analytics

The existing frontend architecture has been designed to support this transition without major restructuring.

---

# Phase 1 — Public Website

Status

Completed

Features

- Home
- About
- Products
- Product Detail
- Gallery
- Resources
- Wholesale
- Contact

Technical Features

- Responsive Design
- SEO
- Sitemap
- Structured Data
- Google Analytics
- Cloudflare Turnstile

---

# Phase 2 — CMS Ready Architecture

Status

Completed

Objectives

- Configuration Layer
- Data Layer
- Service Layer
- Product Model
- Documentation

Completed Modules

- Product Model
- Product Service
- Configuration
- Documentation

Purpose

Prepare the frontend for future backend integration.

---

# Phase 3 — Backend API

Status

Planned

Technology

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

Core Modules

- Authentication
- Products
- Gallery
- Resources
- Contact
- Users

Example API

GET

```
/api/products
```

GET

```
/api/products/:slug
```

POST

```
/api/contact
```

---

# Phase 4 — Admin Dashboard

Status

Planned

Modules

- Dashboard
- Products
- Gallery
- Resources
- Contact
- SEO
- Website Settings
- User Management

The Admin Dashboard will consume the same REST API used by the public website.

---

# Phase 5 — Business Platform

Status

Future

Possible Features

- Distributor Portal
- Customer Portal
- Product Inventory
- Orders
- Export Documentation
- Download Center

---

# Phase 6 — Integrations

Status

Future

Potential Integrations

- ERP
- CRM
- Email Marketing
- Shipping Providers
- Payment Gateway
- Warehouse Systems

---

# Data Evolution

Current

```
Static Data

↓

Services

↓

Components
```

Future

```
Database

↓

REST API

↓

Services

↓

Components
```

The UI should remain unchanged.

---

# Product Roadmap

Current

- 100g
- 250g
- 500g

Future

- Wholesale
- OEM
- Private Label
- Seasonal Products

---

# Content Roadmap

Current

- Resources
- Gallery

Future

- Blog
- News
- Events
- Certifications
- Downloads

---

# Security Roadmap

Current

- HTTPS
- Cloudflare Turnstile

Future

- JWT Authentication
- Role-Based Access Control
- Audit Logs
- API Rate Limiting

---

# Performance Roadmap

Current

- Static Site Generation
- Image Optimization
- Responsive Design

Future

- AVIF Images
- CDN Optimization
- Edge Caching
- Incremental Static Regeneration (if applicable)

---

# Success Criteria

The CMS project will be considered successful when:

- Business users can manage content without editing code.
- Product information is maintained from a single source.
- The frontend requires minimal changes when backend services evolve.
- Documentation remains synchronized with implementation.