# Mato Cashew Platform
## Platform Architecture

Version: 1.0

Status: Approved

Last Updated: July 2026

---

# Purpose

This document defines the technical architecture of the Mato Cashew platform.

The objective is to create a scalable, maintainable, and reusable architecture that supports future growth without requiring major structural changes.

---

# Architecture Principles

The platform follows these principles.

1. Single Source of Truth

Configuration and shared data should exist in one place.

2. Separation of Concerns

Each layer has one responsibility.

3. Reusability

Components should be reusable.

4. Content First

Content drives the platform.

5. Service Oriented

Business logic belongs inside services.

6. Configuration Driven

Site behavior should be configurable.

7. Bilingual by Design

All future features should support multiple languages.

---

# Layered Architecture

                 Pages

                    │

        Feature Components

                    │

             UI Components

                    │

             Service Layer

                    │

      Configuration & Data

                    │

                Content

---

# Layer Responsibilities

## Content Layer

Responsible for content only.

Location

src/content/

Contains

Products

Resources

Gallery

Future

Recipes

News

FAQ

---

## Configuration Layer

Responsible for platform configuration.

Location

src/config/

Contains

site.ts

routes.ts

seo.ts

features.ts

languages.ts

theme.ts

---

## Data Layer

Responsible for shared structured data.

Location

src/data/

Contains

navigation.ts

footer.ts

categories.ts

social.ts

countries.ts

downloads.ts

---

## Service Layer

Responsible for business logic.

Location

src/services/

Examples

product.service.ts

resource.service.ts

navigation.service.ts

seo.service.ts

---

## UI Layer

Reusable components.

Location

src/components/ui/

Examples

Button

Card

Badge

Container

Section

Accordion

Modal

Drawer

Breadcrumb

Pagination

---

## Feature Layer

Business components.

Examples

ProductCard

ResourceCard

GalleryCard

WholesaleForm

ProductSpecifications

RelatedProducts

---

## Page Layer

Astro pages.

Responsibilities

Load data

Call services

Render components

Avoid business logic.

---

# Request Flow

Browser

↓

Astro Page

↓

Service

↓

Configuration

↓

Content

↓

Response

---

# Folder Structure

src/

config/

data/

content/

services/

design/

components/

layouts/

pages/

styles/

utils/

---

# Data Flow

Configuration

↓

Service

↓

Component

↓

Page

---

# Shared Configuration

Everything that changes rarely belongs in config.

Examples

Site Name

SEO

Languages

Feature Flags

Theme

Routes

---

# Shared Data

Everything reused by multiple pages belongs in data.

Examples

Navigation

Footer Links

Categories

Social Links

Countries

Downloads

---

# Design Tokens

Reusable design values belong in

src/design/tokens/

Examples

colors.css

spacing.css

typography.css

radius.css

shadow.css

motion.css

breakpoints.css

---

# Component Hierarchy

UI Components

↓

Feature Components

↓

Pages

Feature components should never duplicate UI logic.

---

# Translation Flow

Language

↓

Translation Dictionary

↓

Component

↓

Rendered Page

---

# SEO Flow

Configuration

↓

SEO Service

↓

Schema

↓

Meta Tags

↓

Rendered Page

---

# Future CMS Support

The architecture should support replacing Markdown with a CMS without changing UI components.

---

# Future Search

Search should index

Products

Resources

Recipes

News

FAQ

Downloads

---

# Future API Layer

The architecture should support REST APIs or external services without changing page components.

---

# Scalability Goals

Support

500+ Articles

100+ Products

Multiple Languages

Partner Portal

Download Center

Search

Future CMS

---

# Security Principles

Never expose secrets in frontend code.

Validate external data.

Avoid duplicated configuration.

---

# Performance Principles

Static first.

Lazy loading.

Optimized images.

Minimal JavaScript.

Reusable components.

---

# Conclusion

The Mato Cashew platform architecture is designed to support long-term growth while remaining simple, maintainable, and developer friendly.