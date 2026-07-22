export interface Product {

  id: number;

  slug: string;

  sku: string;

  category: "Retail" | "Wholesale";

  featured: boolean;

  image: string;

  gallery: string[];

  weight: string;

  badge: string;

  rating: string;

  packaging: string[];

  specifications: {
    moisture: string;
    broken: string;
    shelfLife: string;
    storage: string;
    certification: string;
  };

  translations: {

    en: {

      name: string;

      shortDescription: string;

      description: string;

      seoTitle: string;

      seoDescription: string;

    };

    km: {

      name: string;

      shortDescription: string;

      description: string;

      seoTitle: string;

      seoDescription: string;

    };

  };

}