import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;
  toggleSideMenu: (bool?: boolean) => void;
}

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: (bool) =>
    set((state) => ({
      isSideMenuOpen: bool !== undefined ? bool : !state.isSideMenuOpen,
    })),
}));
