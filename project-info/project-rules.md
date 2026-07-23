# Mato Cashew Project Rules

## Architecture

Components

↓

Services

↓

Content Collections

---

Components MUST NOT use

getCollection()

directly.

---

Services are responsible for

- filtering

- sorting

- limiting

- business logic

---

Content Collections

are the Single Source of Truth.

---

src/data/products.ts

is deprecated.

---

All product URLs use

slug

not filename.

## Component Rules

Components must:

- Receive data via props
- Never query data directly
- Never use getCollection()
- Never import data from src/data
- Never contain business logic

Services are responsible for:

- Data retrieval
- Filtering
- Sorting
- Searching
- Business logic