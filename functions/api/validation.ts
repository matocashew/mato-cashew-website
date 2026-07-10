import type { ContactFormData } from "./types";

export function validateForm(data: ContactFormData): string[] {

  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push("Full name is required.");
  }

  if (!data.country?.trim()) {
    errors.push("Country is required.");
  }

  if (!data.email?.trim()) {
    errors.push("Email is required.");
  }

  if (
    data.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.push("Invalid email address.");
  }

  if (!data.inquiry?.trim()) {
    errors.push("Inquiry type is required.");
  }

  if (!data.message?.trim()) {
    errors.push("Message is required.");
  }

  if (!data.turnstileToken?.trim()) {
    errors.push("Turnstile verification failed.");
  }

  return errors;

}