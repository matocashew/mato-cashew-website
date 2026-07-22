# API Design

This document defines the REST API design for the Mato Cashew digital platform.

The API serves as the communication layer between:

- Public Website
- Admin Dashboard
- Future Mobile Applications
- Third-party integrations

---

# Design Principles

The API follows RESTful principles.

Goals

- Predictable
- Versioned
- Secure
- Scalable
- Easy to consume

Base URL

```
https://api.matocashew.com/v1
```

---

# Authentication

Public endpoints

No authentication required.

Protected endpoints

Require authentication.

Authentication method

```
JWT Bearer Token
```

Example

```
Authorization:

Bearer <access_token>
```

---

# Response Format

Successful response

```json
{
  "success": true,
  "data": {}
}
```

Error response

```json
{
  "success": false,
  "message": "Validation failed"
}
```

---

# Product Endpoints

## Get all products

GET

```
/products
```

Optional query parameters

```
?category=Retail

?featured=true

?language=en
```

---

## Get one product

GET

```
/products/{slug}
```

Example

```
/products/premium-cashew-100g
```

---

## Create product

POST

```
/products
```

Protected

Admin only

---

## Update product

PUT

```
/products/{id}
```

Protected

Admin only

---

## Delete product

DELETE

```
/products/{id}
```

Protected

Admin only

---

# Gallery Endpoints

GET

```
/gallery
```

GET

```
/gallery/{id}
```

POST

```
/gallery
```

PUT

```
/gallery/{id}
```

DELETE

```
/gallery/{id}
```

---

# Resource Endpoints

GET

```
/resources
```

GET

```
/resources/{slug}
```

POST

```
/resources
```

PUT

```
/resources/{id}
```

DELETE

```
/resources/{id}
```

---

# Contact Endpoints

POST

```
/contact
```

Purpose

Submit contact inquiry.

Required fields

- Name
- Email
- Country
- Inquiry Type
- Message

Optional

- Company
- Phone
- Volume

Cloudflare Turnstile validation is required before processing.

---

# Authentication Endpoints

POST

```
/auth/login
```

POST

```
/auth/logout
```

POST

```
/auth/refresh
```

GET

```
/auth/profile
```

---

# User Management

GET

```
/users
```

POST

```
/users
```

PUT

```
/users/{id}
```

DELETE

```
/users/{id}
```

Protected

Administrator only.

---

# Upload API

POST

```
/uploads/images
```

Purpose

Upload

- Product Images
- Gallery Images
- Resource Images

---

# Future APIs

Future modules

```
Orders

Inventory

Customers

Distributors

Certificates

Downloads
```

---

# Status Codes

200

Success

201

Created

204

Deleted

400

Validation Error

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

500

Server Error

---

# Versioning

The API uses URL versioning.

Current

```
/v1
```

Future

```
/v2
```

Older versions remain supported during migration.

---

# Security

All endpoints use HTTPS.

Protected endpoints require JWT.

Input validation is required.

Rate limiting should be enabled.

Audit logging should be implemented for administrative actions.

---

# API Architecture

```
Client

↓

REST API

↓

Service Layer

↓

Database
```

Business logic should remain inside the Service Layer.

Controllers should only validate requests and return responses.

---

# Future Integrations

The API is designed to support:

- Mobile Applications
- Distributor Portal
- ERP Systems
- CRM Platforms
- Shipping Providers
- Business Intelligence