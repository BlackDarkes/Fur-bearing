import { IFooterLinksItems } from "@/constants/footer/footer-links-items";
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
        <Link href={item.link || "#"} className="block mb-2 text-[clamp(14px,8vw,16px)]">
          <b>{item.name}</b> {item.message}
        </Link>
      )}
    </li>
  );
};
