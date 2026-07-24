import { navigation } from "@data/navigation";
import type { MenuItem } from "@models/navigation";

export const navigationService = {
  getHeaderMenu(): MenuItem[] {
    return navigation
      .filter(item => item.visible !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  },

  getFooterMenu(): MenuItem[] {
    return this.getHeaderMenu();
  },

  getMenuById(id: string): MenuItem | undefined {
    return navigation.find(item => item.id === id);
  },
};

export default navigationService;