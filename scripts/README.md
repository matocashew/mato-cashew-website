# Mato Cashew Developer Toolkit

## Overview

The Developer Toolkit is a collection of Node.js utilities used to maintain, audit, and document the Mato Cashew website.

Unlike the website source code, these scripts are intended only for developers.

The toolkit helps automate repetitive maintenance tasks and keeps the project healthy.

---

# Toolkit Architecture

```
scripts/

├── audit.js
├── content-audit.js
├── image-audit.js
├── optimize-images.js
├── project-map.js
├── project-tree.js
├── seo-audit.js
├── unused-files.js

└── lib/

    console-utils.js

    file-utils.js

    path-utils.js

    report-utils.js

    tree-utils.js
```

---

# Philosophy

Toolkit scripts should be

- Small
- Independent
- Reusable
- Easy to maintain
- Cross-platform
- ES Module based

Business logic should never be duplicated.

Reusable logic belongs inside

```
scripts/lib/
```

---

# Utility Modules

## console-utils.js

Purpose

Standardize console output.

Available functions

- title()
- success()
- warning()
- error()
- info()

Example

```javascript
title("Generating Project Tree");

success("Completed");

warning("Missing image");

error("Build failed");
```

---

## file-utils.js

Purpose

Common file system helpers.

Examples

- create directories

- write files

- read files

- check existence

---

## path-utils.js

Purpose

Centralize all project paths.

Example

```javascript
PROJECT_INFO

PROJECT_TREE

PROJECT_MAP
```

Avoid hard-coded paths.

---

## report-utils.js

Purpose

Generate markdown reports.

Used by

- audit
- seo audit
- image audit
- content audit

---

## tree-utils.js

Purpose

Generate project structure.

Shared by

- project-tree

- project-map

---

# Available Scripts

## Development

```
npm run dev
```

---

## Build

```
npm run build
```

---

## Check

```
npm run check
```

---

## Project Tree

```
npm run project:tree
```

Output

```
project-info/project-tree.txt
```

---

## Project Map

```
npm run project:map
```

Output

```
project-info/project-map.txt
```

---

## Complete Audit

```
npm run audit
```

---

## Content Audit

```
npm run audit:content
```

---

## SEO Audit

```
npm run audit:seo
```

---

## Image Audit

```
npm run audit:images
```

---

## Unused Files Audit

```
npm run audit:unused
```

---

# Coding Rules

Every toolkit script should

- Use ES Modules
- Handle errors
- Use console-utils
- Use file-utils
- Avoid duplicated code
- Produce deterministic output

---

# Naming Convention

Files

```
kebab-case.js
```

Functions

```
camelCase()
```

Constants

```
UPPER_CASE
```

---

# Report Directory

Generated reports belong in

```
project-info/
```

Never generate reports elsewhere.

---

# Future Toolkit Roadmap

## Version 1

- Project Tree
- Project Map
- Content Audit
- SEO Audit
- Image Audit
- Unused Files Audit

---

## Version 2

- Broken Links Audit
- Sitemap Validation
- Robots Validation
- Accessibility Audit

---

## Version 3

- Auto Fix
- Auto Cleanup
- Auto Formatting
- Release Report
- Deployment Validation

---

# Best Practices

Before every commit

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

Before every release

```
npm run audit

npm run audit:content

npm run audit:seo

npm run audit:images
```

---

# Version

Developer Toolkit

Version

1.0.0

Project

Mato Cashew Website

Architecture

Modular Utility Architecture

License

Internal Project Tool