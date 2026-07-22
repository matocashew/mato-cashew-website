# Deployment Guide

This document describes how the Mato Cashew website is deployed, maintained, and updated.

The goal is to ensure a consistent deployment process across development, staging, and production environments.

---

# Deployment Overview

Current hosting platform

- Cloudflare Pages

Source Control

- GitHub

Framework

- Astro

---

# Environment Flow

```
Developer

↓

Git Commit

↓

GitHub Repository

↓

Cloudflare Pages

↓

Production
```

Every deployment should originate from Git.

Direct changes in production are not allowed.

---

# Local Development

Requirements

- Node.js 22+
- npm

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Preview production build

```bash
npm run build
npm run preview
```

---

# Build Process

Production build

```bash
npm run build
```

Generated output

```
dist/
```

The `dist/` folder is generated automatically and should not be edited manually.

---

# Image Optimization

Images should be optimized before deployment.

Current tools

- Sharp
- optimize-images.js

Recommended formats

- WebP
- AVIF (future)

---

# Environment Variables

Sensitive information should never be committed to the repository.

Examples

```
RESEND_API_KEY

TURNSTILE_SECRET

GA_MEASUREMENT_ID
```

Use Cloudflare Pages environment variables for production.

---

# Branch Strategy

Recommended branches

```
main

develop

feature/*
```

Examples

```
feature/product-service

feature/documentation

bugfix/contact-form
```

Production deployments should only originate from the `main` branch.

---

# Deployment Checklist

Before deployment

- Build succeeds
- No TypeScript errors
- Lighthouse check
- Broken link check
- Responsive testing
- Contact form test
- SEO validation
- Sitemap generated
- robots.txt verified

---

# Performance Checklist

Verify

- Images optimized
- CSS minimized
- JavaScript minimized
- Lazy loading active
- No console errors

---

# SEO Checklist

Verify

- Canonical URLs
- Open Graph
- Twitter Cards
- JSON-LD
- Hreflang
- Sitemap
- Robots.txt

---

# Security Checklist

Verify

- HTTPS enabled
- Turnstile working
- Environment variables configured
- No secrets in source code

---

# Rollback Strategy

If deployment fails

1. Revert the last commit.
2. Trigger a new deployment.
3. Verify production functionality.
4. Investigate the failed deployment before retrying.

Never edit generated production files manually.

---

# Monitoring

Production monitoring includes

- Google Analytics 4
- Cloudflare Analytics
- Error monitoring (future)

Future additions

- Uptime monitoring
- Performance monitoring
- Security monitoring

---

# Backup Strategy

Source Code

- GitHub repository

Static Assets

- Git repository
- External backup (recommended)

Future

- Database backup
- Media storage backup

---

# Release Process

Typical release flow

```
Feature Development

↓

Testing

↓

Pull Request

↓

Code Review

↓

Merge to main

↓

Cloudflare Deployment

↓

Production Verification
```

---

# Future Deployment

Future deployment architecture

```
Frontend

Cloudflare Pages

↓

Backend API

Cloudflare Workers / VPS

↓

PostgreSQL Database

↓

Object Storage
```

This architecture supports the future CMS and Admin Dashboard while keeping the frontend deployment simple and reliable.

---

# Deployment Principles

The Mato Cashew deployment process follows these principles:

- Automated builds
- Version-controlled releases
- Reproducible deployments
- Secure configuration
- Continuous improvement