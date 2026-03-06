import { IFooterLinksItems } from "@/constants/footer/footer-links-items";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

interface IFooterListLinkItemProps {
  item: IFooterLinksItems;
}

export const FooterListLinkItem = ({ item }: IFooterListLinkItemProps) => {
  return (
    <li>
      {item.isTitle ? (
        <h3 className="mb-5 text-[clamp(18px,8vw,20px)]">{item.message}</h3>
      ) : (
        <Link
          href={item.link || "#"}
          className={cn(`relative block mb-2 text-[clamp(12px,4vw,16px)] w-fit transition duration-400
          before:content-[""] before:absolute before:-bottom-0.75 before:left-0 before:w-full before:h-0.5 before:bg-accent-color before:transition-all before:duration-400 before:scale-0 before:origin-left
          hover:text-accent-color hover:before:scale-100
          active:opacity-80 before:active:opacity-80`)}
        >
          <b>{item.name}</b> {item.message}
        </Link>
      )}
    </li>
  );
};
