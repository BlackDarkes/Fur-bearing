import { cn } from "@/shared/lib/utils";
import { type LucideIcon } from "lucide-react";

interface IButtonProps {
  icon: LucideIcon;
  onClick: () => void;
}

export const Button = ({ icon: Icon, onClick }: IButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        `flex items-center justify-center w-7.5 h-7.5 rounded-full transition ease-in duration-300 hover:shadow-button-shadow hover:scale-110 hover:opacity-80 active:opacity-50`,
      )}
    >
      <Icon width={30} height={30} className={cn(``)} />
    </button>
  );
};
