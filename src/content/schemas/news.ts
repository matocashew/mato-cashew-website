import { z } from "astro/zod";

export const newsSchema = z.object({
  title: z.string(),
  description: z.string(),
  excerpt: z.string(),

  language: z.enum(["en", "km"]),
  translationKey: z.string(),

  category: z.string(),
  tags: z.array(z.string()).default([]),

  publishedAt: z.date(),
  eventDate: z.date().optional(),

  sourceName: z.string(),
  sourceUrl: z.url(),

  heroImage: z.string().optional(),

  draft: z.boolean().default(true),
  featured: z.boolean().default(false),

  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }).optional(),
});