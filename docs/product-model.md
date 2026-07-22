# Product Model

This document describes the business model used for products in the Mato Cashew website.

The product model is designed to support:

- Multilingual content
- SEO
- Product specifications
- Product gallery
- Future CMS integration

---

# Product Overview

A product represents a retail or wholesale cashew product offered by Mato Cashew.

Every product has:

- Unique identity
- Product information
- Product specifications
- Images
- Packaging
- SEO information
- Translations

---

# Product Structure

```
Product

├── Identity
├── Basic Information
├── Gallery
├── Packaging
├── Specifications
├── Translations
└── SEO
```

---

# Identity

Fields

```
id

slug

sku
```

Purpose

## id

Internal identifier.

Example

```
1
```

---

## slug

Public URL.

Example

```
premium-cashew-100g
```

Route

```
/products/premium-cashew-100g
```

---

## sku

Internal business code.

Example

```
MC100

MC250

MC500
```

---

# Basic Information

Fields

```
category

featured

weight

badge

rating
```

Example

```
Retail

100g

Best Seller

⭐ 5.0
```

---

# Images

Current

```
image
```

Main product image.

Future

```
gallery[]
```

Supports multiple images.

Example

```
Front

Back

Nutrition

Package

Carton
```

---

# Packaging

```
packaging[]
```

Example

```
100g

250g

500g
```

This allows multiple package sizes for one product.

---

# Specifications

```
specifications
```

Contains

```
Moisture

Broken

Shelf Life

Storage

Certification
```

Future versions may include:

- Kernel Grade
- Origin
- Processing Method
- Export Standard

---

# Translations

Products are multilingual.

```
translations

↓

en

km
```

English

```
name

shortDescription

description

seoTitle

seoDescription
```

Khmer

```
name

shortDescription

description

seoTitle

seoDescription
```

The product identity never changes.

Only the translation changes.

---

# SEO

Each language has independent SEO.

Example

English

```
Premium Cambodian Cashew 100g
```

Khmer

```
គ្រាប់ស្វាយចន្ទីកម្ពុជា ១០០ក្រាម
```

---

# Current Products

Current retail products

```
100g

250g

500g
```

Future

- Wholesale Products
- OEM Products
- Private Label Products

---

# Service Layer

Components never access product data directly.

Flow

```
products.ts

↓

product.service.ts

↓

Product Components
```

Future

```
Database

↓

REST API

↓

product.service.ts
```

No UI changes required.

---

# Design Principles

The Product model follows:

- Single Source of Truth
- Strong Typing
- CMS Ready
- SEO Ready
- Translation Ready
- Scalable Design

---

# Future Expansion

The model is designed to support:

- Inventory
- Pricing
- Stock
- Certificates
- Nutrition Facts
- Downloads
- Distributor Information
- Export Documents
- Customer Reviews

without changing the UI architecture.