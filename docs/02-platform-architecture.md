# Platform Architecture

Version: 1.0

Status: Approved

Last Updated: 2026-07-25

---

# Purpose

This document defines the overall software architecture of the Mato Cashew Platform.

It serves as the foundation for:

- Project Structure
- Layered Architecture
- Data Flow
- Service Layer
- UI Components
- SEO
- Content Management
- Future CMS Integration

All implementation must follow this architecture.

---

# Platform Vision

Mato Cashew is not just a company website.

It is a scalable digital platform designed to become the leading Cambodian Cashew Knowledge Platform.

The platform should support:

- Product Showcase
- Knowledge Hub
- B2B Wholesale
- Export Promotion
- SEO
- Multi-language
- CMS Integration
- Future AI Search

---

# Architecture Principles

The platform follows these principles:

- Single Source of Truth
- Separation of Concerns
- Layered Architecture
- Reusable Components
- Data-Driven UI
- SEO First
- Mobile First
- Accessibility First
- Performance First
- CMS Ready

---

# High-Level Architecture

                    User
                      │
                      ▼
               Astro Pages
                      │
                      ▼
                 Layout Layer
                      │
                      ▼
             Reusable Components
                      │
                      ▼
              Service Layer
                      │
                      ▼
         Data / Config / Content
                      │
                      ▼
          Markdown / Collections
                      │
                      ▼
            Static Site Output

---

# Project Layers

## Presentation Layer

Responsible for rendering UI.

Folders

- src/pages
- src/layouts
- src/components

Responsibilities

- Display content
- User interaction
- Accessibility
- Responsive design

Presentation layer should not contain business logic.

---

## Service Layer

Responsible for business logic.

Folder

src/services

Responsibilities

- Retrieve data
- Filtering
- Sorting
- Mapping
- Future API integration

Components should consume services instead of accessing data directly.

---

## Data Layer

Responsible for shared static data.

Folder

src/data

Examples

- navigation
- company
- footer
- certifications
- packaging

No business logic should exist here.

---

## Config Layer

Responsible for platform configuration.

Folder

src/config

Examples

- site
- routes
- seo
- analytics
- languages
- features

Configuration should remain immutable during runtime.

---

## Content Layer

Responsible for markdown content.

Folder

src/content

Collections

- products
- knowledge
- articles
- recipes
- downloads

Content is managed separately from source code.

---

## Utility Layer

Folder

src/utils

Responsibilities

- Formatting
- Helpers
- Validation
- Date utilities

Utilities should never depend on UI.

---

## Types Layer

Folder

src/types

Responsibilities

- Interfaces
- Domain models
- Shared types

Examples

- Product
- NavigationItem
- ProductSEO
- ProductImage

---

# Data Flow

Content

↓

Service Layer

↓

Components

↓

Pages

↓

HTML

No component should access markdown directly.

---

# Folder Structure

src/

components/

config/

content/

data/

design/

i18n/

layouts/

pages/

services/

styles/

types/

utils/

---

# Navigation Architecture

Navigation data should exist only once.

Source

src/data/navigation.ts

Consumers

- Header
- Footer
- Breadcrumb
- Sitemap
- Search

---

# SEO Architecture

Every page should generate

- Title
- Description
- Canonical
- Open Graph
- Twitter Card
- JSON-LD
- Breadcrumb Schema

SEO should be centralized.

---

# Content Architecture

Products

↓

Knowledge

↓

Articles

↓

Recipes

↓

Downloads

↓

Gallery

Each content type has its own collection.

---

# Component Architecture

Components must be:

Reusable

Composable

Independent

Stateless whenever possible

Example

Button

↓

Card

↓

Product Card

↓

Product Grid

↓

Product Page

---

# Styling Architecture

Global styles

↓

Design Tokens

↓

Component Styles

↓

Page Styles

Avoid inline styles whenever possible.

---

# Configuration Architecture

All platform configuration should come from:

src/config

Never hardcode:

- Site name
- URLs
- Analytics
- SEO defaults
- Languages

---

# Business Rules

Business logic belongs to

src/services

Never inside

- Components
- Pages
- Layouts

---

# Performance Strategy

Image optimization

Lazy loading

Code splitting

Static generation

Minimal JavaScript

---

# Security

Escape user-generated content.

Validate inputs.

Use HTTPS.

Protect environment variables.

Do not expose secrets.

---

# Scalability

Future support

CMS

REST API

GraphQL

Search Engine

AI Search

Mobile App

Distributor Portal

Farmer Portal

---

# Technology Stack

Framework

Astro

Language

TypeScript

Styling

CSS

Content

Markdown Collections

Hosting

Cloudflare Pages

Analytics

Google Analytics

Version Control

Git

---

# Architecture Decision Records

See

docs/adr/

All major architectural decisions must be documented before implementation.

---

# Related Documents

01 Project Vision

03 Information Architecture

04 Navigation Specification

05 Design System

08 Coding Standards

09 Content Strategy

11 API Design

12 Product Model

---

# Success Criteria

The platform must:

Be maintainable

Be scalable

Be SEO friendly

Support multilingual content

Support CMS integration

Support future API integration

Avoid duplicated business logic

Maintain a single source of truth

---

# Status

Approved

Owner

Mato Cashew Platform

Version

1.0