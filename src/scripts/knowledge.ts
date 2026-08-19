import { updateQueryParameter }
  from "./knowledge/url";

import {
  matchesFilters,
  shouldShowFeaturedArticle,
} from "./knowledge/knowledge-utils";

import {
  formatKnowledgeText,
  getKnowledgeTranslations,
} from "../i18n/knowledge";

import type { Language }
  from "../i18n/config";


export default function initKnowledge() {

  /* =======================================================
     LANGUAGE
     ======================================================= */

  const pageLanguage: Language =
    document.documentElement.lang === "km"
      ? "km"
      : "en";

  const t =
    getKnowledgeTranslations(
      pageLanguage
    );


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const inputElement =
    document.getElementById(
      "knowledge-search"
    );

  if (
    !(inputElement instanceof HTMLInputElement)
  ) {
    return;
  }

  const input = inputElement;

  const categoryButtons =
    document.querySelectorAll(
      ".category-chip"
    );

  const clearButton =
    document.getElementById(
      "knowledge-search-clear"
    );

  const cards =
    document.querySelectorAll<HTMLElement>(
      ".knowledge-article-card"
    );

  const tagElements =
    document.querySelectorAll(
      ".card-tag"
    );

  const globalTagButtons =
    document.querySelectorAll(
      ".tag-filter-chip"
    );

  const tagFilterContainer =
    document.getElementById(
      "knowledge-tag-filter"
    );

  const tagsToggleButton =
    document.getElementById(
      "knowledge-tags-toggle"
    );

  const noResults =
    document.getElementById(
      "knowledge-no-results"
    );

  const noResultsMessage =
    document.getElementById(
      "knowledge-no-results-message"
    );

  const clearFiltersButton =
    document.getElementById(
      "knowledge-clear-filters"
    );

  const resultCounter =
    document.getElementById(
      "knowledge-search-result-count"
    );

  const loadMoreButton =
    document.getElementById(
      "knowledge-load-more"
    );

  const featuredSection =
    document.getElementById(
      "featured-article-section"
    );

  const featuredCard =
    document.querySelector<HTMLElement>(
      ".featured-knowledge-card"
    );

  /* =======================================================
     STATE
     ======================================================= */

  let selectedCategory = "all";
  let selectedTag = "";

  const ARTICLES_PER_PAGE = 6;

  let visibleLimit =
    ARTICLES_PER_PAGE;


  /* =======================================================
     URL STATE
     ======================================================= */

  const urlParams =
    new URLSearchParams(
      window.location.search
    );

  const initialSearch =
    (
      urlParams.get("search") ?? ""
    )
      .trim()
      .toLowerCase();

  selectedCategory =
    (
      urlParams.get("category") ??
      "all"
    ).toLowerCase();

  selectedTag =
    (
      urlParams.get("tag") ?? ""
    ).toLowerCase();

  input.value =
    initialSearch;


  /* =======================================================
     FEATURED ARTICLE
     ======================================================= */

  function updateFeaturedArticle(
    keyword: string
  ): boolean {

    if (
      !(featuredSection instanceof HTMLElement) ||
      !(featuredCard instanceof HTMLElement)
    ) {
      return false;
    }

    const shouldShow =
      shouldShowFeaturedArticle(
        featuredCard,
        keyword,
        selectedCategory,
        selectedTag
      );

    featuredSection.hidden =
      !shouldShow;

    return shouldShow;
  }


  /* =======================================================
     RESULT COUNTER
     ======================================================= */

  function updateResultCounter(
    displayedCount: number,
    totalMatched: number,
    keyword: string
  ): void {

    if (
      !(resultCounter instanceof HTMLElement)
    ) {
      return;
    }

    const hasFilters =
      keyword !== "" ||
      selectedCategory !== "all" ||
      selectedTag !== "";

    /*
     * All matching articles currently visible.
     */
    if (
      displayedCount >= totalMatched
    ) {

      resultCounter.textContent =
        formatKnowledgeText(
          hasFilters
            ? t.showingFiltered
            : t.showingAll,
          {
            count: totalMatched,
          }
        );

      return;
    }

    /*
     * Load More is limiting the number
     * currently displayed.
     */
    resultCounter.textContent =
      formatKnowledgeText(
        t.showingCount,
        {
          visible: displayedCount,
          total: totalMatched,
        }
      );
  }


  /* =======================================================
     NO RESULTS
     ======================================================= */

  function updateNoResults(
    totalMatched: number
  ): void {

    if (
      !(noResults instanceof HTMLElement)
    ) {
      return;
    }

    noResults.hidden =
      totalMatched !== 0;
  }


  function updateNoResultsMessage(): void {

    if (
      !(noResultsMessage instanceof HTMLElement)
    ) {
      return;
    }

    noResultsMessage.textContent =
      t.noResultsDescription;
  }


  /* =======================================================
     FILTER ARTICLES
     ======================================================= */

  function filterArticles(
    resetLimit = false
  ): void {

    const keyword =
      input.value
        .trim()
        .toLowerCase();

    if (resetLimit) {
      visibleLimit =
        ARTICLES_PER_PAGE;
    }


    /* -----------------------------------------------------
       Clear-search button
       ----------------------------------------------------- */

    if (
      clearButton instanceof
      HTMLButtonElement
    ) {
      clearButton.hidden =
        keyword === "";
    }


    /* -----------------------------------------------------
       Latest article cards
       ----------------------------------------------------- */

    const matchedCards:
      HTMLElement[] = [];

    cards.forEach((card) => {

      if (
        !(card instanceof HTMLElement)
      ) {
        return;
      }

      const matched =
        matchesFilters(
          card,
          keyword,
          selectedCategory,
          selectedTag
        );

      if (matched) {
        matchedCards.push(card);
      }

      card.style.display =
        "none";
    });


    matchedCards.forEach(
      (card, index) => {

        if (
          index < visibleLimit
        ) {
          card.style.display = "";
        }

      }
    );


    /* -----------------------------------------------------
       Featured article
       ----------------------------------------------------- */

    const featuredVisible =
      updateFeaturedArticle(
        keyword
      );


    /* -----------------------------------------------------
       Counts
       ----------------------------------------------------- */

    const latestMatched =
      matchedCards.length;

    const latestDisplayed =
      Math.min(
        visibleLimit,
        latestMatched
      );

    const featuredCount =
      featuredVisible ? 1 : 0;

    /*
     * IMPORTANT:
     * Featured article must count as
     * a knowledge search result too.
     */
    const totalMatched =
      latestMatched +
      featuredCount;

    const displayedCount =
      latestDisplayed +
      featuredCount;


    /* -----------------------------------------------------
       UI state
       ----------------------------------------------------- */

    updateNoResults(
      totalMatched
    );

    updateNoResultsMessage();

    updateResultCounter(
      displayedCount,
      totalMatched,
      keyword
    );


    /* -----------------------------------------------------
       Load More
       ----------------------------------------------------- */

    if (
      loadMoreButton instanceof
      HTMLButtonElement
    ) {

      /*
       * Load More applies only to
       * Latest Article cards.
       */
      loadMoreButton.hidden =
        latestMatched === 0 ||
        latestDisplayed >=
          latestMatched;
    }
  }


  /* =======================================================
     LOAD MORE
     ======================================================= */

  if (
    loadMoreButton instanceof
    HTMLButtonElement
  ) {

    loadMoreButton.addEventListener(
      "click",
      () => {

        visibleLimit +=
          ARTICLES_PER_PAGE;

        filterArticles();

      }
    );
  }


  /* =======================================================
     SEARCH
     ======================================================= */

  input.addEventListener(
    "input",
    () => {

      const keyword =
        input.value.trim();

      updateQueryParameter(
        "search",
        keyword
      );

      filterArticles(true);

    }
  );


  /* =======================================================
     CLEAR SEARCH
     ======================================================= */

  if (
    clearButton instanceof
    HTMLButtonElement
  ) {

    clearButton.addEventListener(
      "click",
      () => {

        input.value = "";

        updateQueryParameter(
          "search",
          ""
        );

        filterArticles(true);

        input.focus();

      }
    );
  }


  /* =======================================================
     CATEGORY SELECTION
     ======================================================= */

  function updateCategorySelection(
    category: string
  ): void {

    categoryButtons.forEach(
      (button) => {

        if (
          !(button instanceof
            HTMLButtonElement)
        ) {
          return;
        }

        const buttonCategory =
          button.dataset.category ??
          "all";

        const isActive =
          buttonCategory ===
          category;

        button.classList.toggle(
          "active",
          isActive
        );

        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );

      }
    );
  }


  categoryButtons.forEach(
    (button) => {

      if (
        !(button instanceof
          HTMLButtonElement)
      ) {
        return;
      }

      button.addEventListener(
        "click",
        () => {

          selectedCategory =
            button.dataset.category ??
            "all";

          updateQueryParameter(
            "category",
            selectedCategory === "all"
              ? ""
              : selectedCategory
          );

          updateCategorySelection(
            selectedCategory
          );

          filterArticles(true);

        }
      );
    }
  );


  /* =======================================================
     TAG SELECTION
     ======================================================= */

  function updateTagSelection(): void {

    tagElements.forEach(
      (tag) => {

        if (
          !(tag instanceof HTMLElement)
        ) {
          return;
        }

        const isActive =
          selectedTag !== "" &&
          (
            tag.dataset.tag ?? ""
          ) === selectedTag;

        tag.classList.toggle(
          "active",
          isActive
        );

      }
    );


    globalTagButtons.forEach(
      (button) => {

        if (
          !(button instanceof
            HTMLButtonElement)
        ) {
          return;
        }

        const buttonTag =
          button.dataset.tag ?? "";

        const isActive =
          buttonTag === selectedTag;

        if (
          selectedTag === "" &&
          buttonTag === ""
        ) {

          button.classList.add(
            "active"
          );

          button.setAttribute(
            "aria-pressed",
            "true"
          );

          return;
        }

        button.classList.toggle(
          "active",
          isActive
        );

        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );

      }
    );
  }


  globalTagButtons.forEach(
    (button) => {

      if (
        !(button instanceof
          HTMLButtonElement)
      ) {
        return;
      }

      button.addEventListener(
        "click",
        () => {

          const clickedTag =
            button.dataset.tag ?? "";

          selectedTag =
            selectedTag ===
              clickedTag
              ? ""
              : clickedTag;

          updateQueryParameter(
            "tag",
            selectedTag
          );

          updateTagSelection();

          filterArticles(true);

        }
      );
    }
  );


  /* =======================================================
     CLEAR ALL FILTERS
     ======================================================= */

  if (
    clearFiltersButton instanceof
    HTMLButtonElement
  ) {

    clearFiltersButton.addEventListener(
      "click",
      () => {

        input.value = "";

        selectedCategory =
          "all";

        selectedTag = "";

        updateQueryParameter(
          "search",
          ""
        );

        updateQueryParameter(
          "category",
          ""
        );

        updateQueryParameter(
          "tag",
          ""
        );

        updateCategorySelection(
          "all"
        );

        updateTagSelection();

        filterArticles(true);

        input.focus();

      }
    );
  }


  /* =======================================================
     SHOW MORE / LESS TAGS
     ======================================================= */

  if (
    tagFilterContainer instanceof
      HTMLElement &&
    tagsToggleButton instanceof
      HTMLButtonElement
  ) {

    tagsToggleButton.addEventListener(
      "click",
      () => {

        const isExpanded =
          tagFilterContainer
            .classList
            .toggle(
              "is-expanded"
            );

        tagsToggleButton.textContent =
          isExpanded
            ? t.showLessTags
            : t.showMoreTags;

        tagsToggleButton.setAttribute(
          "aria-expanded",
          String(isExpanded)
        );

      }
    );
  }


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  updateCategorySelection(
    selectedCategory
  );

  updateTagSelection();

  filterArticles();
}