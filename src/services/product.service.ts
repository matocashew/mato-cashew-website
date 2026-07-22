import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type ProductEntry = CollectionEntry<"products">;

/**
 * Get all published products.
 */
export async function getProducts(): Promise<ProductEntry[]> {
  return getCollection(
    "products",
    ({ data }) => !data.draft
  );
}

/**
 * Get featured products.
 */
export async function getFeaturedProducts(
  limit?: number
): Promise<ProductEntry[]> {

  const products = await getCollection(
    "products",
    ({ data }) =>
      !data.draft &&
      data.featured
  );

  return limit
    ? products.slice(0, limit)
    : products;
}

/**
 * Get products by category.
 */
export async function getProductsByCategory(
  category: ProductEntry["data"]["category"]
): Promise<ProductEntry[]> {

  const products = await getProducts();

  return products.filter(
    product =>
      product.data.category === category
  );
}

/**
 * Get product by slug.
 */
export async function getProductBySlug(
  slug: string
): Promise<ProductEntry | undefined> {

  const products = await getProducts();

  return products.find(
    product =>
      product.data.slug === slug
  );
}

/**
 * Get related products.
 */
export async function getRelatedProducts(
  slug: string,
  limit = 3
): Promise<ProductEntry[]> {

  const product = await getProductBySlug(slug);

  if (!product) {
    return [];
  }

  const products = await getProducts();

  return products
    .filter(item =>
      item.data.slug !== slug &&
      item.data.category === product.data.category
    )
    .slice(0, limit);
}

/**
 * Get total number of published products.
 */
export async function getProductCount(): Promise<number> {
  const products = await getProducts();
  return products.length;
}

/**
 * Check whether a product exists.
 */
export async function hasProduct(
  slug: string
): Promise<boolean> {

  const product =
    await getProductBySlug(slug);

  return product !== undefined;

}