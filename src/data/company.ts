import { site } from "../config/site";

export const company = {
  name: site.brand.english,

  khmerName: site.brand.khmer,

  legalName: site.brand.english,

  founded: 2024,

  industry: "Cashew Processing",

  slogan: site.website.tagline,

  description: site.website.description,

  headquarters: {
    village: site.address.village,
    commune: site.address.commune,
    district: site.address.district,
    province: site.address.province,
    country: site.address.country,
  },

  email: site.contact.email,

  phone: site.contact.phone,

  website: site.website.url,
} as const;

export default company;