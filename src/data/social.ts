export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  external: boolean;
}

export const social = {
  facebook: {
    name: "Facebook",
    url: "",
    icon: "facebook",
    external: true,
  },

  linkedin: {
    name: "LinkedIn",
    url: "",
    icon: "linkedin",
    external: true,
  },

  youtube: {
    name: "YouTube",
    url: "",
    icon: "youtube",
    external: true,
  },

  telegram: {
    name: "Telegram",
    url: "",
    icon: "telegram",
    external: true,
  },

  tiktok: {
    name: "TikTok",
    url: "",
    icon: "tiktok",
    external: true,
  },
} satisfies Record<string, SocialLink>;

export default social;