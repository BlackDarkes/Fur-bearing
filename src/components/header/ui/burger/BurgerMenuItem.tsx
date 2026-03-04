import { IHeaderNavItems } from "@/constants/header-nav-items";
import Link from "next/link";
import { useNavStore } from "../../model/nav-store";
import { cn } from "@/shared/lib/utils";
import { useBurgerStore } from "../../model/burger-store";

interface IBurgerMenuItemProps {
  item: IHeaderNavItems;
}
  
export const BurgerMenuItem = ({ item }: IBurgerMenuItemProps) => {
  const { active, setActive } = useNavStore();
  const { handleOpen } = useBurgerStore();

  return (
    <li
      onClick={() => {
        setActive(item.title);
        handleOpen();
      }}
      className={cn(
        `relative w-fit text-[clamp(20px,1.2vw,24px)] transition duration-300
          before:content-[""] before:absolute before:-bottom-0.75 before:left-0 before:w-full before:h-0.5 before:bg-accent-color before:transition before:ease-in before:duration-300 before:scale-0 before:origin-left
          active:opacity-80 before:active:opacity-80`,
        { "text-accent-color before:scale-100": active === item.title },
      )}
    >
      <Link href={item.href}>{item.title}</Link>
    </li>
  );
}