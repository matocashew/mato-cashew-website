import { navigation } from "@data/navigation";

export const navigationService = {

  getMainMenu() {

    return navigation;

  },

  getFooterMenu() {

    return navigation;

  },

  getKnowledgeMenu() {

    return navigation.find(
      item => item.id === "knowledge"
    );

  },

};