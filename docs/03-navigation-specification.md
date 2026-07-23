# Mato Cashew Website
## Navigation Specification

Version: 1.0

Status: Approved

Last Updated: July 2026

---

# Purpose

This document defines the navigation system for the Mato Cashew website.

It covers

- Desktop Navigation

- Mobile Navigation

- Mega Menu

- Search

- Breadcrumbs

- Accessibility

- URL Mapping

---

# Navigation Goals

Navigation should help users

Find information quickly.

Understand where they are.

Discover related content.

Reach important business pages.

---

# Primary Navigation

Home

About

Products

Resources

Gallery

Wholesale

Contact

Maximum

7 Main Items

---

# Desktop Navigation

Desktop uses a horizontal navigation bar.

Logo

↓

Navigation

↓

Language Switcher

↓

Search

Sticky after scrolling.

---

# Desktop Mega Menu

Products

Retail Products

Wholesale Products

OEM

Packaging

Grades

Specifications

Featured Product

---

Resources

Cashew Knowledge

Health Benefits

Processing

Export Guide

Recipes

Industry News

FAQ

Featured Articles

---

Wholesale

Become Distributor

OEM

MOQ

Export Markets

RFQ

Catalogue

---

# Mega Menu Rules

Maximum

3 Columns

Maximum

8 Links

Featured Content

Optional

No scrolling inside mega menu.

---

# Mobile Navigation

Use a slide-out drawer.

Accordion menu.

One level expanded at a time.

Large touch targets.

Minimum

44px

---

# Search

Future Search should support

Products

Articles

Recipes

News

FAQ

Knowledge

---

# Language Switcher

Support

English

Khmer

Current language should remain when switching pages whenever translations exist.

---

# Sticky Header

Transparent on Hero.

Solid after scrolling.

Always visible.

---

# Active Navigation

Current page should be highlighted.

Current category should remain expanded.

---

# Breadcrumbs

All pages except Home should display breadcrumbs.

Example

Home

↓

Resources

↓

Health Benefits

↓

Cashew Nutrition

---

# Footer Navigation

Footer should mirror important navigation.

Company

Products

Resources

Wholesale

Contact

Social Media

---

# Navigation Accessibility

Keyboard Navigation

Visible Focus

ARIA Labels

Screen Reader Friendly

---

# URL Mapping

Navigation should never depend on hardcoded URLs.

Navigation data should come from

src/data/navigation.ts

---

# Component Structure

Header

Logo

DesktopNavigation

MegaMenu

MobileNavigation

LanguageSwitcher

SearchButton

---

# Future Features

Search Autocomplete

Recent Searches

Popular Articles

Popular Products

Recently Viewed

---

# Success Criteria

Users should reach any page within three clicks.

Navigation should work on all screen sizes.

Navigation should remain scalable for more than 200 pages.

Navigation should remain accessible.

Navigation should support multiple languages.

---

# Conclusion

The navigation system is designed to provide a scalable, intuitive, and accessible experience while supporting the long-term vision of the Mato Cashew platform.