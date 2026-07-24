import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { knowledgeSchema } from "./content/schemas/knowledge";

const knowledge = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/knowledge",
  }),

  schema: knowledgeSchema,
});

const resources = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/resources"
  }),

  schema: z.object({

    title: z.string(),

    slug: z.string(),

    description: z.string(),

    publishDate: z.date(),

    updatedDate: z.date().optional(),

    author: z.string().default("Mato Cashew"),

    image: z.string(),

    category: z.string(),

    tags: z.array(z.string()).default([]),

    draft: z.boolean().default(false),

    featured: z.boolean().default(false),

    readingTime: z.number().optional()

  })
});

const products = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/products"
  }),

  schema: z.object({

    title: z.string(),

    slug: z.string(),

    description: z.string(),

    sku: z.string(),

    category: z.enum([
      "Retail",
      "Wholesale"
    ]),

    weight: z.string(),

    packaging: z.string(),

    image: z.string(),

    gallery: z.array(z.string()).default([]),

    featured: z.boolean().default(false),

    availableForWholesale: z.boolean().default(true),

    privateLabel: z.boolean().default(false),

    minimumOrder: z.string().optional(),

    specifications: z.array(z.string()).default([]),

    applications: z.array(z.string()).default([]),

    publishDate: z.date(),

    updatedDate: z.date().optional(),

    draft: z.boolean().default(false)

  })
});

export const collections = {
  resources,
  products,
  knowledge,
};