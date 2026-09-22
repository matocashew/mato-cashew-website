import type { Language } from "./config";

export function getLocalizedPath(
  language: Language,
  path: string
) {
  const normalized =
    path.startsWith("/")
      ? path
      : `/${path}`;

  if (language === "en") {
    return normalized === "/"
      ? "/"
      : normalized.replace(/\/+$/, "");
  }

  if (normalized === "/") {
    return "/km";
  }

  return `/km${normalized.replace(/\/+$/, "")}`;
}