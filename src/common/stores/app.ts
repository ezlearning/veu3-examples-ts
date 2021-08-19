import { defineStore } from "pinia";
import { Menu } from "../models/app";

const homeMenu: Menu = { name: "Home", prefix: "/" };

export const useAppStore = defineStore({
  id: "app",
  state() {
    return {
      currentMenu: homeMenu,
    };
  },
  actions: {
    switchMenu(menu: Menu) {
      if (this.currentMenu.prefix !== menu.prefix) {
        this.currentMenu = menu;
      }
    },
  },
  // could also be defined as
  // state: () => ({ count: 0 })
});
