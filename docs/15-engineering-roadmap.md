# Mato Cashew Engineering Roadmap

> Version: 1.0
> Status: Active
> Owner: Mato Cashew Team

---

# Purpose

This roadmap defines the engineering implementation plan for the Mato Cashew Platform.

Unlike the Content Roadmap, this document focuses on software architecture,
features, refactoring, technical improvements, and future engineering work.

---

# Engineering Principles

Every sprint must follow:

1. Review Documentation
2. Select Sprint Tasks
3. Implement
4. Build
5. Test
6. Commit
7. Update Documentation (if needed)

Sprint scope should not change unless:

- Critical bug
- Security issue
- Performance issue
- Approved change request

---

# Phase 1 — Foundation ✅

## Project Setup

- [x] Astro Project
- [x] Folder Structure
- [x] TypeScript
- [x] Markdown Content
- [x] Design Tokens
- [x] Shared Layout
- [x] Components

---

# Phase 2 — Knowledge System ✅

## Knowledge Architecture

- [x] Markdown Collection
- [x] Knowledge Service
- [x] Article Layout
- [x] Hero Images
- [x] Metadata
- [x] Reading Time
- [x] Tags
- [x] Categories

---

# Phase 3 — Knowledge Index ✅

- [x] Featured Article
- [x] Latest Articles
- [x] Statistics
- [x] Search
- [x] Category Filter
- [x] Tag Filter

---

# Phase 4 — Search Experience ✅

- [x] Instant Search
- [x] Search Result Counter
- [x] No Results
- [x] Clear Search

---

# Phase 5 — Deep Linking ✅

- [x] Search URL
- [x] Category URL
- [x] Tag URL
- [x] Browser Refresh Support
- [x] Shareable URLs

---

# Phase 6 — Refactoring 🚧

## Current Sprint

### URL

- [x] Shared URL Helper

### UI

- [x] Result Counter Refactor
- [x] No Results Message Refactor

### Remaining

- [ ] Separate Business Logic
- [ ] Reduce DOM Coupling
- [ ] Split Inline Script
- [ ] JavaScript Modules

### Sprint Acceptance Criteria

#### 1. Separate Business Logic

**Objective**

Separate business logic from UI/DOM manipulation to improve maintainability and testability.

**Definition of Done**

- Business logic functions must not modify the DOM.
- Business logic functions should only return data, strings, numbers, booleans, arrays, or objects.
- UI functions are responsible for updating the DOM.
- No user-visible behavior changes.
- Build Success.

---

#### 2. Reduce DOM Coupling

**Objective**

Reduce dependencies between application logic and DOM elements.

**Definition of Done**

- Functions should avoid querying the DOM internally whenever possible.
- DOM elements should be initialized once during page setup.
- Functions should receive required elements or values as parameters.
- Build Success.

---

#### 3. Split Inline Script

**Objective**

Improve readability and prepare for future modularization.

**Definition of Done**

- Group helper functions together.
- Group UI functions together.
- Group event listeners together.
- Keep a single initialization section.
- No behavior changes.
- Build Success.

---

#### 4. JavaScript Modules

**Objective**

Move JavaScript logic into reusable modules.

**Definition of Done**

- Business logic is extracted from `index.astro`.
- Each module has a single responsibility.
- Imports remain simple and maintainable.
- Build Success.
- Manual testing passed.
---

# Phase 7 — User Experience

- [ ] Active Filter Chips
- [ ] Sort Articles
- [ ] Reading Time Badge
- [ ] Related Articles
- [ ] Copy Link
- [ ] Back To Top

---

# Phase 8 — Performance

- [ ] Lazy Loading
- [ ] Image Optimization
- [ ] Bundle Optimization
- [ ] Search Optimization

---

# Phase 9 — CMS

- [ ] CMS Architecture
- [ ] Admin
- [ ] Draft
- [ ] Preview
- [ ] Publishing Workflow

---

# Phase 10 — Internationalization

- [ ] Khmer
- [ ] English
- [ ] Language Switcher

---

# Phase 11 — Analytics

- [ ] Search Analytics
- [ ] Popular Articles
- [ ] User Behaviour

---

# Phase 12 — Testing

- [ ] Unit Tests
- [ ] Integration Tests
- [ ] E2E Tests

---

# Phase 13 — Deployment

- [ ] CI/CD
- [ ] Preview
- [ ] Production Monitoring

---

# Definition of Done

A sprint is complete only if:

- Build Success
- No TypeScript Errors
- No Console Errors
- Manual Testing Passed
- Documentation Updated
- Commit Created