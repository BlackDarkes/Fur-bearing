import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface INavStore {
  active: string | null;
  setActive: (active: string) => void;
}

export const useNavStore = create<INavStore>()(
  devtools(
    (set) => ({
      active: null,

      setActive: (active: string) => set({ active }),
    }),
    { name: "nav-store" },
  ),
);
