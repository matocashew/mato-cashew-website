(() => {
  "use strict";

  const PANEL_ID = "mato-image-path-panel";

  function getPath(img) {
    const src = img?.getAttribute("src") || "";

    if (src.startsWith("/images/")) {
      return src.split(/[?#]/)[0];
    }

    try {
      const url = new URL(src, location.origin);
      if (
        url.origin === location.origin &&
        url.pathname.startsWith("/images/")
      ) {
        return url.pathname;
      }
    } catch (_) {}

    return "";
  }

  function makePanel() {
    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.style.cssText =
      "margin-top:14px;padding:12px;background:#f4f7f5;" +
      "border:1px solid #d8e2dd;border-radius:6px";

    const label = document.createElement("div");
    label.textContent = "Image Path";
    label.style.cssText =
      "font-weight:600;margin-bottom:8px";

    const input = document.createElement("input");
    input.readOnly = true;
    input.setAttribute("aria-label", "Image Path");
    input.style.cssText =
      "width:100%;box-sizing:border-box;" +
      "padding:9px;margin-bottom:8px";

    const copy = document.createElement("button");
    copy.type = "button";
    copy.textContent = "Copy Path";

    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(input.value);
        copy.textContent = "Copied!";
      } catch (_) {
        input.focus();
        input.select();
        copy.textContent = "Select and copy path";
      }
    });

    panel.append(label, input, copy);
    return panel;
  }

  function update() {
    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
      if (
        button.textContent.trim() !==
        "Choose different image"
      ) continue;

      const container = button.parentElement?.parentElement;
      if (!container) continue;

      const img = container.querySelector(
        'img[role="presentation"]'
      );

      const path = getPath(img);
      let panel = container.querySelector(
        "#" + PANEL_ID
      );

      if (!path) {
        if (panel) panel.remove();
        continue;
      }

      if (!panel) {
        panel = makePanel();
        container.appendChild(panel);
      }

      const input = panel.querySelector("input");
      const copy = panel.querySelector("button");

      if (input.value !== path) {
        input.value = path;
        copy.textContent = "Copy Path";
      }
    }
  }

  let scheduled = false;

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;

    queueMicrotask(() => {
      scheduled = false;
      update();
    });
  }

  const observer = new MutationObserver(scheduleUpdate);

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src"]
  });

  scheduleUpdate();
})();