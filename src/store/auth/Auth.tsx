import create from "zustand";

import { IAuth } from "./interfaces";

export const useAuth = create<IAuth>((set) => ({
  isAuth: false,
  setIsAuth: (value) => set({ isAuth: value }),
}));
