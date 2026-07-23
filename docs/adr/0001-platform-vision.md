# ADR-0001: Platform Vision

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

The Mato Cashew project initially started as a company website to promote premium Cambodian cashew products.

As the project evolved, additional requirements emerged, including:

- Educational content
- Cashew knowledge articles
- Product catalog
- Wholesale information
- Export resources
- SEO optimization
- Bilingual support
- Future scalability

These requirements extend beyond the scope of a traditional marketing website.

A new architectural direction is required.

---

# Decision

Mato Cashew will be developed as a digital platform rather than a traditional company website.

The platform will combine:

• Brand Website

• Product Catalog

• Knowledge Hub

• Wholesale & Export Platform

The platform architecture must support continuous expansion without major structural changes.

---

# Objectives

The platform should:

- Promote premium Cambodian cashew products.

- Educate consumers and industry professionals.

- Generate qualified B2B leads.

- Support international buyers.

- Become a trusted knowledge source for Cambodian cashews.

---

# Core Platform Pillars

## 1. Brand

Purpose

Build trust.

Content

Company

Mission

Factory

Farmers

Certifications

Sustainability

---

## 2. Products

Purpose

Present products clearly.

Includes

Retail Products

Wholesale Products

OEM

Packaging

Specifications

Product Detail Pages

---

## 3. Knowledge Hub

Purpose

Educate visitors.

Includes

Cashew Knowledge

Health Benefits

Processing

Recipes

Buying Guide

Industry News

FAQ

Research

---

## 4. Wholesale Platform

Purpose

Support international buyers.

Includes

OEM

Private Label

Export Guide

MOQ

RFQ

Download Center

Certificates

---

# Platform Principles

The platform follows these principles.

Content First

Knowledge should provide value before promotion.

Trust First

Trust should be established before requesting customer inquiries.

Reusable Components

UI should be reusable across the platform.

Configuration Driven

Shared configuration should exist in one place.

SEO by Design

SEO should be part of the architecture rather than an afterthought.

Bilingual by Design

Every new feature should support English and Khmer.

Accessibility First

Every visitor should be able to use the platform.

Scalable by Default

The architecture should support future growth.

---

# Success Criteria

The platform should be capable of supporting:

500+ Articles

100+ Products

Multiple Languages

Partner Portal

Download Center

Advanced Search

Future CMS Integration

Future Mobile Application

---

# Consequences

Positive

- Clear long-term vision.
- Better scalability.
- Easier maintenance.
- Consistent architecture.
- Better SEO opportunities.
- Easier onboarding for future developers.

Trade-offs

- Higher initial planning effort.
- More documentation.
- Slightly slower early development.

These trade-offs are acceptable because they reduce long-term technical debt.

---

# Alternatives Considered

## Option A

Traditional company website.

Rejected.

Reason

Limited scalability and poor support for future knowledge and wholesale features.

---

## Option B

Blog-focused website.

Rejected.

Reason

Insufficient support for product catalog and B2B requirements.

---

## Option C

Digital Platform.

Accepted.

Reason

Supports products, educational content, SEO, wholesale, and future expansion within a single architecture.

---

# Implementation Impact

This decision affects:

Information Architecture

Navigation Structure

Content Collections

Component Design

Service Layer

SEO Strategy

Documentation

Future CMS Integration

Future Search

---

# Related Documents

01-project-vision.md

02-information-architecture.md

03-navigation-specification.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

---

# Review

This ADR should be reviewed whenever the platform vision changes significantly.

Expected review frequency:

Once per major release.

---

# Conclusion

Mato Cashew is officially defined as a scalable digital platform that combines premium Cambodian cashew products, trusted educational content, and wholesale capabilities into a unified experience.

This decision establishes the architectural direction for all future development.