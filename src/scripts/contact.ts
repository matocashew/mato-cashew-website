declare const turnstile: {
  render(
    container: HTMLElement,
    options: {
      sitekey: string;
    }
  ): string;

  getResponse(
    widgetId?: string
  ): string;

  reset(
    widgetId?: string
  ): void;

  remove(
    widgetId: string
  ): void;
};

interface ApiResponse {
  success: boolean;
  message?: string;
  errors?: string[];
}
let turnstileLoadPromise:
  Promise<void> | null = null;


/*
 * Load Cloudflare Turnstile once for the current browser
 * document. The API remains available while Astro
 * ClientRouter swaps page DOM.
 */
function ensureTurnstileApi():
  Promise<void> {

  if (
    typeof turnstile !== "undefined" &&
    typeof turnstile.render === "function"
  ) {
    return Promise.resolve();
  }

  if (turnstileLoadPromise) {
    return turnstileLoadPromise;
  }

  turnstileLoadPromise =
    new Promise<void>(
      (resolve, reject) => {

        const existing =
          document.querySelector<HTMLScriptElement>(
            'script[data-contact-turnstile-api="true"]'
          );

        if (existing) {

          if (
            typeof turnstile !== "undefined" &&
            typeof turnstile.render === "function"
          ) {
            resolve();
            return;
          }

          existing.addEventListener(
            "load",
            () => resolve(),
            { once: true }
          );

          existing.addEventListener(
            "error",
            () => reject(
              new Error(
                "Cloudflare Turnstile failed to load."
              )
            ),
            { once: true }
          );

          return;
        }

        const script =
          document.createElement("script");

        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

        script.async = true;
        script.defer = true;

        script.dataset.contactTurnstileApi =
          "true";

        script.addEventListener(
          "load",
          () => resolve(),
          { once: true }
        );

        script.addEventListener(
          "error",
          () => reject(
            new Error(
              "Cloudflare Turnstile failed to load."
            )
          ),
          { once: true }
        );

        document.head.appendChild(script);
      }
    );

  return turnstileLoadPromise;
}


/*
 * Render a widget for the CURRENT Contact DOM.
 */
export async function initContactTurnstile() {

  let container =
    document.querySelector<HTMLElement>(
      ".cf-turnstile"
    );

  if (!container) {
    return;
  }

  if (
    container.dataset.turnstileRendered ===
    "true"
  ) {
    return;
  }

  try {

    await ensureTurnstileApi();

  } catch (error) {

    /*
     * Allow a later navigation to retry loading the API.
     */
    turnstileLoadPromise = null;

    console.error(
      "[Contact] Unable to load Turnstile.",
      error
    );

    return;
  }


  /*
   * The Contact DOM may have changed while the API loaded.
   */
  container =
    document.querySelector<HTMLElement>(
      ".cf-turnstile"
    );

  if (!container) {
    return;
  }

  if (
    container.dataset.turnstileRendered ===
    "true"
  ) {
    return;
  }

  if (
    typeof turnstile === "undefined" ||
    typeof turnstile.render !== "function"
  ) {
    return;
  }

  const sitekey =
    container.dataset.sitekey;

  if (!sitekey) {

    console.error(
      "[Contact] Turnstile sitekey is missing."
    );

    return;
  }

  const widgetId =
    turnstile.render(
      container,
      {
        sitekey
      }
    );

  container.dataset.turnstileWidgetId =
    widgetId;

  container.dataset.turnstileRendered =
    "true";
}


/*
 * Remove the widget belonging to the Contact DOM that
 * Astro is about to replace.
 */
function destroyContactTurnstile() {

  const container =
    document.querySelector<HTMLElement>(
      ".cf-turnstile"
    );

  if (!container) {
    return;
  }

  const widgetId =
    container.dataset.turnstileWidgetId;

  if (!widgetId) {
    return;
  }

  if (
    typeof turnstile !== "undefined" &&
    typeof turnstile.remove === "function"
  ) {

    try {
      turnstile.remove(widgetId);
    } catch {
      /*
       * DOM is being replaced anyway.
       */
    }
  }

  delete container.dataset.turnstileWidgetId;
  delete container.dataset.turnstileRendered;
}

