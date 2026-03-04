import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IBurgerStore {
  isOpen: boolean;
  handleOpen: () => void;
}

export const useBurgerStore = create<IBurgerStore>()(
  devtools(
    (set, get) => ({
      isOpen: false,

      handleOpen: () => set(() => {
        document.body.style.overflow = get().isOpen ? "auto" : "hidden";
        return { isOpen: !get().isOpen };
      }),
    }),
    { name: "burger-store" },
  ),
);
