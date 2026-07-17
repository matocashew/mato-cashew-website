import en from "./en";
import km from "./km";

export const languages = {
  en,
  km
};

export type Language = keyof typeof languages;