import type { ProductTranslation } from "./ProductTranslation";
import type { ProductImage } from "./ProductImage";
import type { ProductPackaging } from "./ProductPackaging";
import type { ProductSpecification } from "./ProductSpecification";
import type { ProductSEO } from "./ProductSEO";

export interface Product {

  id: number;

  slug: string;

  sku: string;

  category: "Retail" | "Wholesale";

  featured: boolean;

  image: string;

  gallery: ProductImage[];

  weight: string;

  badge: string;

  rating: string;

  packaging: ProductPackaging[];

  specifications: ProductSpecification[];

  translations: ProductTranslation[];

  seo: ProductSEO;

  status: "draft" | "published" | "archived";

  tags: string[];

}