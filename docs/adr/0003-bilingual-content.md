# ADR-0003: Bilingual Content Architecture

Status: Accepted

Date: 2026-07-23

Decision Makers:
- Project Owner
- Product Architect

---

# Context

The Mato Cashew platform serves both Cambodian and international audiences.

Primary audiences include:

- Cambodian consumers
- International buyers
- Importers
- Farmers
- Researchers
- Food industry professionals

To support these audiences, the platform must provide content in multiple languages.

The first supported languages are:

- English (default)
- Khmer

The architecture should allow future expansion without restructuring the project.

---

# Decision

The platform will use a language-first architecture.

English will be the default language.

Khmer will use a dedicated language prefix.

Example

English

/

/products/

/resources/

Khmer

/km/

/km/products/

/km/resources/

Future languages should follow the same pattern.

Example

/ja/

/fr/

/zh/

---

# Why This Architecture

This approach provides:

Clear URLs

Better SEO

Simple routing

Easy scalability

Consistent navigation

Language-specific metadata

Independent translated content

---

# URL Structure

English

/

/about/

/products/

/resources/

/gallery/

/wholesale/

/contact/

Khmer

/km/

/km/about/

/km/products/

/km/resources/

/km/gallery/

/km/wholesale/

/km/contact/

---

# Content Strategy

Every language maintains its own content.

English content is not automatically translated.

Khmer content is independently managed.

Each article should provide the best experience for its audience.

---

# Translation Strategy

Translations are linked conceptually rather than physically duplicated.

Each translated page should reference its counterpart.

Example

English

/resources/health-benefits

Khmer

/km/resources/health-benefenefits

Both pages represent the same topic while allowing language-specific improvements.

---

# Slug Strategy

Slugs remain readable.

English

cashew-health-benefits

Khmer

cashew-health-benefits

The visible page content is translated.

Using consistent slugs simplifies maintenance and SEO.

---

# Navigation

Navigation labels should come from translation dictionaries.

Example

English

Products

Resources

Wholesale

Khmer

ផលិតផល

ចំណេះដឹង

លក់ដុំ

Navigation URLs remain architecture-driven.

---

# Translation Layer

The platform uses translation dictionaries.

Location

src/i18n/

Example

en.ts

km.ts

Translations are consumed by components.

---

# Shared Components

Components should never contain hard-coded text.

Bad

<h2>Products</h2>

Good

<h2>{t.products.title}</h2>

---

# Content Collections

Products

Resources

Recipes

News

FAQ

should support language metadata.

Example

language

en

km

---

# SEO Considerations

Every translated page should include

Canonical URL

hreflang

Language Metadata

Structured Data

Open Graph

Localized Titles

Localized Descriptions

---

# Search

Future search should support

Language filtering

Localized results

Language-specific indexing

---

# Internal Linking

Articles should link to

Related Articles

Related Products

Category Pages

Language counterpart (if available)

---

# Language Switching

Switching language should preserve context whenever possible.

Example

English

/resources/export-guide

↓

Khmer

/km/resources/export-guide

If a translated page does not exist, the user should be redirected to the corresponding category page.

---

# Accessibility

Language attributes should be applied correctly.

Examples

<html lang="en">

<html lang="km">

Screen readers should correctly identify page language.

---

# Future Compatibility

The architecture supports adding languages such as

Japanese

Chinese

French

German

without changing routing or component structure.

---

# Alternatives Considered

## Option A

Machine translation.

Rejected.

Reason

Poor quality and inconsistent terminology.

---

## Option B

Single language website.

Rejected.

Reason

Does not meet business requirements.

---

## Option C

Language-first architecture.

Accepted.

Reason

Scalable, SEO friendly, maintainable, and future-proof.

---

# Consequences

Positive

Better international SEO.

Independent content quality.

Scalable architecture.

Easy language expansion.

Improved user experience.

Trade-offs

More content management effort.

Requires translation workflow.

These trade-offs are acceptable because content quality is a core business objective.

---

# Impact on Architecture

This decision affects

Routing

Navigation

Content Collections

SEO

Breadcrumbs

Search

Sitemap

Language Switcher

Translation Services

Future CMS

---

# Implementation Guidelines

Use language prefixes.

Avoid hard-coded UI text.

Store translations in src/i18n/.

Keep components language-independent.

Use translation keys instead of literal strings.

Maintain language-specific metadata.

---

# Related Documents

01-project-vision.md

02-information-architecture.md

03-navigation-specification.md

04-platform-architecture.md

05-design-system.md

08-coding-standards.md

ADR-0001 Platform Vision

ADR-0002 Use Astro

---

# Review

Review this ADR when:

A new language is introduced.

CMS integration changes translation workflows.

Routing architecture changes.

---

# Conclusion

The Mato Cashew platform adopts a language-first architecture that treats English and Khmer as equal first-class languages.

This decision ensures long-term scalability, strong international SEO, maintainable routing, and an excellent user experience while allowing future language expansion without architectural changes.