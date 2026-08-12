import type { ContactFormData } from "./types";

export function validateForm(
  data: ContactFormData
): string[] {

  const errors: string[] = [];

  const name = data.name?.trim() ?? "";
  const company = data.company?.trim() ?? "";
  const country = data.country?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const inquiry = data.inquiry?.trim() ?? "";
  const volume = data.volume?.trim() ?? "";
  const message = data.message?.trim() ?? "";
  const turnstileToken =
    data.turnstileToken?.trim() ?? "";

  if (!name) {
    errors.push("Full Name is required.");
  } else if (name.length > 100) {
    errors.push(
      "Full Name must be 100 characters or fewer."
    );
  }

  if (company.length > 150) {
    errors.push(
      "Company Name must be 150 characters or fewer."
    );
  }

  if (!country) {
    errors.push("Country is required.");
  } else if (country.length > 100) {
    errors.push(
      "Country must be 100 characters or fewer."
    );
  }

  if (!email) {
    errors.push("Email Address is required.");
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

  if (phone.length > 50) {
    errors.push(
      "Phone number must be 50 characters or fewer."
    );
  }

  if (!inquiry) {
    errors.push(
      "Inquiry Type is required."
    );
  } else if (inquiry.length > 100) {
    errors.push(
      "Inquiry Type is too long."
    );
  }

  if (volume.length > 100) {
    errors.push(
      "Estimated Order Volume is too long."
    );
  }

  if (!message) {
    errors.push("Message is required.");
  } else if (message.length > 5000) {
    errors.push(
      "Message must be 5000 characters or fewer."
    );
  }

  if (!turnstileToken) {
    errors.push(
      "Security verification failed."
    );
  }

  return errors;
}