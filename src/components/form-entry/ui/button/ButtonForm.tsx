import { cn } from "@/shared/lib/utils";

interface IButtonFormProps {
  onClick: () => void;
}

export const ButtonForm = ({ onClick }: IButtonFormProps) => {
  return (
    <button type="button" onClick={onClick} className={cn(
      `block py-3 w-[min(100%,400px)] mx-auto text-center text-[clamp(20px,4vw,24px)] font-bold uppercase text-primary-color bg-button-bg rounded-xl transition duration-500
        hover:opacity-80 active:opacity-80`
    )}>
      Заказать
    </button>
  );
};
