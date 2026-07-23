// ==========================
// Brand
// ==========================

export interface BrandConfig {
  english: string;
  khmer: string;
  short: string;
}

// ==========================
// Website
// ==========================

export interface WebsiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  locale: string;
}

// ==========================
// Contact
// ==========================

export interface ContactConfig {
  email: string;
  phone: string;
}

// ==========================
// Address
// ==========================

export interface AddressConfig {
  village: string;
  commune: string;
  district: string;
  province: string;
  country: string;

  full: string;

  khmer: string;
}

// ==========================
// Social
// ==========================

export interface SocialConfig {
  facebook: string;
  linkedin: string;
  youtube: string;
  telegram: string;
  tiktok: string;
}

// ==========================
// Analytics
// ==========================

export interface AnalyticsConfig {
  googleAnalytics: string;
  googleTagManager: string;
  microsoftClarity: string;
}

// ==========================
// Site
// ==========================

export interface SiteConfig {
  brand: BrandConfig;

  website: WebsiteConfig;

  contact: ContactConfig;

  address: AddressConfig;

  social: SocialConfig;

  analytics: AnalyticsConfig;

  copyright: string;
}