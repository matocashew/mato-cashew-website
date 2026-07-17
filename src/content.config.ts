import { defineCollection, z } from "astro:content";

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    publishDate: z.date(),
    updatedDate: z.date().optional(),

    author: z.string().default("Mato Cashew"),

    image: z.string(),

    category: z.string(),

    tags: z.array(z.string()),

    draft: z.boolean().default(false)
  })
});

export const collections = {
  resources
};