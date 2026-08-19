import { z } from "astro:content";

import { baseContentSchema }
  from "./baseContent";

export const knowledgeSchema =
  baseContentSchema.extend({

    /*
     * Stable key shared by translations.
     *
     * Example:
     *
     * English:
     * translationKey: "what-is-cashew"
     *
     * Khmer:
     * translationKey: "what-is-cashew"
     */
    translationKey: z.string(),

    /*
     * Stable internal category key.
     *
     * Examples:
     * cashew-knowledge
     * product-quality
     * processing
     * business-export
     */
    category: z.string(),

    readingTime: z.number(),

    relatedProducts:
      z.array(z.string()).default([]),

  });