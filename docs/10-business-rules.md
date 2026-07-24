# Business Rules

This document defines the core business rules used by the Mato Cashew digital platform.

Business rules describe **how the business operates**, not how the software is implemented.

These rules serve as a reference for website development, future CMS development, API design, and business operations.

---

# Company Information

Company Name (English)

Mato Cashew

Company Name (Khmer)

ចន្ទីមាតុភូមិ

Location

Chanloang Village,
Damril Commune,
Ou Reang Ov District,
Tbong Khmum Province,
Cambodia

Primary Business

Processing and supplying premium Cambodian cashew kernels.

---

# Product Categories

Products are divided into four categories.

## Retail

Consumer packaged products.

Examples

- 100g
- 250g
- 500g

---

## Wholesale

Bulk products for distributors.

Examples

- 5kg
- 10kg
- 25lb

---

## OEM

Products manufactured for other brands.

---

## Private Label

Products packed under customer branding.

---

# SKU Rules

Every product must have a unique SKU.

Format

```
MC + Package Size
```

Examples

```
MC100

MC250

MC500
```

Future wholesale examples

```
MC5KG

MC10KG

MC25LB
```

SKU values must never be duplicated.

---

# Product Naming Rules

Product names must be consistent across the platform.

English

```
Premium Cambodian Cashew 100g
```

Khmer

```
គ្រាប់ស្វាយចន្ទីកម្ពុជា ១០០ក្រាម
```

Do not use multiple naming variations for the same product.

---

# Product Status

Every product has one status.

Available statuses

```
Draft

Published

Archived
```

Only Published products appear on the public website.

---

# Product Images

Every product must have

- One primary image

Optional

- Front
- Back
- Side
- Nutrition Label
- Carton
- Export Packaging

Images should maintain consistent dimensions and quality.

---

# Product Specifications

Every published product should include:

- Weight
- Shelf Life
- Storage Instructions
- Moisture Level
- Certification (if available)

Additional specifications may be added without changing the data model.

---

# Product Packaging

Retail products

- 100g
- 250g
- 500g

Wholesale products

- 5kg
- 10kg
- 25lb

Future package sizes may be added without changing existing products.

---

# Translation Rules

Every published product must provide:

English

- Name
- Short Description
- Description
- SEO Title
- SEO Description

Khmer

- Name
- Short Description
- Description
- SEO Title
- SEO Description

Translations should preserve the same business meaning.

---

# SEO Rules

Every product page must include:

- Unique URL
- SEO Title
- SEO Description
- Open Graph Image
- Structured Data

Duplicate SEO content should be avoided.

---

# Gallery Rules

Gallery images should represent real Mato Cashew activities.

Examples

- Cashew Orchard
- Farmers
- Processing
- Packaging
- Export
- Factory

Avoid using unrelated stock images where possible.

---

# Resources

Educational articles should focus on:

- Cambodian Cashews
- Product Quality
- Processing
- Export
- Nutrition
- Sustainability

Content should provide value rather than purely promotional material.

---

# Wholesale Inquiries

Required information

- Name
- Company
- Country
- Email
- Inquiry Type
- Message

Optional

- Phone
- Expected Volume

Future versions may include company registration details.

---

# Contact Rules

All inquiries must be protected by Cloudflare Turnstile.

Spam submissions should never be stored as valid inquiries.

---

# Certification

Certification information should only be displayed when officially obtained.

Do not display certifications that have not yet been approved.

---

# Website Languages

Supported languages

- English
- Khmer

Future languages

- Chinese
- Japanese

The architecture should allow additional languages without major changes.

---

# Business Principles

The Mato Cashew digital platform follows these principles:

- Product information must be accurate.
- Images should represent actual products whenever possible.
- Product descriptions should be clear and truthful.
- SEO should support discoverability without misleading users.
- Multilingual content should remain consistent across languages.
- Business information must be managed from a central configuration.
- Product data should have a single source of truth.

---

# Future Expansion

The business model is designed to support:

- Distributor Management
- Customer Accounts
- Product Inventory
- Export Documentation
- Certifications
- Order Management
- ERP Integration
- Mobile Applications

These capabilities can be added without redesigning the existing business model.