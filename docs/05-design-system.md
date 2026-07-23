# Mato Cashew Website
## Design System

Version: 1.0

Status: Approved

Last Updated: July 2026

---

# Purpose

This document defines the visual language and reusable design principles for the Mato Cashew website.

The design system ensures consistency across every page, component, and future feature while supporting scalability and maintainability.

---

# Design Principles

The Mato Cashew design system follows these principles.

1. Premium

Every interface should feel clean, elegant, and high quality.

2. Natural

The visual language should reflect agriculture, nature, and Cambodian cashews.

3. Trustworthy

Design should inspire confidence and professionalism.

4. Simple

Avoid unnecessary complexity.

5. Consistent

Every component should follow the same spacing, typography, colors, and interaction patterns.

---

# Brand Personality

Premium

Natural

Healthy

Modern

Professional

Friendly

Trustworthy

Cambodian

---

# Color System

## Primary

Represents Mato Cashew.

Cashew Green

---

## Secondary

Represents premium quality.

Warm Gold

---

## Accent

Represents natural cashew color.

Natural Brown

---

## Neutral

White

Gray

Dark Gray

Black

---

# Color Tokens

Use design tokens instead of hard-coded colors.

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

---

# Typography

Typography hierarchy should remain consistent.

Display

Hero

H1

H2

H3

H4

Body Large

Body

Small

Caption

---

# Typography Rules

Only one H1 per page.

Headings should decrease sequentially.

Body text should prioritize readability.

Avoid manually setting font sizes for individual pages.

Use typography tokens instead.

---

# Typography Tokens

Example

--font-display

--font-h1

--font-h2

--font-h3

--font-body

--font-small

---

# Spacing System

Use an 8-point spacing system whenever possible.

Scale

4

8

12

16

20

24

32

40

48

64

80

120

---

# Spacing Tokens

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

---

# Border Radius

Use consistent corner radius.

Small

Medium

Large

Extra Large

Full

Tokens

--radius-sm

--radius-md

--radius-lg

--radius-xl

--radius-full

---

# Shadow System

Small

Medium

Large

Hover

Tokens

--shadow-sm

--shadow-md

--shadow-lg

--shadow-hover

---

# Border System

Use subtle borders.

Prefer neutral border colors.

Avoid heavy borders.

Tokens

--border-light

--border-default

--border-strong

---

# Buttons

Only four button variants should exist.

Primary

Secondary

Outline

Text

---

# Button Rules

Primary

Main call-to-action.

Secondary

Supporting actions.

Outline

Alternative action.

Text

Low emphasis action.

---

# Cards

Card Types

Product Card

Resource Card

Gallery Card

FAQ Card

Statistic Card

Feature Card

---

# Card Rules

Cards should use

Consistent spacing

Consistent border radius

Consistent shadow

Consistent hover animation

---

# Badges

Used for

Categories

Status

Featured

Product Grades

Keep badge styles consistent.

---

# Tags

Tags should be lightweight.

Never use multiple visual styles for tags.

---

# Forms

Input

Textarea

Select

Checkbox

Radio

Button

Validation Message

Help Text

All forms should share the same spacing and typography.

---

# Tables

Tables should support

Responsive layout

Overflow scrolling

Accessible headers

Consistent spacing

---

# Images

Use responsive images.

Always include alt text.

Prefer modern formats when appropriate.

Lazy load non-critical images.

---

# Icons

Standard Sizes

16

20

24

32

40

Use consistent stroke width.

---

# Motion

Animation should be subtle.

Fast

200ms

Normal

300ms

Slow

400ms

Avoid distracting animations.

---

# Hover Effects

Hover effects should indicate interaction without overwhelming the interface.

Preferred effects

Elevation

Slight scale

Background transition

Color transition

---

# Responsive Design

Breakpoints

Mobile

Tablet

Laptop

Desktop

Large Desktop

Design mobile-first.

---

# Layout System

Use a consistent container width.

Consistent page spacing.

Consistent section spacing.

Maximum readable text width for articles.

---

# Accessibility

Meet WCAG recommendations whenever practical.

Visible keyboard focus.

Semantic HTML.

Color contrast.

ARIA labels where needed.

Accessible forms.

---

# SEO Components

Every page should include

Title

Description

Canonical URL

Open Graph

Structured Data

Breadcrumb

---

# Component Library

All reusable UI components belong in

src/components/ui/

Example

Button

Card

Badge

Chip

Accordion

Tabs

Alert

Tooltip

Pagination

Breadcrumb

Modal

Drawer

---

# Design Tokens

All reusable visual values belong in

src/design/tokens/

Example

colors.css

spacing.css

typography.css

radius.css

shadow.css

motion.css

breakpoints.css

No component should hard-code design values unless absolutely necessary.

---

# Naming Convention

Follow BEM.

Example

.card

.card__header

.card__body

.card__footer

.card--featured

Avoid generic class names.

---

# Consistency Rules

Do not create a new button style if an existing one works.

Do not create duplicate card layouts.

Do not invent new spacing values.

Do not hard-code colors.

Always reuse existing UI patterns.

---

# Future Compatibility

The design system should support

English

Khmer

Dark Mode

Future Themes

New Components

Additional Languages

---

# Definition of Done

A UI component is complete when

Uses design tokens

Responsive

Accessible

Reusable

Documented

Tested

No duplicate styles

---

# Design Philosophy

The Mato Cashew design system is built around one idea.

"A premium agricultural brand deserves a premium digital experience."

Every design decision should reinforce trust, simplicity, clarity, and long-term scalability.