# Mato Cashew Knowledge Center Editorial Guide

Version: 2.0

Status: Approved

Last Updated: 2026-08-04

---

# Purpose

The Mato Cashew Knowledge Center is designed to become a trusted educational resource about Cambodian cashews.

It is not a traditional blog.

Its mission is to educate customers, buyers, importers, retailers, food manufacturers, researchers, and anyone interested in the global cashew industry.

Every article should educate readers first while naturally introducing Mato Cashew's expertise.

---

# Editorial Principles

Every article should be:

- Educational before promotional
- Accurate and fact-based
- Easy to understand
- Professionally written
- Helpful to readers
- Evergreen whenever possible

Content should build trust through knowledge rather than marketing.

---

# Article Types

The Knowledge Center contains four article categories.

## Type A — Foundation Articles

Purpose

Introduce fundamental concepts.

Examples

- What is Cashew?
- Cashew Tree

---

## Type B — Process Guides

Purpose

Explain a complete process step-by-step.

Examples

- Complete Guide to Cashew Processing
- Food Safety in Cashew Processing

---

## Type C — Reference Articles

Purpose

Explain technical standards, classifications, specifications, and industry terminology.

Examples

- Cashew Grading Standards
- Export Quality Standards

---

## Type D — Business Guides

Purpose

Help buyers and business partners make informed decisions.

Examples

- Cashew Export FAQ
- Wholesale Buying Guide

---

# Standard Article Structure

Every article should follow a consistent structure.

1. Hero
2. Quick Facts (when applicable)
3. Introduction
4. Table of Contents
5. Main Content
6. InfoBox / Knowledge Highlight
7. Cambodia Perspective (when applicable)
8. Comparison Table (if applicable)
9. Key Takeaways
10. Frequently Asked Questions
11. Continue Learning
12. Related Articles

Not every article requires every section, but the overall reading experience should remain consistent.

---

# Frontmatter Standard

Every article should include:

- title
- slug
- description
- excerpt
- author
- publishedAt
- heroImage
- heroImageAlt
- category
- tags
- featured
- draft
- readingTime
- language
- seo

Optional fields may be added when required by future features.

---

# Writing Principles

Write for humans first.

Use:

- Clear English
- Short paragraphs
- Logical structure
- Simple explanations
- Practical examples

Avoid:

- Unnecessary marketing language
- Keyword stuffing
- Unsupported claims
- Repetitive content
- Excessively long paragraphs

Always explain technical terms when they first appear.

---

# Tone of Voice

The Mato Cashew Knowledge Center should always sound:

- Professional
- Educational
- Friendly
- Trustworthy
- Neutral
- Confident

Avoid exaggerated marketing language.

---

# Heading Rules

Use only one H1.

Organize the article using:

- H2 for major sections
- H3 for subsections
- H4 only when necessary

Never skip heading levels.

---

# Images

Images should improve understanding.

Requirements:

- High quality
- Relevant to the content
- Descriptive alt text
- Consistent style

Whenever possible, prioritize:

1. Original Mato Cashew photography
2. Factory photography
3. Cambodian agriculture
4. Professional diagrams
5. Educational illustrations

Avoid decorative images that provide little educational value.

---

# Tables

Use tables whenever comparison improves understanding.

Recommended topics:

- Product grades
- Specifications
- Equipment
- Quality standards
- Export requirements
- Product comparisons

Tables should remain simple and easy to scan.

---

# Knowledge Components

Use reusable UI components whenever appropriate.

Approved components:

- InfoBox
- FAQ
- ComparisonTable
- ArticleLink

Only introduce new components when they can be reused across multiple articles.

---

# Internal Linking

Every article should naturally connect to related knowledge.

Each article should link to at least two related articles whenever appropriate.

Example

Processing Guide

↓

Cashew Tree

↓

Cashew Grading Standards

↓

Food Safety in Cashew Processing

↓

Export Quality Standards

Internal links should improve navigation instead of increasing link count unnecessarily.

---

# Continue Learning

Every article should end with learning recommendations.

Recommended content:

- Related Articles
- Next Topic
- Previous Topic (when appropriate)

The goal is to guide readers through the Knowledge Center naturally.

---

# SEO Guidelines

Every article should include:

- One H1
- Logical H2/H3 hierarchy
- Unique title
- Unique meta description
- Natural keyword usage
- Internal links
- Descriptive image alt text
- FAQ section whenever appropriate

Write naturally for readers rather than search engines.

---

# Accessibility

Every article should be accessible.

Requirements:

- Proper heading hierarchy
- Descriptive alt text
- Accessible tables
- Meaningful link text
- Readable paragraph length

---

# Research & Sources Policy

Every article should be based on reliable and verifiable information.

Preferred sources:

1. Academic publications
2. Government agencies
3. International organizations (e.g. FAO)
4. Scientific institutions
5. Industry associations
6. Mato Cashew's verified operational experience

Avoid:

- Anonymous blogs
- AI-generated content without verification
- Marketing claims without evidence
- Unverified statistics

When Cambodia-specific information is available, prioritize official Cambodian sources or internationally recognized publications covering Cambodia.

---

# Editorial Quality Checklist

Before publishing an article, verify:

✓ Frontmatter completed

✓ Grammar reviewed

✓ Headings structured correctly

✓ Internal links tested

✓ Images displayed correctly

✓ Alt text added

✓ Components rendered correctly

✓ Build successful

✓ FAQ reviewed

✓ SEO metadata completed

✓ Reading flow reviewed

✓ Related articles linked

---

# Definition of Done

An article is considered complete only when:

✓ Content reviewed

✓ Technical accuracy verified

✓ Build successful

✓ Images optimized

✓ Accessibility checked

✓ Internal links working

✓ Documentation updated if necessary

✓ Ready for publication

---

# Long-term Vision

The Mato Cashew Knowledge Center should grow into one of the most trusted online references for Cambodian cashews and the global cashew industry.

Every article should strengthen the overall knowledge network by providing accurate information, consistent structure, and meaningful connections to related topics.

Quality should always take priority over quantity.

## Reusable Components

To ensure consistency across the Knowledge Center, authors should use the available reusable components whenever appropriate.

### QuickFacts

Use the `QuickFacts` component to summarize the most important concepts immediately after the article introduction.

Example:

```mdx
<QuickFacts
  items={[
    "Fact 1",
    "Fact 2",
    "Fact 3"
  ]}
/>
```

### InfoBox

Use `InfoBox` for:

- Definitions
- Tips
- Warnings
- Success messages

### ComparisonTable

Use `ComparisonTable` instead of Markdown tables whenever structured comparisons are presented.

### FAQ

Use the reusable FAQ component for frequently asked questions.

### ArticleLink

Use `ArticleLink` to build the Continue Learning section.