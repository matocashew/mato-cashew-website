import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

import type { Knowledge } from "@models/Knowledge";

function toKnowledge(
  entry: CollectionEntry<"knowledge">
): Knowledge {
  return {
    title: entry.data.title,
    slug: entry.id,

    description: entry.data.description,
    excerpt: entry.data.excerpt,

    author: entry.data.author,

    heroImage: entry.data.heroImage,

    tags: entry.data.tags,

    featured: entry.data.featured,
    draft: entry.data.draft,

    publishedAt: entry.data.publishedAt,
    updatedAt: entry.data.updatedAt,

    language: entry.data.language,

    seo: entry.data.seo,

    category: entry.data.category,
    readingTime: entry.data.readingTime,
    relatedProducts: entry.data.relatedProducts,
  };
}

export const knowledgeService = {
  async getAll(): Promise<Knowledge[]> {
    const entries = await getCollection(
      "knowledge",
      ({ data }) => !data.draft
    );

    return entries.map(toKnowledge);
  },

  async getFeatured(): Promise<Knowledge[]> {
    const articles = await this.getAll();

    return articles.filter(
      article => article.featured
    );
  },

  async getBySlug(slug: string): Promise<Knowledge | undefined> {
  const articles = await this.getAll();

    return articles.find(
      article => article.slug === slug
    );
  },
  async getEntryBySlug(
    slug: string
  ): Promise<CollectionEntry<"knowledge">> {

    const entries = await getCollection(
      "knowledge",
      ({ data }) => !data.draft
    );

    const entry = entries.find(
      entry => entry.id === slug
    );

    if (!entry) {
      throw new Error(
        `Knowledge article "${slug}" not found.`
      );
    }

    return entry;
  },
};

export default knowledgeService;