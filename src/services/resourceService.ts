import { getCollection, type CollectionEntry } from "astro:content";

export type ResourceLanguage =
  "en" | "km";

/**
 * Get all published resources.
 *
 * When language is supplied, return only resources belonging
 * to that language. Existing callers without a language keep
 * the current all-resource behavior during migration.
 */
export async function getResources(
  language?: ResourceLanguage
): Promise<
  CollectionEntry<"resources">[]
> {

  const resources = await getCollection(
    "resources",
    ({ data }) =>
      !data.draft &&
      (
        !language ||
        data.language === language
      )
  );

  return resources.sort((a, b) => {
    const dateA = new Date(a.data.publishDate).getTime();
    const dateB = new Date(b.data.publishDate).getTime();

    return (
      dateB - dateA ||
      a.data.slug.localeCompare(b.data.slug)
    );
  });

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
