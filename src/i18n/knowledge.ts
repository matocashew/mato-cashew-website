import type { Language } from "./config";


/* =========================================================
   KNOWLEDGE CATEGORY KEYS
   ========================================================= */

export type KnowledgeCategoryKey =
  | "cashew-knowledge"
  | "product-quality"
  | "processing"
  | "business-export";


/* =========================================================
   KNOWLEDGE TRANSLATIONS
   ========================================================= */

const knowledgeTranslations = {

  en: {

    /* -----------------------------------------------------
       Knowledge Index Hero
       ----------------------------------------------------- */

    eyebrow: "MATO CASHEW KNOWLEDGE",

    titlePrimary: "Cambodian Cashew",
    titleSecondary: "Knowledge Center",

    description:
      "Explore practical knowledge about Cambodian cashews — from cultivation and processing to quality, grading, packaging, storage, and export preparation.",


    /* -----------------------------------------------------
       Topic Chips
       ----------------------------------------------------- */

    topics: {
      knowledge: "Cashew Knowledge",
      quality: "Product Quality",
      processing: "Processing",
      business: "Business & Export",
    },


    /* -----------------------------------------------------
       Search / Toolbar
       ----------------------------------------------------- */

    searchPlaceholder:
      "Search knowledge articles...",

    showingAll:
      "Showing all {count} articles",

    showingFiltered:
      "Showing {count} articles",
    
    showingCount:
      "Showing {visible} of {total} articles",

    clearFilters:
      "Clear Filters",

    noResultsTitle:
      "No articles found",

    noResultsDescription:
      "Try changing your search or filters.",


    /* -----------------------------------------------------
       Statistics
       ----------------------------------------------------- */

    stats: {
      articles: "Articles",
      categories: "Categories",
      tags: "Tags",
    },


    /* -----------------------------------------------------
       Browse Sections
       ----------------------------------------------------- */

    browseByCategory:
      "Browse by Category",

    browseByTags:
      "Browse by Tags",

    all:
      "All",

    showMoreTags:
      "Show More Tags",

    showLessTags:
      "Show Less Tags",


    /* -----------------------------------------------------
       Article Sections
       ----------------------------------------------------- */

    featuredArticle:
      "Featured Article",

    latestArticles:
      "Latest Articles",

    loadMoreArticles:
      "Load More Articles",

    readMore:
      "Read More",

    readArticle:
      "Read Article",


    /* -----------------------------------------------------
       Article Detail
       ----------------------------------------------------- */

    contents:
      "Contents",

    published:
      "Published",

    updated:
      "Updated",

    readingTime:
      "Reading Time",

    minuteRead:
      "{count} min read",

    author:
      "Author",


    /* -----------------------------------------------------
       Article Navigation
       ----------------------------------------------------- */

    previousArticle:
      "Previous Article",

    nextArticle:
      "Next Article",

    relatedArticles:
      "Related Articles",

    backToKnowledge:
      "Back to Knowledge Center",


    /* -----------------------------------------------------
       Home Knowledge
       ----------------------------------------------------- */

    homeTag:
      "Cashew Knowledge",

    homeTitle:
      "Learn More About Cambodian Cashew",

    homeDescription:
      "Explore practical knowledge about Cambodian cashew, from grading and processing to quality, storage, and the cashew value chain.",

    exploreKnowledgeCenter:
      "Explore Knowledge Center",

  },


  km: {

    /* -----------------------------------------------------
       Knowledge Index Hero
       ----------------------------------------------------- */

    eyebrow: "ចំណេះដឹង ចន្ទីមាតុភូមិ",

    titlePrimary: "ស្វាយចន្ទីកម្ពុជា",
    titleSecondary: "មជ្ឈមណ្ឌលចំណេះដឹង",

    description:
      "ស្វែងយល់ពីចំណេះដឹងជាក់ស្តែងអំពីស្វាយចន្ទីកម្ពុជា ចាប់ពីការដាំដុះ ការកែច្នៃ គុណភាព ការចាត់ថ្នាក់ ការវេចខ្ចប់ ការរក្សាទុក រហូតដល់ការរៀបចំសម្រាប់នាំចេញ។",


    /* -----------------------------------------------------
       Topic Chips
       ----------------------------------------------------- */

    topics: {
      knowledge: "ចំណេះដឹងអំពីស្វាយចន្ទី",
      quality: "គុណភាពផលិតផល",
      processing: "ការកែច្នៃ",
      business: "អាជីវកម្ម និងការនាំចេញ",
    },


    /* -----------------------------------------------------
       Search / Toolbar
       ----------------------------------------------------- */

    searchPlaceholder:
      "ស្វែងរកអត្ថបទចំណេះដឹង...",

    showingAll:
      "បង្ហាញអត្ថបទទាំងអស់ {count}",

    showingFiltered:
      "បង្ហាញ {count} អត្ថបទ",
    
    showingCount:
      "បង្ហាញ {visible} ក្នុងចំណោម {total} អត្ថបទ",

    clearFilters:
      "សម្អាតតម្រង",

    noResultsTitle:
      "រកមិនឃើញអត្ថបទ",

    noResultsDescription:
      "សូមសាកល្បងពាក្យស្វែងរកផ្សេង ឬជ្រើសរើសប្រភេទផ្សេងទៀត។",


    /* -----------------------------------------------------
       Statistics
       ----------------------------------------------------- */

    stats: {
      articles: "អត្ថបទ",
      categories: "ប្រភេទ",
      tags: "ស្លាក",
    },


    /* -----------------------------------------------------
       Browse Sections
       ----------------------------------------------------- */

    browseByCategory:
      "ស្វែងរកតាមប្រភេទ",

    browseByTags:
      "ស្វែងរកតាមស្លាក",

    all:
      "ទាំងអស់",

    showMoreTags:
      "បង្ហាញស្លាកបន្ថែម",

    showLessTags:
      "បង្ហាញស្លាកតិច",


    /* -----------------------------------------------------
       Article Sections
       ----------------------------------------------------- */

    featuredArticle:
      "អត្ថបទពិសេស",

    latestArticles:
      "អត្ថបទថ្មីៗ",

    loadMoreArticles:
      "បង្ហាញអត្ថបទបន្ថែម",

    readMore:
      "អានបន្ថែម",

    readArticle:
      "អានអត្ថបទ",


    /* -----------------------------------------------------
       Article Detail
       ----------------------------------------------------- */

    contents:
      "មាតិកា",

    published:
      "ចេញផ្សាយ",

    updated:
      "កែប្រែចុងក្រោយ",

    readingTime:
      "រយៈពេលអាន",

    minuteRead:
      "អានប្រហែល {count} នាទី",

    author:
      "អ្នកនិពន្ធ",


    /* -----------------------------------------------------
       Article Navigation
       ----------------------------------------------------- */

    previousArticle:
      "អត្ថបទមុន",

    nextArticle:
      "អត្ថបទបន្ទាប់",

    relatedArticles:
      "អត្ថបទពាក់ព័ន្ធ",

    backToKnowledge:
      "ត្រឡប់ទៅមជ្ឈមណ្ឌលចំណេះដឹង",


    /* -----------------------------------------------------
       Home Knowledge
       ----------------------------------------------------- */

    homeTag:
      "ចំណេះដឹងអំពីស្វាយចន្ទី",

    homeTitle:
      "ស្វែងយល់បន្ថែមអំពីស្វាយចន្ទីកម្ពុជា",

    homeDescription:
      "ស្វែងយល់ពីចំណេះដឹងជាក់ស្តែងអំពីស្វាយចន្ទីកម្ពុជា ចាប់ពីការចាត់ថ្នាក់ ការកែច្នៃ គុណភាព ការរក្សាទុក និងខ្សែសង្វាក់តម្លៃស្វាយចន្ទី។",

    exploreKnowledgeCenter:
      "ស្វែងយល់មជ្ឈមណ្ឌលចំណេះដឹង",

  },

} as const;


