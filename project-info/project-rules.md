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