import { navigate }
  from "astro:transitions/client";

import { switchLanguage }
  from "../i18n/switchLanguage";


export function initLanguageSwitcher() {

  const current =
    document.querySelector<HTMLButtonElement>(
      ".language-current"
    );

  const dropdown =
    document.querySelector<HTMLElement>(
      ".language-dropdown"
    );

  if (!current || !dropdown) {
    return;
  }


  /* =======================================================
     TOGGLE DROPDOWN
     ======================================================= */

  current.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      const isOpen =
        dropdown.classList.toggle(
          "open"
        );

      current.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  /* =======================================================
     CLOSE DROPDOWN
     ======================================================= */

  document.addEventListener(
    "click",
    () => {

      dropdown.classList.remove(
        "open"
      );

      current.setAttribute(
        "aria-expanded",
        "false"
      );

    }
  );


  /* =======================================================
     LANGUAGE ROUTE OVERRIDE
     ======================================================= */

  function getExplicitLanguageTarget(
    language: "en" | "km"
  ): string | undefined {

    const context =
      document.getElementById(
        "language-route-context"
      );

    if (
      !(context instanceof HTMLElement)
    ) {
      return undefined;
    }

    const target =
      language === "km"
        ? context.dataset.languageKm
        : context.dataset.languageEn;

    return target || undefined;
  }


  /* =======================================================
     LANGUAGE SWITCHING
     ======================================================= */

  const languageButtons =
    document.querySelectorAll<HTMLButtonElement>(
      ".language-option"
    );


  languageButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        async (event) => {

          event.stopPropagation();

          const language =
            button.dataset.language as
              | "en"
              | "km"
              | undefined;

          if (!language) {
            return;
          }


          /*
           * Article Detail pages can provide
           * an explicit paired translation route.
           *
           * Other pages use the normal
           * switchLanguage() behavior.
           */

          const explicitTarget =
            getExplicitLanguageTarget(
              language
            );

          const safeExplicitTarget =
            explicitTarget &&
            !explicitTarget.includes(
              "/undefined/"
            )
              ? explicitTarget
              : undefined;

          const target =
            safeExplicitTarget ??
            switchLanguage(
              window.location.pathname,
              language
            );


          /* -----------------------------------------------
             Close dropdown
             ----------------------------------------------- */

          dropdown.classList.remove(
            "open"
          );

          current.setAttribute(
            "aria-expanded",
            "false"
          );


          /* -----------------------------------------------
             Avoid unnecessary navigation
             ----------------------------------------------- */

          if (
            target ===
            window.location.pathname
          ) {
            return;
          }


          /* -----------------------------------------------
             Astro ClientRouter navigation
             ----------------------------------------------- */

          await navigate(target);

        }
      );

    }
  );

}