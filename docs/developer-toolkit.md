# Developer Toolkit

## Overview

The Mato Cashew Developer Toolkit is a collection of utility scripts that help developers maintain the project efficiently.

The toolkit provides commands for:

- Project structure reports
- Content validation
- SEO auditing
- Image auditing
- Unused file detection
- Project health checks

All toolkit commands are executed through `npm`.

---

# Project Structure

```
scripts/

├── audit.js
├── content-audit.js
├── image-audit.js
├── optimize-images.js
├── project-map.js
├── project-tree.js
├── seo-audit.js
└── unused-files.js
```

---

# Available Commands

## Development

Start development server

```bash
npm run dev
```

Build production website

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Run Astro diagnostics

```bash
npm run check
```

---

# Image Optimization

Optimize all project images.

```bash
npm run optimize-images
```

Purpose

- Compress images
- Improve loading speed
- Reduce file size

---

# Project Reports

## Generate Project Tree

```bash
npm run project:tree
```

Output

```
project-info/project-tree.txt
```

Purpose

- Display folder structure
- Review architecture
- Share project structure

---

## Generate Project Map

```bash
npm run project:map
```

Output

```
project-info/project-map.txt
```

Purpose

- List every source file
- Quickly locate files
- Documentation support

---

# Project Audit

Run complete project audit.

```bash
npm run audit
```

Future responsibilities

- Build validation
- Component validation
- Service validation
- Page validation
- Content validation

Output

```
project-info/audit-report.md
```

---

# Content Audit

Validate Astro Content Collections.

```bash
npm run audit:content
```

Checks

- Missing slug
- Missing title
- Missing description
- Missing image
- Missing category
- Missing publish date
- Draft content

Output

```
project-info/content-report.md
```

---

# SEO Audit

Validate SEO configuration.

```bash
npm run audit:seo
```

Checks

- Title
- Description
- Canonical URL
- Open Graph
- Twitter Cards
- Structured Data
- Sitemap

Output

```
project-info/seo-report.md
```

---

# Image Audit

Inspect project images.

```bash
npm run audit:images
```

Checks

- Large images
- Duplicate images
- Missing alt text
- Unsupported formats

Output

```
project-info/image-report.md
```

---

# Unused Files Audit

Find legacy files.

```bash
npm run audit:unused
```

Checks

- Unused Components
- Unused CSS
- Unused TypeScript
- Unused Markdown

Output

```
project-info/unused-files.md
```

---

# Recommended Workflow

Daily

```
npm run dev
```

Before Commit

```
npm run check

npm run build
```

Weekly

```
npm run audit

npm run project:tree

npm run project:map
```

Before Release

```
npm run check

npm run build

npm run audit

npm run audit:seo

npm run audit:images

npm run audit:content
```

---

# Output Directory

All reports are stored in

```
project-info/
```

Example

```
project-info/

architecture-version.md

change-log.md

project-tree.txt

project-map.txt

audit-report.md

content-report.md

seo-report.md

image-report.md

unused-files.md
```

---

# Roadmap

## Version 1.0

Completed

- Project Tree
- Project Map
- Image Optimization
- Content Audit
- SEO Audit
- Image Audit
- Unused Files Audit

---

## Version 1.1

Planned

- Broken Link Audit
- Sitemap Validation
- Robots.txt Validation
- Performance Report

---

## Version 2.0

Planned

- Auto Fix
- Auto Cleanup
- Auto Formatting
- Release Checklist
- Deployment Validation

---

# Best Practices

- Always run `npm run check` before building.
- Always build successfully before committing code.
- Keep `project-tree.txt` updated after major structural changes.
- Keep `project-map.txt` synchronized with the project.
- Use audit reports to identify issues early.

---

# Ownership

Developer Toolkit

Project

Mato Cashew

Website

https://matocashew.com

Current Version

1.0.0