import { updateQueryParameter } from "./knowledge/url";
export default function initKnowledge() {
  const input = document.getElementById("knowledge-search");
  const categoryButtons = document.querySelectorAll(".category-chip");
  const clearButton = document.getElementById("knowledge-search-clear");

  let selectedCategory = "all";
  let selectedTag = "";

  const urlParams = new URLSearchParams(window.location.search);

  let initialSearch =
    (urlParams.get("search") ?? "").trim().toLowerCase();

  selectedCategory =
    (urlParams.get("category") ?? "all").toLowerCase();

  selectedTag =
    (urlParams.get("tag") ?? "").toLowerCase();

  if (!(input instanceof HTMLInputElement)) return;

  input.value = initialSearch;

  const cards =
document.querySelectorAll<HTMLElement>(
  ".knowledge-article-card"
);
  const tagElements =
  document.querySelectorAll(".card-tag");

const globalTagButtons =
  document.querySelectorAll(".tag-filter-chip");
  const noResults = document.getElementById("knowledge-no-results");
  const noResultsMessage = document.getElementById("knowledge-no-results-message");
  const clearFiltersButton = document.getElementById("knowledge-clear-filters");
  const resultCounter = document.getElementById("knowledge-search-result-count");
  const featuredSection = document.getElementById("featured-article-section");
  const featuredCard =
    document.querySelector<HTMLElement>(
    ".featured-knowledge-card"
    );

function getResultCounterMessage(
  visibleCount: number,
  totalArticles: number,
  keyword: string
): string {
  const hasFilters =
    keyword !== "" ||
    selectedCategory !== "all" ||
    selectedTag !== "";

  if (visibleCount === 0) {
    return "No matching articles";
  }

  if (!hasFilters) {
    return `Showing all ${totalArticles} articles`;
  }

  return `Showing ${visibleCount} of ${totalArticles} articles`;
}
function updateResultCounter(
  visibleCount: number,
  totalArticles: number,
  keyword: string
): void {
  if (!(resultCounter instanceof HTMLElement)) return;

  resultCounter.textContent =
    getResultCounterMessage(
      visibleCount,
      totalArticles,
      keyword
    );
}

function updateNoResults(
  visibleCount: number
): void {
  if (!(noResults instanceof HTMLElement)) return;

  noResults.hidden = visibleCount !== 0;
}

function getNoResultsMessage(
  keyword: string
): string {
  const hasKeyword = keyword !== "";
  const hasCategory = selectedCategory !== "all";
  const hasTag = selectedTag !== "";

  if (!hasKeyword && !hasCategory && !hasTag) {
    return "Try another search term or choose a different category.";
  }

  const filters = [];

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

function updateNoResultsMessage(
  keyword: string
): void {
  if (!(noResultsMessage instanceof HTMLElement)) return;

    noResultsMessage.textContent =
      getNoResultsMessage(keyword);
}
function shouldShowFeaturedArticle(
  keyword: string
): boolean {
  const featuredText = [
    featuredCard?.dataset.title ?? "",
    featuredCard?.dataset.description ?? "",
    featuredCard?.dataset.category ?? "",
    featuredCard?.dataset.tags ?? "",
  ].join(" ");

  const matchesKeyword =
    keyword === "" || featuredText.includes(keyword);

  const matchesCategory =
    selectedCategory === "all" ||
    (featuredCard?.dataset.category ?? "") === selectedCategory;

  const featuredTags =
    (featuredCard?.dataset.tags ?? "").split(" ");

  const matchesTag =
    selectedTag === "" ||
    featuredTags.includes(selectedTag);

  return (
    matchesKeyword &&
    matchesCategory &&
    matchesTag
  );
}
function updateFeaturedArticle(
  keyword: string
): void {
  if (
    !(featuredSection instanceof HTMLElement) ||
    !(featuredCard instanceof HTMLElement)
  ) {
    return;
  }

  featuredSection.hidden =
    !shouldShowFeaturedArticle(keyword);
}

function matchesFilters(
  card: HTMLElement,
  keyword: string
): boolean {
  if (!(card instanceof HTMLElement)) return false;

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
function filterArticles(): void {
  const searchInput = input as HTMLInputElement;

  const keyword = searchInput.value.trim().toLowerCase();

  if (clearButton instanceof HTMLButtonElement) {
    clearButton.hidden = keyword === "";
  }

  let visibleCount = 0;

  cards.forEach((card) => {
    if (!(card instanceof HTMLElement)) return;

    const matched = matchesFilters(card, keyword);

    card.style.display = matched ? "" : "none";

    if (matched) {
      visibleCount++;
    }
  });

  updateNoResults(visibleCount);

  updateNoResultsMessage(keyword);

  updateResultCounter(
    visibleCount,
    cards.length,
    keyword
  );

  updateFeaturedArticle(keyword);
}
input.addEventListener("input", () => {

  const keyword = input.value.trim();

  updateQueryParameter("search", keyword);

  filterArticles();

});

  if (
    input instanceof HTMLInputElement &&
    clearButton instanceof HTMLButtonElement
  ) {
    clearButton.addEventListener("click", () => {
      input.value = "";

      filterArticles();

      input.focus();
    });
  }
  if (categoryButtons.length > 0) {
    categoryButtons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;

      button.addEventListener("click", () => {
        selectedCategory = button.dataset.category ?? "all";

        updateQueryParameter(
          "category",
          selectedCategory === "all"
            ? ""
            : selectedCategory
        );

        categoryButtons.forEach((chip) => {
          if (!(chip instanceof HTMLButtonElement)) return;

          const isActive = chip === button;

          chip.classList.toggle("active", isActive);
          chip.setAttribute(
            "aria-pressed",
            isActive ? "true" : "false"
          );
        });

        filterArticles();
      });
    });
  }
  function updateCategorySelection(
  category: string
): void {
    categoryButtons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;

      const buttonCategory =
        button.dataset.category ?? "all";

      const isActive =
        buttonCategory === category;

      button.classList.toggle("active", isActive);

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });
  }
  function updateTagSelection() {

    tagElements.forEach((tag) => {
      if (!(tag instanceof HTMLElement)) return;

      const isActive =
        (tag.dataset.tag ?? "") === selectedTag;

      tag.classList.toggle("active", isActive);
      tag.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });

    globalTagButtons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;

      const buttonTag =
        button.dataset.tag ?? "";

      const isActive =
        buttonTag === selectedTag;

      if (selectedTag === "" && buttonTag === "") {
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        return;
      }

      button.classList.toggle("active", isActive);
      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });

  }

  tagElements.forEach((tag) => {
    if (!(tag instanceof HTMLElement)) return;

    tag.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const clickedTag = tag.dataset.tag ?? "";

      selectedTag =
        selectedTag === clickedTag
          ? ""
          : clickedTag;

      updateQueryParameter("tag", selectedTag);

      updateTagSelection();

      filterArticles();
    });
  });
  globalTagButtons.forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;

    button.addEventListener("click", () => {
      const clickedTag =
        button.dataset.tag ?? "";

      selectedTag =
        selectedTag === clickedTag
          ? ""
          : clickedTag;

      updateQueryParameter("tag", selectedTag);

      updateTagSelection();

      filterArticles();
    });
  });
  if (clearFiltersButton instanceof HTMLButtonElement) {
    clearFiltersButton.addEventListener("click", () => {
      input.value = "";

      selectedCategory = "all";
      selectedTag = "";

      categoryButtons.forEach((button) => {
        if (!(button instanceof HTMLButtonElement)) return;

        const isActive =
          button.dataset.category === "all";

        button.classList.toggle("active", isActive);
        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );
      });

      updateTagSelection();
      filterArticles();

      input.focus();
    });
  }

  updateCategorySelection(selectedCategory);

  updateTagSelection();

  filterArticles();
}