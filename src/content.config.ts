import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { knowledgeSchema } from "./content/schemas/knowledge";


/* =========================================================
   KNOWLEDGE
   ========================================================= */

const knowledge = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/knowledge",
  }),

  schema: knowledgeSchema,

});


/* =========================================================
   RESOURCES
   ========================================================= */

const resources = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/resources",
  }),

  schema: z.object({

    title: z.string(),

    slug: z.string(),

    description: z.string(),

    publishDate: z.date(),

    updatedDate: z.date().optional(),

    author: z
      .string()
      .default("Mato Cashew"),

    image: z.string(),

    category: z.string(),

    tags: z
      .array(z.string())
      .default([]),

    draft: z
      .boolean()
      .default(false),

    featured: z
      .boolean()
      .default(false),

    readingTime: z
      .number()
      .optional(),

  }),

});


/* =========================================================
   PRODUCTS
   ========================================================= */

const products = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/products",
  }),

  schema: z.object({

    /* -----------------------------------------------------
       Identity
       ----------------------------------------------------- */

    title: z.string(),

    titleKm: z
      .string()
      .optional(),

    slug: z.string(),

    sku: z.string(),


    /* -----------------------------------------------------
       Description
       ----------------------------------------------------- */

    description: z.string(),

    descriptionKm: z
      .string()
      .optional(),


    /* -----------------------------------------------------
       Category
       ----------------------------------------------------- */

    category: z.enum([
      "Retail",
      "Wholesale",
    ]),

    categoryKm: z
      .string()
      .optional(),


    /* -----------------------------------------------------
       Product Size
       ----------------------------------------------------- */

    weight: z.string(),


    /* -----------------------------------------------------
       Packaging
       ----------------------------------------------------- */

    packaging: z.string(),

    packagingKm: z
      .string()
      .optional(),


    /* -----------------------------------------------------
       Images
       ----------------------------------------------------- */

    image: z.string(),

    gallery: z
      .array(z.string())
      .default([]),


    /* -----------------------------------------------------
       Commercial Settings
       ----------------------------------------------------- */

    featured: z
      .boolean()
      .default(false),

    availableForWholesale: z
      .boolean()
      .default(true),

    privateLabel: z
      .boolean()
      .default(false),

    minimumOrder: z
      .string()
      .optional(),


    /* -----------------------------------------------------
       Specifications
       ----------------------------------------------------- */

    specifications: z
      .array(z.string())
      .default([]),

    specificationsKm: z
      .array(z.string())
      .optional(),


    /* -----------------------------------------------------
       Applications
       ----------------------------------------------------- */

    applications: z
      .array(z.string())
      .default([]),

    applicationsKm: z
      .array(z.string())
      .optional(),


    /* -----------------------------------------------------
       Publishing
       ----------------------------------------------------- */

    publishDate: z.date(),

    updatedDate: z
      .date()
      .optional(),

    draft: z
      .boolean()
      .default(false),

  }),

});


/* =========================================================
   COLLECTION EXPORTS
   ========================================================= */

export const collections = {

  resources,

  products,

  knowledge,

};