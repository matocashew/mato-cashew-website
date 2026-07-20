import { switchLanguage } from "../i18n/switchLanguage";
export function initLanguageSwitcher() {

  const current =
    document.querySelector(".language-current");

  const dropdown =
    document.querySelector(".language-dropdown");

  if (!current || !dropdown) return;

  // Toggle dropdown
  current.addEventListener("click", (event) => {

    event.stopPropagation();

    dropdown.classList.toggle("open");

    const expanded =
      current.getAttribute("aria-expanded") === "true";

    current.setAttribute(
      "aria-expanded",
      (!expanded).toString()
    );

  });

  // Close dropdown
  document.addEventListener("click", () => {

    dropdown.classList.remove("open");

    current.setAttribute(
      "aria-expanded",
      "false"
    );

  });

  // Language switching
  const languageButtons =
    document.querySelectorAll(".language-option");

  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const language =
        button.getAttribute("data-language");

      if (!language) return;

      const target = switchLanguage(
        window.location.pathname,
        language as "en" | "km"
      );

      window.location.href = target;
    });

  });

}