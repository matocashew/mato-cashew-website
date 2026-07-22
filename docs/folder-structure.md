# Folder Structure

This document explains the directory structure of the Mato Cashew website and the responsibility of each folder.

---

# Root Directory

```
mato-cashew-website/

docs/
public/
scripts/
src/

package.json
astro.config.mjs
tsconfig.json
README.md
```

---

# docs/

Contains all technical documentation for the project.

```
docs/

README.md
architecture.md
folder-structure.md
product-model.md
cms-roadmap.md
api-design.md
deployment.md
coding-standards.md
CHANGELOG.md
```

Purpose

- Project documentation
- Architecture references
- CMS planning
- API planning
- Development guidelines

---

# public/

Static assets served directly by Astro.

```
public/

images/
favicon.ico
robots.txt
site.webmanifest
```

Contains

- Images
- Icons
- Manifest
- Robots.txt

---

# scripts/

Utility scripts used during development.

Example

```
scripts/

optimize-images.js
```

Purpose

- Image optimization
- Build utilities
- Future automation scripts

---

# src/

Application source code.

```
src/

components/
config/
content/
data/
i18n/
layouts/
lib/
pages/
services/
styles/
types/
utils/
```

---

# components/

Reusable UI components.

Examples

```
Header.astro
Footer.astro
Hero.astro
ProductCard.astro
GalleryCard.astro
FAQ.astro
```

Rules

- Small
- Reusable
- Single Responsibility

---

# layouts/

Shared page layouts.

Examples

```
Layout.astro
PageLayout.astro
```

Responsibilities

- HTML structure
- SEO
- Global assets

---

# pages/

Website routes.

Examples

```
index.astro

about.astro

products/

gallery/

resources/

contact/
```

Every Astro page becomes a website route.

---

# config/

Global business configuration.

Examples

```
site.ts

navigation.ts
```

Contains

- Website information
- Contact information
- Brand configuration
- Navigation
- Analytics

No business information should be hard-coded outside this folder.

---

# data/

Static business data.

Examples

```
products.ts

gallery.ts

resources.ts
```

Future

This folder will eventually be replaced by a database.

---

# services/

Business logic.

Examples

```
product.service.ts

gallery.service.ts

resource.service.ts
```

Responsibilities

- Read data
- Filter data
- Prepare data for components

Components should not access the data layer directly.

---

# types/

TypeScript interfaces.

Examples

```
Product.ts

Gallery.ts

Article.ts
```

Purpose

- Type safety
- Shared models
- Better IDE support

---

# i18n/

Language resources.

Contains

```
en.ts

km.ts
```

Responsibilities

- User interface text
- Labels
- Buttons
- Messages

Business configuration does not belong here.

---

# styles/

Global CSS files.

Examples

```
global.css

header.css

footer.css

products.css
```

Rules

- One responsibility per file
- Responsive first
- No inline CSS

---

# lib/

Shared helper libraries.

Future examples

```
analytics.ts

seo.ts

email.ts
```

---

# utils/

Utility functions.

Examples

```
formatDate.ts

slugify.ts
```

Utility functions should remain framework-independent whenever possible.

---

# Architecture Summary

```
Pages

↓

Layouts

↓

Components

↓

Services

↓

Data

↓

Configuration
```

Future Architecture

```
Pages

↓

Components

↓

Services

↓

REST API

↓

Database
```

The user interface should never need to change when moving from static data to a dynamic CMS.

---

# Development Principles

The project follows these principles:

- Separation of Concerns
- Single Responsibility
- Configuration Driven
- Reusable Components
- Strong Typing
- CMS Ready Architecture
- SEO First
- Performance First