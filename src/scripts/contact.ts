declare const turnstile: {
  getResponse(): string;
  reset(): void;
};

interface ApiResponse {
  success: boolean;
  message?: string;
  errors?: string[];
}

const form =
  document.getElementById(
    "contact-form"
  ) as HTMLFormElement | null;

if (form) {

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

      if (
        typeof turnstile === "undefined"
      ) {

        errorBox.hidden = false;
        errorBox.textContent =
          securityMessage;

        return;
      }

      const token =
        turnstile.getResponse();

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

          turnstile.reset();

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