export function initLanguageSwitcher() {

  const current =
    document.querySelector(".language-current");

  const dropdown =
    document.querySelector(".language-dropdown");

  if (!current || !dropdown) return;

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

  document.addEventListener("click", () => {

    dropdown.classList.remove("open");

    current.setAttribute(
      "aria-expanded",
      "false"
    );

  });

}