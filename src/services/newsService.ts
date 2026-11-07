import { getCollection } from "astro:content";

export type NewsLanguage = "en" | "km";

export const newsService = {
  async getAll(language: NewsLanguage) {
    const entries = await getCollection(
      "news",
      ({ data }) =>
        !data.draft &&
        data.language === language
    );

    return entries
      .map((entry) => ({
        ...entry,
        slug: entry.data.slug ?? entry.data.translationKey ?? entry.id.replace(/^km\//, "").replace(/\.mdx?$/, ""),
      }))
      .sort(
        (a, b) =>
          b.data.publishedAt.getTime() -
          a.data.publishedAt.getTime()
      );
  },

  async getBySlug(
    language: NewsLanguage,
    slug: string
  ) {
    const entries = await this.getAll(language);

    return entries.find(
      (entry) => entry.slug === slug
    );
  },
};