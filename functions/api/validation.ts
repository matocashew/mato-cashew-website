import type { ContactFormData } from "./types";

export function validateForm(data: ContactFormData): string[] {

  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push("Full Name is required.");
  }

  if (!data.country?.trim()) {
    errors.push("Country is required.");
  }

  if (!data.email?.trim()) {

    errors.push("Email Address is required.");

  } else {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      errors.push("Invalid email address.");
    }

  }

  if (!data.inquiry?.trim()) {
    errors.push("Inquiry Type is required.");
  }

  if (!data.message?.trim()) {
    errors.push("Message is required.");
  }

  if (!data.turnstileToken?.trim()) {
    errors.push("Security verification failed.");
  }

  return errors;

}