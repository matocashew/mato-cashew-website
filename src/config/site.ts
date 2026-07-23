import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  // ==========================
  // Brand
  // ==========================

  brand: {
    english: "Mato Cashew",
    khmer: "ចន្ទីមាតុភូមិ",
    short: "Mato",
  },

  // ==========================
  // Website
  // ==========================

  website: {
    name: "Mato Cashew",
    tagline: "Premium Cambodian Cashew",
    description:
      "Premium Cambodian cashew kernels for retail, wholesale, OEM, private label and export markets worldwide.",
    url: "https://matocashew.com",
    logo: "/images/logo/logo.png",
    locale: "en",
  },

  // ==========================
  // Contact
  // ==========================

  contact: {
    email: "info@matocashew.com",
    phone: "+855 12 646 988",
  },

  // ==========================
  // Address
  // ==========================

  address: {
    village: "Chanloung Village",
    commune: "Damril Commune",
    district: "Ou Reang Ov District",
    province: "Tbong Khmum Province",
    country: "Cambodia",

    full:
      "Chanloung Village, Damril Commune, Ou Reang Ov District, Tbong Khmum Province, Cambodia",

    khmer:
      "ភូមិចន្លោង ឃុំដំរិល ស្រុកអូររាំងឪ ខេត្តត្បូងឃ្មុំ ប្រទេសកម្ពុជា",
  },

  // ==========================
  // Social
  // (Temporary - will move to src/data/social.ts)
  // ==========================

  social: {
    facebook: "",
    linkedin: "",
    youtube: "",
    telegram: "",
    tiktok: "",
  },

  // ==========================
  // Analytics
  // (Temporary - will move to src/config/analytics.ts)
  // ==========================

  analytics: {
    googleAnalytics: "G-9CBMMS5DPF",
    googleTagManager: "",
    microsoftClarity: "",
  },

  // ==========================
  // Copyright
  // (Temporary - will move to src/data/footer.ts)
  // ==========================

  copyright: `© ${new Date().getFullYear()} Mato Cashew. All rights reserved.`,
};

// -----------------------------------------------------------------
// Backward Compatibility
// Remove this export after all imports have been migrated to `site`.
// -----------------------------------------------------------------

export const SITE = site;

export default site;