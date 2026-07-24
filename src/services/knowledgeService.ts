import { getCollection } from "astro:content";

export const knowledgeService = {
  async getAll() {
    return getCollection(
      "knowledge",
      ({ data }) => !data.draft
    );
  },

  async getFeatured() {
    const articles = await this.getAll();

    return articles.filter(
      article => article.data.featured
    );
  },
};

export default knowledgeService;