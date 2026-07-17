import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resources = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/resources"
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    publishDate: z.date(),
    updatedDate: z.date().optional(),

    author: z.string().default("Mato Cashew"),

    image: z.string(),

    category: z.string(),

    tags: z.array(z.string()),

    draft: z.boolean().default(false),

    featured: z.boolean().default(false),

    readingTime: z.number().optional()
  })
});

export const collections = {
  resources
};