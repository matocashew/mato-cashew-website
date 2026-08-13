import type {
  ContactFormData
} from "./types";

const ALLOWED_INQUIRIES = new Set([
  "Wholesale Inquiry",
  "Retail Inquiry",
  "Distribution Inquiry",
  "Business Partnership",
  "Packaging / Private Label Inquiry",
  "General Inquiry",
]);

const ALLOWED_VOLUMES = new Set([
  "Less than 100 kg",
  "100–500 kg",
  "500 kg–1 ton",
  "More than 1 ton",
]);

export function validateForm(
  data: ContactFormData
): string[] {

  const errors: string[] = [];

  const name =
    data.name?.trim() ?? "";

  const company =
    data.company?.trim() ?? "";

  const country =
    data.country?.trim() ?? "";

  const email =
    data.email?.trim() ?? "";

  const phone =
    data.phone?.trim() ?? "";

  const inquiry =
    data.inquiry?.trim() ?? "";

  const volume =
    data.volume?.trim() ?? "";

  const message =
    data.message?.trim() ?? "";

  const turnstileToken =
    data.turnstileToken?.trim() ?? "";

  // Full Name
  if (!name) {

    errors.push(
      "Full Name is required."
    );

  } else if (name.length > 100) {

    errors.push(
      "Full Name must be 100 characters or fewer."
    );
  }

  // Company
  if (company.length > 150) {

    errors.push(
      "Company Name must be 150 characters or fewer."
    );
  }

  // Country
  if (!country) {

    errors.push(
      "Country is required."
    );

  } else if (country.length > 100) {

    errors.push(
      "Country must be 100 characters or fewer."
    );
  }

  // Email
  if (!email) {

    errors.push(
      "Email Address is required."
    );

  } else {

    if (email.length > 254) {

      errors.push(
        "Email Address is too long."
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      errors.push(
        "Invalid email address."
      );
    }
  }

  // Phone
  if (phone.length > 50) {

    errors.push(
      "Phone number must be 50 characters or fewer."
    );
  }

  // Inquiry Type
  if (!inquiry) {

    errors.push(
      "Inquiry Type is required."
    );

  } else if (
    !ALLOWED_INQUIRIES.has(inquiry)
  ) {

    errors.push(
      "Invalid Inquiry Type."
    );
  }

  // Estimated Order Volume
  // Optional, but if supplied it must be
  // one of the values supported by the form.
  if (
    volume &&
    !ALLOWED_VOLUMES.has(volume)
  ) {

    errors.push(
      "Invalid Estimated Order Volume."
    );
  }

  // Message
  if (!message) {

    errors.push(
      "Message is required."
    );

  } else if (message.length > 5000) {

    errors.push(
      "Message must be 5000 characters or fewer."
    );
  }

  // Turnstile
  if (!turnstileToken) {

    errors.push(
      "Security verification failed."
    );
  }

  return errors;
}