import { IHeaderNavItems } from "@/constants/header-nav-items";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { useNavStore } from "../../model/nav-store";

interface INavListItemProps {
  item: IHeaderNavItems;
}

export const NavListItem = ({ item }: INavListItemProps) => {
  const { active, setActive } = useNavStore();

  return (
    <li
      onClick={() => setActive(item.title)}
      className={cn(
        `relative text-[clamp(14px,1.2vw,16px)] transition duration-300
          before:content-[""] before:absolute before:-bottom-0.75 before:left-0 before:w-full before:h-0.5 before:bg-accent-color before:transition before:ease-in before:duration-300 before:scale-0 before:origin-left
          hover:text-accent-color hover:before:scale-100
          active:opacity-80 before:active:opacity-80`,
        { "text-accent-color before:scale-100": active === item.title },
      )}
    >
      <Link href={item.href}>{item.title}</Link>
    </li>
  );
};
