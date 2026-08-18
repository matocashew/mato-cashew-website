import { updateQueryParameter } from "./knowledge/url";
import {
  getResultCounterMessage,
  getNoResultsMessage,
  matchesFilters,
  shouldShowFeaturedArticle,
} from "./knowledge/knowledge-utils";
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
const tagFilterContainer =
  document.getElementById("knowledge-tag-filter");

const tagsToggleButton =
  document.getElementById("knowledge-tags-toggle");
  const noResults = document.getElementById("knowledge-no-results");
  const noResultsMessage = document.getElementById("knowledge-no-results-message");
  const clearFiltersButton = document.getElementById("knowledge-clear-filters");
  const resultCounter = document.getElementById("knowledge-search-result-count");
  const loadMoreButton = document.getElementById("knowledge-load-more");

    const ARTICLES_PER_PAGE = 6;
    let visibleLimit = ARTICLES_PER_PAGE;
  const featuredSection = document.getElementById("featured-article-section");
  const featuredCard =
    document.querySelector<HTMLElement>(
    ".featured-knowledge-card"
    );

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
      keyword,
      selectedCategory,
      selectedTag
    );
}

function updateNoResults(
  visibleCount: number
): void {
  if (!(noResults instanceof HTMLElement)) return;

  noResults.hidden = visibleCount !== 0;
}

function updateNoResultsMessage(
  keyword: string
): void {
  if (!(noResultsMessage instanceof HTMLElement)) return;

    noResultsMessage.textContent =
      getNoResultsMessage(
        keyword,
        selectedCategory,
        selectedTag
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
  const shouldShow = shouldShowFeaturedArticle(
    featuredCard,
    keyword,
    selectedCategory,
    selectedTag
  );

  featuredSection.hidden = !shouldShow;
}
function filterArticles(resetLimit = false): void {
  const searchInput = input as HTMLInputElement;
  const keyword = searchInput.value.trim().toLowerCase();

  if (resetLimit) {
    visibleLimit = ARTICLES_PER_PAGE;
  }

  if (clearButton instanceof HTMLButtonElement) {
    clearButton.hidden = keyword === "";
  }

  const matchedCards: HTMLElement[] = [];

  cards.forEach((card) => {
    if (!(card instanceof HTMLElement)) return;

    const matched = matchesFilters(
      card,
      keyword,
      selectedCategory,
      selectedTag
    );

    if (matched) {
      matchedCards.push(card);
    }

    card.style.display = "none";
  });

  matchedCards.forEach((card, index) => {
    if (index < visibleLimit) {
      card.style.display = "";
    }
  });

  const totalMatched = matchedCards.length;
  const displayedCount = Math.min(visibleLimit, totalMatched);

  updateNoResults(totalMatched);
  updateNoResultsMessage(keyword);

  updateResultCounter(
    displayedCount,
    totalMatched,
    keyword
  );

  updateFeaturedArticle(keyword);

  if (loadMoreButton instanceof HTMLButtonElement) {
    loadMoreButton.hidden =
      totalMatched === 0 ||
      displayedCount >= totalMatched;
  }
}
if (loadMoreButton instanceof HTMLButtonElement) {
  loadMoreButton.addEventListener("click", () => {
    visibleLimit += ARTICLES_PER_PAGE;
    filterArticles();
  });
}
input.addEventListener("input", () => {

  const keyword = input.value.trim();

  updateQueryParameter("search", keyword);

  filterArticles(true);

});

  if (
    input instanceof HTMLInputElement &&
    clearButton instanceof HTMLButtonElement
  ) {
    clearButton.addEventListener("click", () => {
      input.value = "";

      updateQueryParameter("search", "");

      filterArticles(true);

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

        filterArticles(true);
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
        selectedTag !== "" &&
        (tag.dataset.tag ?? "") === selectedTag;

      tag.classList.toggle("active", isActive);
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

      filterArticles(true);
    });
  });
  if (clearFiltersButton instanceof HTMLButtonElement) {
    clearFiltersButton.addEventListener("click", () => {
      input.value = "";

      selectedCategory = "all";
      selectedTag = "";

      updateQueryParameter("search", "");
      updateQueryParameter("category", "");
      updateQueryParameter("tag", "");

      updateCategorySelection("all");
      updateTagSelection();

      filterArticles(true);

      input.focus();
    });
  }

  if (
    tagFilterContainer instanceof HTMLElement &&
    tagsToggleButton instanceof HTMLButtonElement
  ) {
    tagsToggleButton.addEventListener("click", () => {
      const isExpanded =
        tagFilterContainer.classList.toggle("is-expanded");

      tagsToggleButton.textContent =
        isExpanded ? "Show Less" : "Show More Tags";

      tagsToggleButton.setAttribute(
        "aria-expanded",
        String(isExpanded)
      );
    });
  }

  updateCategorySelection(selectedCategory);

  updateTagSelection();

  filterArticles();
}