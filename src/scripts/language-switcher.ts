import { navigate } from "astro:transitions/client";
import { switchLanguage } from "../i18n/switchLanguage";


export function initLanguageSwitcher() {

  const current =
    document.querySelector<HTMLButtonElement>(
      ".language-current"
    );

  const dropdown =
    document.querySelector<HTMLElement>(
      ".language-dropdown"
    );

  if (!current || !dropdown) return;


  /* =========================
     Toggle dropdown
  ========================= */

  current.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      const isOpen =
        dropdown.classList.toggle("open");

      current.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  /* =========================
     Close dropdown
  ========================= */

  document.addEventListener(
    "click",
    () => {

      dropdown.classList.remove("open");

      current.setAttribute(
        "aria-expanded",
        "false"
      );

    }
  );


  /* =========================
     Language switching
  ========================= */

  const languageButtons =
    document.querySelectorAll<HTMLButtonElement>(
      ".language-option"
    );


  languageButtons.forEach((button) => {

    button.addEventListener(
      "click",
      async (event) => {

        event.stopPropagation();

        const language =
          button.dataset.language as
            | "en"
            | "km"
            | undefined;

        if (!language) return;


        const target =
          switchLanguage(
            window.location.pathname,
            language
          );


        /* Close dropdown before navigation */

        dropdown.classList.remove("open");

        current.setAttribute(
          "aria-expanded",
          "false"
        );


        /* Avoid unnecessary navigation */

        if (
          target ===
          window.location.pathname
        ) {
          return;
        }


        /*
         * Astro ClientRouter navigation.
         *
         * No full page reload.
         */

        await navigate(target);

      }
    );

  });

}