import { IHeaderNavItems } from "@/constants/header/header-nav-items";
import { NavListItem } from "./NavListItem";

interface INavListProps {
  items: IHeaderNavItems[];
}

export const NavList = ({ items }: INavListProps) => {
  return (
    <ul className="flex gap-x-[clamp(25px,4vw,40px)] max-lg:hidden">
      {items.map((item) => (
        <NavListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