/* =========================================================
   CATEGORY TRANSLATIONS
   ========================================================= */

export const knowledgeCategoryTranslations:
  Record<
    KnowledgeCategoryKey,
    Record<Language, string>
  > = {

  "cashew-knowledge": {
    en: "Cashew Knowledge",
    km: "ចំណេះដឹងអំពីស្វាយចន្ទី",
  },

  "product-quality": {
    en: "Product Quality",
    km: "គុណភាពផលិតផល",
  },

  "processing": {
    en: "Processing",
    km: "ការកែច្នៃ",
  },

  "business-export": {
    en: "Business & Export",
    km: "អាជីវកម្ម និងការនាំចេញ",
  },

};


/* =========================================================
   LEGACY CATEGORY MAPPING
   ========================================================= */

/*
 * Existing English articles currently use display labels
 * such as "Cashew Knowledge".
 *
 * During V2 migration we support both the old values
 * and the new stable keys.
 */

const legacyCategoryMap:
  Record<string, KnowledgeCategoryKey> = {

  "Cashew Knowledge":
    "cashew-knowledge",

  "Product Quality":
    "product-quality",

  "Processing":
    "processing",

  "Business & Export":
    "business-export",

};


/* =========================================================
   HELPERS
   ========================================================= */

export function getKnowledgeTranslations(
  language: Language
) {
  return knowledgeTranslations[language];
}


export function normalizeKnowledgeCategory(
  category: string
): KnowledgeCategoryKey | undefined {

  if (
    category in
    knowledgeCategoryTranslations
  ) {
    return category as KnowledgeCategoryKey;
  }

  return legacyCategoryMap[category];
}


export function getKnowledgeCategoryLabel(
  category: string,
  language: Language
): string {

  const key =
    normalizeKnowledgeCategory(category);

  if (!key) {
    return category;
  }

  return knowledgeCategoryTranslations[
    key
  ][language];
}


/* =========================================================
   STRING INTERPOLATION
   ========================================================= */

export function formatKnowledgeText(
  template: string,
  values: Record<
    string,
    string | number
  >
): string {

  return template.replace(
    /\{(\w+)\}/g,
    (_, key: string) => {

      const value = values[key];

      return value !== undefined
        ? String(value)
        : `{${key}}`;
    }
  );
}