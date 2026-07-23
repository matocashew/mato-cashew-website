import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Get all published resources.
 */
export async function getResources(): Promise<
  CollectionEntry<"resources">[]
> {

  return await getCollection(
    "resources",
    ({ data }) => !data.draft
  );

}

/**
 * Get featured resources.
 */
export async function getFeaturedResources(): Promise<
  CollectionEntry<"resources">[]
> {

  return await getCollection(
    "resources",
    ({ data }) =>
      !data.draft &&
      data.featured
  );

}

/**
 * Get resource by slug.
 */
export async function getResourceBySlug(
  slug: string
): Promise<
  CollectionEntry<"resources"> | undefined
> {

  const resources =
    await getResources();

    return resources.find(
      resource =>
        resource.data.slug === slug
    );

}

/**
 * Get related resources.
 */
export async function getRelatedResources(
  slug: string,
  limit = 3
): Promise<
  CollectionEntry<"resources">[]
> {

  const current =
    await getResourceBySlug(slug);

  if (!current) {

    return [];

  }

  const resources =
    await getResources();

  return resources

    .filter(resource =>

      resource.data.slug !== slug &&

      resource.data.category ===
      current.data.category

    )

    .slice(0, limit);

}