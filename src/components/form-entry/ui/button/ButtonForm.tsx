import { cn } from "@/shared/lib/utils";

export const ButtonForm = () => {
  return (
    <button type="submit" className={cn(
      `block py-3 w-[min(100%,400px)] mx-auto text-center text-[clamp(16px,4vw,24px)] font-bold uppercase text-primary-color bg-button-bg rounded-xl transition duration-500
        hover:opacity-80 active:opacity-80`
    )}>
      Заказать
    </button>
  );
};
