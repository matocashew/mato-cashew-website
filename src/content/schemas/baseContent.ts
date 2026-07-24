import { z } from "astro:content";

export const baseContentSchema = z.object({
  title: z.string(),

  description: z.string(),

  excerpt: z.string(),

  author: z.string(),

  heroImage: z.string(),

  tags: z.array(z.string()).default([]),

  featured: z.boolean().default(false),

  draft: z.boolean().default(false),

  publishedAt: z.date(),

  updatedAt: z.date().optional(),

  language: z.enum(["en", "km"]),

  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});