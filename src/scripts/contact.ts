console.log("✅ Contact form script loaded");

declare const turnstile: {
  getResponse(): string;
  reset(): void;
};

const form = document.getElementById("contact-form") as HTMLFormElement | null;

if (!form) {
  console.error("❌ Contact form not found");
} else {

  console.log("✅ Contact form found");

  const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
  const successBox = document.getElementById("successMessage") as HTMLDivElement;
  const errorBox = document.getElementById("formError") as HTMLDivElement;

  form.addEventListener("submit", async (event) => {

    console.log("🚀 Submit button clicked");

    event.preventDefault();

    successBox.hidden = true;
    errorBox.hidden = true;

    // Clear validation
    form.querySelectorAll(".error-message").forEach((el) => {
      (el as HTMLElement).textContent = "";
    });

    form.querySelectorAll("input, textarea, select").forEach((el) => {
      el.classList.remove("input-error");
    });

    let valid = true;

    const requiredFields = form.querySelectorAll("[required]");

    requiredFields.forEach((field) => {

      const input =
        field as HTMLInputElement |
        HTMLTextAreaElement |
        HTMLSelectElement;

      if (!input.value.trim()) {

        valid = false;

        input.classList.add("input-error");

        const error = input.parentElement?.querySelector(
          ".error-message"
        ) as HTMLElement | null;

        if (error) {
          error.textContent = "This field is required.";
        }

      }

    });

    console.log("Validation:", valid);

    if (!valid) {
      console.warn("❌ Validation failed");
      return;
    }

    const token = turnstile.getResponse();

    console.log("Turnstile Token:", token);

    if (!token) {

      console.warn("❌ Turnstile token missing");

      errorBox.hidden = false;
      errorBox.textContent =
        "Please complete the security verification.";

      return;

    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const payload = {

      name: (document.getElementById("name") as HTMLInputElement).value.trim(),

      company: (document.getElementById("company") as HTMLInputElement).value.trim(),

      country: (document.getElementById("country") as HTMLInputElement).value.trim(),

      email: (document.getElementById("email") as HTMLInputElement).value.trim(),

      phone: (document.getElementById("phone") as HTMLInputElement).value.trim(),

      inquiry: (document.getElementById("inquiry") as HTMLSelectElement).value,

      volume: (document.getElementById("volume") as HTMLSelectElement).value,

      message: (document.getElementById("message") as HTMLTextAreaElement).value.trim(),

      turnstileToken: token

    };

    console.log("📦 Payload:");
    console.log(payload);

    try {

      console.log("➡️ Calling /api/contact");

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(payload)

      });

      console.log("⬅️ Response Status:", response.status);

      const result = await response.json();

      console.log("📨 API Result:");
      console.log(result);

      submitBtn.disabled = false;
      submitBtn.textContent = "Send Inquiry";

      if (result.success) {

        console.log("✅ Success");

        successBox.hidden = false;

        form.reset();

        turnstile.reset();

      } else {

        console.warn("❌ API returned failure");

        errorBox.hidden = false;

        errorBox.textContent =
          result.message ??
          (result.errors
            ? result.errors.join(", ")
            : "Submission failed.");

      }

    } catch (error) {

      console.error("🔥 Fetch Error:");

      console.error(error);

      submitBtn.disabled = false;

      submitBtn.textContent = "Send Inquiry";

      errorBox.hidden = false;

      errorBox.textContent =
        "Network error. Please try again.";

    }

  });

}