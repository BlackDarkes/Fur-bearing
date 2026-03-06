import { cn } from "@/shared/lib/utils";

interface IButtonForm {
  isLoading?: boolean;
}

export const ButtonForm = ({ isLoading }: IButtonForm) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={cn(
        `block py-3 w-[min(100%,400px)] mx-auto text-center text-[clamp(16px,4vw,24px)] font-bold uppercase text-primary-color bg-button-bg rounded-xl transition duration-500
        hover:opacity-80 active:opacity-80 hover:scale-101 active:scale-99`,
      )}
    >
      Заказать
    </button>
  );
};
