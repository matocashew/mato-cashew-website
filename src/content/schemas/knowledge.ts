import { z } from "astro:content";

import { baseContentSchema } from "./baseContent";

export const knowledgeSchema =
  baseContentSchema.extend({

    category: z.string(),

    readingTime: z.number(),

    relatedProducts:
      z.array(z.string()).default([]),

  });