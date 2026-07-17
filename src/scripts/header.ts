export function initHeader() {
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");

      const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        (!expanded).toString()
      );

      menuToggle.textContent = expanded ? "☰" : "✕";
    });
  }

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("open");

      if (menuToggle) {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}