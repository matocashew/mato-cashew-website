import {
  getCollection,
  type CollectionEntry,
} from "astro:content";

import type { Knowledge }
  from "@models/Knowledge";

type KnowledgeLanguage = "en" | "km";


function normalizeSlug(
  entry: CollectionEntry<"knowledge">
): string {

  /*
   * English content currently lives at:
   *
   * knowledge/what-is-cashew.mdx
   *
   * Khmer content will live at:
   *
   * knowledge/km/what-is-cashew.mdx
   *
   * Astro entry IDs therefore may contain
   * the locale folder for Khmer.
   */

  return entry.id.replace(
    /^(en|km)\//,
    ""
  );
}


function toKnowledge(
  entry: CollectionEntry<"knowledge">
): Knowledge {

  return {
    title: entry.data.title,

    slug: normalizeSlug(entry),

    description:
      entry.data.description,

    excerpt:
      entry.data.excerpt,

    author:
      entry.data.author,

    heroImage:
      entry.data.heroImage,

    tags:
      entry.data.tags,

    featured:
      entry.data.featured,

    draft:
      entry.data.draft,

    publishedAt:
      entry.data.publishedAt,

    updatedAt:
      entry.data.updatedAt,

    language:
      entry.data.language,

    translationKey:
      entry.data.translationKey,

    seo:
      entry.data.seo,

    category:
      entry.data.category,

    readingTime:
      entry.data.readingTime,

    relatedProducts:
      entry.data.relatedProducts,
  };
}


async function getEntries(
  language?: KnowledgeLanguage
): Promise<
  CollectionEntry<"knowledge">[]
> {

  return getCollection(
    "knowledge",
    ({ data }) => {

      if (data.draft) {
        return false;
      }

      if (
        language &&
        data.language !== language
      ) {
        return false;
      }

      return true;
    }
  );
}


export const knowledgeService = {

  async getAll(
    language?: KnowledgeLanguage
  ): Promise<Knowledge[]> {

    const entries =
      await getEntries(language);

    return entries.map(toKnowledge);
  },


  async getFeatured(
    language?: KnowledgeLanguage
  ): Promise<Knowledge[]> {

    const articles =
      await this.getAll(language);

    return articles.filter(
      article => article.featured
    );
  },


  async getBySlug(
    slug: string,
    language?: KnowledgeLanguage
  ): Promise<
    Knowledge | undefined
  > {

    const articles =
      await this.getAll(language);

    return articles.find(
      article =>
        article.slug === slug
    );
  },


  async getEntryBySlug(
    slug: string,
    language?: KnowledgeLanguage
  ): Promise<
    CollectionEntry<"knowledge">
  > {

    const entries =
      await getEntries(language);

    const entry =
      entries.find(
        item =>
          normalizeSlug(item) === slug
      );

    if (!entry) {
      throw new Error(
        `Knowledge article "${slug}"` +
        (
          language
            ? ` (${language})`
            : ""
        ) +
        ` not found.`
      );
    }

    return entry;
  },


  async getByTranslationKey(
    translationKey: string,
    language: KnowledgeLanguage
  ): Promise<
    Knowledge | undefined
  > {

    const articles =
      await this.getAll(language);

    return articles.find(
      article =>
        article.translationKey ===
        translationKey
    );
  },


  async getTranslation(
    translationKey: string,
    language: KnowledgeLanguage
  ): Promise<
    Knowledge | undefined
  > {

    return this.getByTranslationKey(
      translationKey,
      language
    );
  },

};


export default knowledgeService;