export function initContactForm() {

  const form =
    document.getElementById(
      "contact-form"
    ) as HTMLFormElement | null;

  /*
   * The Contact component can be inserted again by Astro's
   * ClientRouter without reloading this module.
   */
  if (!form) {
    return;
  }

  /*
   * initContactForm() runs on initial load and every
   * astro:page-load. Prevent two submit listeners from
   * being attached to the same DOM form.
   */
  if (
    form.dataset.contactInitialized ===
    "true"
  ) {
    return;
  }

  form.dataset.contactInitialized =
    "true";

const submitBtn =
    document.getElementById(
      "submitBtn"
    ) as HTMLButtonElement;

  const successBox =
    document.getElementById(
      "successMessage"
    ) as HTMLDivElement;

  const errorBox =
    document.getElementById(
      "formError"
    ) as HTMLDivElement;

  const requiredMessage =
    form.dataset.requiredMessage ??
    "This field is required.";

  const securityMessage =
    form.dataset.securityMessage ??
    "Please complete the security verification.";

  const sendingLabel =
    form.dataset.sendingLabel ??
    "Sending...";

  const sendLabel =
    form.dataset.sendLabel ??
    "Send Inquiry";

  const submissionFailed =
    form.dataset.submissionFailed ??
    "Submission failed.";

  const connectionError =
    form.dataset.connectionError ??
    "Unable to connect to the server.";

  form.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      successBox.hidden = true;
      errorBox.hidden = true;

      errorBox.textContent = "";

      form
        .querySelectorAll(".error-message")
        .forEach((el) => {

          (el as HTMLElement).textContent = "";

        });

      form
        .querySelectorAll(
          "input, textarea, select"
        )
        .forEach((el) => {

          el.classList.remove(
            "input-error"
          );

        });

      let valid = true;

      const requiredFields =
        form.querySelectorAll(
          "[required]"
        );

      requiredFields.forEach(
        (field) => {

          const input =
            field as
              | HTMLInputElement
              | HTMLTextAreaElement
              | HTMLSelectElement;

          if (!input.value.trim()) {

            valid = false;

            input.classList.add(
              "input-error"
            );

            const error =
              input.parentElement
                ?.querySelector(
                  ".error-message"
                ) as HTMLElement | null;

            if (error) {
              error.textContent =
                requiredMessage;
            }

          }

        }
      );

      if (!valid) {
        return;
      }

      const turnstileContainer =
        form.querySelector<HTMLElement>(
          ".cf-turnstile"
        );

      const turnstileWidgetId =
        turnstileContainer
          ?.dataset
          .turnstileWidgetId;

      if (
        typeof turnstile === "undefined" ||
        !turnstileWidgetId
      ) {

        errorBox.hidden = false;
        errorBox.textContent =
          securityMessage;

        /*
         * Recover if widget initialization is still pending.
         */
        void initContactTurnstile();

        return;
      }

      const token =
        turnstile.getResponse(
          turnstileWidgetId
        );

      if (!token) {

        errorBox.hidden = false;

        errorBox.textContent =
          securityMessage;

        return;
      }

      const payload = {

        name:
          (
            document.getElementById(
              "name"
            ) as HTMLInputElement
          ).value.trim(),

        company:
          (
            document.getElementById(
              "company"
            ) as HTMLInputElement
          ).value.trim(),

        country:
          (
            document.getElementById(
              "country"
            ) as HTMLInputElement
          ).value.trim(),

        email:
          (
            document.getElementById(
              "email"
            ) as HTMLInputElement
          ).value.trim(),

        phone:
          (
            document.getElementById(
              "phone"
            ) as HTMLInputElement
          ).value.trim(),

        inquiry:
          (
            document.getElementById(
              "inquiry"
            ) as HTMLSelectElement
          ).value,

        volume:
          (
            document.getElementById(
              "volume"
            ) as HTMLSelectElement
          ).value,

        message:
          (
            document.getElementById(
              "message"
            ) as HTMLTextAreaElement
          ).value.trim(),

        turnstileToken: token,

      };

      submitBtn.disabled = true;
      submitBtn.textContent =
        sendingLabel;

      try {

        const response =
          await fetch(
            "/api/contact",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify(
                  payload
                ),
            }
          );

        const result = await response.json() as ApiResponse;

        submitBtn.disabled = false;
        submitBtn.textContent =
          sendLabel;

        if (result.success) {

          successBox.hidden = false;

          form.reset();

          const turnstileContainer =
            form.querySelector<HTMLElement>(
              ".cf-turnstile"
            );

          const turnstileWidgetId =
            turnstileContainer
              ?.dataset
              .turnstileWidgetId;

          if (turnstileWidgetId) {
            turnstile.reset(
              turnstileWidgetId
            );
          }

          requestAnimationFrame(() => {

            const headerOffset = 120;

            const messagePosition =
              successBox.getBoundingClientRect().top +
              window.scrollY;

            window.scrollTo({
              top: messagePosition - headerOffset,
              behavior: "smooth",
            });

          });

        } else {

          errorBox.hidden = false;

          errorBox.textContent =
            result.message ??
            result.errors?.join(", ") ??
            submissionFailed;

        }

      } catch {

        submitBtn.disabled = false;

        submitBtn.textContent =
          sendLabel;

        errorBox.hidden = false;

        errorBox.textContent =
          connectionError;

      }

    }
  );

}

/*
 * Unified Contact lifecycle.
 *
 * First browser load + every Astro ClientRouter navigation.
 */
function initContactPage() {

  initContactForm();

  void initContactTurnstile();
}


initContactPage();


document.addEventListener(
  "astro:page-load",
  initContactPage
);


/*
 * Dispose the current widget before Astro replaces its DOM.
 */
document.addEventListener(
  "astro:before-swap",
  destroyContactTurnstile
);
