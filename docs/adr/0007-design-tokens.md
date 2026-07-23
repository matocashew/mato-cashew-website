# ADR-0007: Adopt Design Tokens

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

As the Mato Cashew platform grows, visual styles are increasingly shared across many pages and components.

Examples include:

- Colors
- Typography
- Spacing
- Border Radius
- Shadows
- Motion
- Breakpoints

Previously, many components contained hard-coded visual values such as:

padding: 28px;

border-radius: 20px;

color: #1A8F45;

box-shadow: 0 12px 30px rgba(...)

This approach creates inconsistency and increases maintenance costs.

The platform requires a centralized visual language.

---

# Decision

The Mato Cashew platform adopts Design Tokens as the single source of truth for all reusable visual values.

All reusable design values must be defined centrally.

Components should consume tokens rather than hard-code values.

---

# Objectives

Design Tokens should:

- Ensure visual consistency
- Reduce duplicated CSS
- Simplify redesigns
- Improve maintainability
- Support theming
- Support future Dark Mode
- Support future brand expansion

---

# Design Token Categories

The platform defines the following token groups.

Colors

Typography

Spacing

Radius

Shadow

Motion

Breakpoints

Z-index

Opacity

---

# Folder Structure

Design Tokens belong in

src/design/

Example

src/design/

tokens/

colors.css

typography.css

spacing.css

radius.css

shadow.css

motion.css

breakpoints.css

z-index.css

opacity.css

index.css

---

# Color Tokens

Example

--color-primary

--color-primary-light

--color-primary-dark

--color-secondary

--color-accent

--color-background

--color-surface

--color-border

--color-text

--color-text-muted

--color-success

--color-warning

--color-error

Components should never use raw hexadecimal colors unless absolutely necessary.

---

# Typography Tokens

Example

--font-family-base

--font-family-heading

--font-display

--font-h1

--font-h2

--font-h3

--font-body

--font-small

--font-caption

---

# Spacing Tokens

Use a consistent spacing scale.

Example

--space-1

--space-2

--space-3

--space-4

--space-5

--space-6

--space-7

--space-8

--space-9

--space-10

Components should not invent new spacing values.

---

# Radius Tokens

Example

--radius-sm

--radius-md

--radius-lg

--radius-xl

--radius-full

---

# Shadow Tokens

Example

--shadow-sm

--shadow-md

--shadow-lg

--shadow-hover

Avoid custom shadows inside components.

---

# Motion Tokens

Example

--duration-fast

--duration-normal

--duration-slow

--ease-default

--ease-emphasized

Animations should remain subtle.

---

# Breakpoint Tokens

Example

--breakpoint-mobile

--breakpoint-tablet

--breakpoint-laptop

--breakpoint-desktop

--breakpoint-wide

Responsive layouts should use shared breakpoints.

---

# Z-index Tokens

Example

--z-base

--z-dropdown

--z-sticky

--z-modal

--z-toast

Avoid arbitrary z-index values.

---

# Opacity Tokens

Example

--opacity-disabled

--opacity-overlay

--opacity-muted

---

# Component Usage

Good

padding: var(--space-6);

border-radius: var(--radius-lg);

color: var(--color-primary);

box-shadow: var(--shadow-md);

transition: all var(--duration-normal) var(--ease-default);

Bad

padding: 28px;

border-radius: 18px;

color: #1A8F45;

box-shadow: 0 10px 24px rgba(...);

transition: all .3s ease;

---

# Design Token Hierarchy

Brand

↓

Design Tokens

↓

UI Components

↓

Feature Components

↓

Pages

Pages should never define reusable visual values.

---

# Relationship with UI Library

Every UI component must consume Design Tokens.

Example

Button

↓

Tokens

Card

↓

Tokens

Badge

↓

Tokens

Accordion

↓

Tokens

This guarantees consistency across the platform.

---

# Responsive Design

Responsive behavior should use shared spacing and breakpoint tokens.

Avoid magic numbers.

---

# Accessibility

Tokens should maintain:

Readable typography

Accessible color contrast

Consistent focus styles

Comfortable spacing

Visible interactive states

---

# Future Compatibility

Design Tokens should support

Dark Mode

Seasonal Themes

Brand Refresh

Additional Languages

White Label

OEM Portals

Partner Portal

Mobile Applications

---

# Alternatives Considered

## Option A

Hard-code visual values inside components.

Rejected.

Reason

Creates duplication and inconsistent design.

---

## Option B

Use Design Tokens.

Accepted.

Reason

Centralized.

Maintainable.

Scalable.

Supports future theming.

---

# Consequences

Positive

Consistent UI

Simpler maintenance

Faster redesigns

Better scalability

Improved developer experience

Trade-offs

Requires initial setup

Requires team discipline

Slightly more abstraction

These trade-offs are acceptable because they significantly reduce long-term maintenance effort.

---

# Impact on Architecture

This decision affects

Design System

CSS Architecture

UI Library

Component Development

Responsive Layout

Future Themes

Accessibility

---

# Implementation Guidelines

Never hard-code reusable visual values.

Prefer semantic token names.

Keep tokens framework independent.

Group tokens by category.

Document every new token.

Review tokens before introducing new values.

---

# Example Token Flow

Brand Identity

↓

Color Palette

↓

Design Tokens

↓

Button Component

↓

Product Card

↓

Product Page

---

# Related Documents

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0004 Single Source of Truth

ADR-0005 BEM CSS Convention

ADR-0006 Service Layer

---

# Review

Review this ADR when

The Design System changes significantly.

Dark Mode is introduced.

A new brand identity is adopted.

A design token standard is revised.

---

# Conclusion

The Mato Cashew platform adopts Design Tokens as the single source of truth for all reusable visual values.

This decision establishes a scalable visual architecture that improves consistency, reduces duplication, simplifies maintenance, and enables future theming while supporting long-term platform growth.