import { IHeaderNavItems } from "@/constants/header/header-nav-items";
import { cn } from "@/shared/lib/utils";
import { BurgerMenuItem } from "./BurgerMenuItem";

interface IBurgerMenuProps {
  items: IHeaderNavItems[];
  isOpen: boolean;
  handleOpen: () => void;
}

export const BurgerMenu = ({ items, isOpen, handleOpen }: IBurgerMenuProps) => {
  return (
    <div
      onClick={handleOpen}
      className={cn(
        `fixed right-0 top-0 w-full h-screen bg-opacity-bg-dark transition duration-500 ease-in z-400`,
        { "translate-x-full opacity-0 ": !isOpen },
      )}
    >
      <ul
        onClick={(e) => e.stopPropagation()}
        className={cn(
          `flex flex-col gap-y-7 p-[55px_clamp(25px,4vw,40px)] ml-auto w-[clamp(300px,100vw,500px)] h-screen bg-black rounded-[0_0_0_20px] shadow-burger-shadow`,
        )}
      >
        {items.map((item) => (
          <BurgerMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
