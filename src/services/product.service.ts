import { products } from "../data/products";

export function getProducts() {

  return products;

}

export function getFeaturedProducts() {

  return products.filter(product => product.featured);

}

export function getProductBySlug(slug: string) {

  return products.find(product => product.slug === slug);

}

export function getProductsByCategory(category: "Retail" | "Wholesale") {

  return products.filter(product => product.category === category);

}