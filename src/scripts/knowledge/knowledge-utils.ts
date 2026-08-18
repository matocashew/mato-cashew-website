export function matchesFilters(
  card: HTMLElement,
  keyword: string,
  selectedCategory: string,
  selectedTag: string
): boolean {
  if (!(card instanceof HTMLElement)) {
    return false;
  }

  const searchableText = [
    card.dataset.title ?? "",
    card.dataset.description ?? "",
    card.dataset.category ?? "",
    card.dataset.tags ?? "",
  ]
    .join(" ")
    .toLowerCase();

  const matchesKeyword =
    keyword === "" || searchableText.includes(keyword);

  const matchesCategory =
    selectedCategory === "all" ||
    (card.dataset.category ?? "") === selectedCategory;

  const cardTags = (card.dataset.tags ?? "").split(" ");

  const matchesTag =
    selectedTag === "" ||
    cardTags.includes(selectedTag);

  return (
    matchesKeyword &&
    matchesCategory &&
    matchesTag
  );
}

export function getResultCounterMessage(
  visibleCount: number,
  totalArticles: number,
  keyword: string,
  selectedCategory: string,
  selectedTag: string
): string {
  const hasFilters =
    keyword !== "" ||
    selectedCategory !== "all" ||
    selectedTag !== "";

  if (visibleCount === 0) {
    return "No matching articles";
  }

  if (!hasFilters && visibleCount >= totalArticles) {
    return `Showing all ${totalArticles} articles`;
  }

  return `Showing ${visibleCount} of ${totalArticles} articles`;
}

export function getNoResultsMessage(
  keyword: string,
  selectedCategory: string,
  selectedTag: string
): string {
  const hasKeyword = keyword !== "";
  const hasCategory = selectedCategory !== "all";
  const hasTag = selectedTag !== "";

  if (!hasKeyword && !hasCategory && !hasTag) {
    return "Try another search term or choose a different category.";
  }

  const filters: string[] = [];

  if (hasKeyword) {
    filters.push(`"${keyword}"`);
  }

  if (hasCategory) {
    filters.push(selectedCategory);
  }

  if (hasTag) {
    filters.push(`#${selectedTag}`);
  }

  return `No articles match ${filters.join(", ")}. Try different filters.`;
}

export function shouldShowFeaturedArticle(
  featuredCard: HTMLElement | null,
  keyword: string,
  selectedCategory: string,
  selectedTag: string
): boolean {
  if (!featuredCard) {
    return false;
  }

  const featuredText = [
    featuredCard.dataset.title ?? "",
    featuredCard.dataset.description ?? "",
    featuredCard.dataset.category ?? "",
    featuredCard.dataset.tags ?? "",
  ].join(" ");

  const matchesKeyword =
    keyword === "" || featuredText.includes(keyword);

  const matchesCategory =
    selectedCategory === "all" ||
    (featuredCard.dataset.category ?? "") === selectedCategory;

  const featuredTags =
    (featuredCard.dataset.tags ?? "").split(" ");

  const matchesTag =
    selectedTag === "" ||
    featuredTags.includes(selectedTag);

  return (
    matchesKeyword &&
    matchesCategory &&
    matchesTag
  );
}