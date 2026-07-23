# Gallery Module Specification

Version: 1.1

---

# Purpose

The Gallery Module showcases Mato Cashew through high-quality visual content.

The gallery is designed for:

- Brand storytelling
- Production transparency
- Export capability
- Product presentation
- Farmer activities
- Factory operations

---

# Content Structure

Each gallery item represents one album.

Example

- Factory
- Farmers
- Harvest
- Processing
- Packaging
- Export
- Exhibition

---

# Gallery Schema

Each gallery item should contain:

- title
- slug
- description
- coverImage
- gallery[]
- category
- publishDate
- updatedDate
- featured
- draft

---

# Service Layer

gallery.service.ts

Functions

- getGalleryItems()
- getGalleryItemBySlug()
- getFeaturedGalleryItems()
- getRelatedGalleryItems()

---

# Components

GalleryCard

GalleryGrid

FeaturedGallery

RelatedGallery

GalleryMeta

---

# Pages

Listing

/gallery

/km/gallery

Detail

/gallery/[...slug]

/km/gallery/[...slug]

---

# SEO

GalleryPageSchema

Open Graph

Breadcrumb

Canonical

---

# Future Features

Image Lightbox

Image Zoom

Lazy Loading

Infinite Scroll

Search

Category Filter

---

# CMS Ready

Gallery content should be replaceable by:

REST API

Database

Headless CMS

without changing UI components.