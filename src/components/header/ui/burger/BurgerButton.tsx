import { cn } from "@/shared/lib/utils";

interface IBurgerButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
}
  
export const BurgerButton = ({ isOpen, handleOpen }: IBurgerButtonProps) => {
  return (
    <button type="button" onClick={handleOpen} className={cn(
      `relative flex items-center w-7.5 h-5
        before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-color before:transition before:ease-in before:duration-300
        after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-color after:transition after:ease-in after:duration-300 
        z-500`,
      { "before:rotate-45 before:translate-y-2.5 after:-rotate-45 after:-translate-y-2": isOpen },
    )}>
      <span className={cn(
        `w-full h-0.5 bg-primary-color transition ease-in duration-300`,
        { "opacity-0": isOpen },
      )} />
    </button>
  );
}