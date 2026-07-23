# ADR-0005: Adopt BEM CSS Naming Convention

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

As the Mato Cashew platform continues to grow, the number of reusable components and pages increases significantly.

Examples include:

- Product Cards
- Resource Cards
- Gallery Cards
- FAQ
- Wholesale Components
- Navigation
- Mega Menu
- Future UI Library

Without a consistent CSS naming convention, class name collisions become more likely.

A previous issue occurred when the generic class name

.product-image

was shared by multiple components, causing unexpected styling conflicts.

The project requires a scalable CSS architecture.

---

# Decision

The Mato Cashew platform will adopt the Block Element Modifier (BEM) methodology for all component-level CSS.

Every reusable component should own its CSS namespace.

Generic class names should be avoided.

---

# Objectives

The CSS architecture should:

- Prevent style collisions.
- Improve readability.
- Improve maintainability.
- Encourage reusable components.
- Support long-term scalability.

---

# BEM Structure

A component consists of

Block

↓

Element

↓

Modifier

Example

.product-card

.product-card__image

.product-card__content

.product-card__footer

.product-card--featured

---

# Block

A block represents a standalone component.

Examples

.product-card

.resource-card

.gallery-card

.mega-menu

.site-header

.footer

---

# Element

An element belongs only to its parent block.

Examples

.product-card__image

.product-card__title

.product-card__description

.product-card__footer

.resource-card__category

.resource-card__meta

---

# Modifier

Modifiers represent variations.

Examples

.product-card--featured

.product-card--compact

.button--primary

.button--secondary

.alert--success

---

# Good Examples

Product Card

.product-card

.product-card__image

.product-card__content

.product-card__footer

Resource Card

.resource-card

.resource-card__image

.resource-card__content

.resource-card__footer

---

# Bad Examples

Avoid

.image

.content

.title

.footer

.card

.product-image

.resource-content

These names are too generic.

---

# Component Isolation

Each component should define its own CSS namespace.

Example

ProductCard

↓

.product-card

ResourceCard

↓

.resource-card

GalleryCard

↓

.gallery-card

Components should never depend on another component's CSS.

---

# CSS File Structure

Preferred

product-card.css

resource-card.css

gallery-card.css

button.css

accordion.css

Avoid placing unrelated component styles inside the same stylesheet.

---

# Design Tokens

BEM should be combined with design tokens.

Example

Good

padding: var(--space-6);

border-radius: var(--radius-lg);

color: var(--color-primary);

Bad

padding: 28px;

border-radius: 18px;

color: #1A8F45;

---

# Component Ownership

Each component owns

Structure

Styles

State

Interaction

No component should modify another component's internal styles.

---

# Utility Classes

Utility classes are allowed only for generic layout helpers.

Examples

.container

.grid

.hidden

.visually-hidden

.text-center

.mt-auto

Avoid using utilities for component styling.

---

# Nesting Rules

Avoid deep selector nesting.

Preferred

.product-card__title

Avoid

.product-card .content h3 span

Deep selectors reduce maintainability.

---

# Selector Specificity

Keep specificity low.

Avoid

!important

Excessive nesting

Overqualified selectors

Prefer predictable selectors.

---

# Responsive Design

Responsive styles should remain inside the component stylesheet.

Example

.product-card

↓

Desktop

Tablet

Mobile

Avoid creating separate responsive files for each component unless absolutely necessary.

---

# Accessibility

CSS should preserve

Visible focus

Readable contrast

Keyboard navigation

Motion preferences

---

# Performance

Prefer class selectors.

Avoid expensive selectors.

Avoid duplicated CSS.

Minimize unnecessary overrides.

---

# Alternatives Considered

## Option A

Generic CSS naming.

Rejected.

Reason

Creates collisions and inconsistent styling.

---

## Option B

CSS Modules.

Rejected.

Reason

Possible future option, but unnecessary complexity for the current Astro architecture.

---

## Option C

BEM.

Accepted.

Reason

Simple.

Scalable.

Readable.

Framework independent.

Works well with Astro.

---

# Consequences

Positive

Better component isolation.

Cleaner stylesheets.

Predictable class names.

Reduced CSS conflicts.

Simpler maintenance.

Trade-offs

Slightly longer class names.

Requires team discipline.

These trade-offs are acceptable because maintainability is a long-term priority.

---

# Lessons Learned

The Product Detail page and Product Card previously shared the class

.product-image

This caused an unintended CSS collision.

The issue was resolved by introducing component-specific class names.

This experience confirms the need for a structured CSS methodology.

---

# Impact on Architecture

This decision affects

Component Design

UI Library

Design System

Responsive Layout

Future Refactoring

Developer Workflow

---

# Implementation Guidelines

Every reusable component must define a unique block.

Never create generic component class names.

Prefer one stylesheet per component.

Use design tokens whenever possible.

Review new components for naming consistency.

---

# Related Documents

01-project-vision.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0004 Single Source of Truth

---

# Review

Review this ADR when

A CSS architecture change is proposed.

A CSS-in-JS solution is introduced.

The UI Library is significantly redesigned.

---

# Conclusion

The Mato Cashew platform adopts the BEM CSS methodology to ensure scalable, maintainable, and collision-free component styling.

This decision establishes a consistent CSS architecture that supports long-term platform growth while reducing technical debt.