import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IToastStore {
  message: string;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  setMessage: (message: string) => void;
}

export const useToastStore = create<IToastStore>()(
  devtools(
    (set, get) => ({
      message: "",
      isOpen: false,

      handleOpen: () => {
        set(() => ({ isOpen: !get().isOpen }));
        setTimeout(() => set(() => ({ isOpen: !get().isOpen })), 5000);
      },

      handleClose: () => set({ isOpen: false }),

      setMessage: (message: string) => set({ message }),
    }),
    { name: "toast-store" },
  ),
);
