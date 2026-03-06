import { IFooterLinksItems } from "@/constants/footer/footer-links-items";
import { FooterListLinkItem } from "./FooterListLinkItem";

interface IFooterListLinkProps {
  items: IFooterLinksItems[];
}
  
export const FooterListLink = ({ items }: IFooterListLinkProps) => {
  return (
    <ul>
      {items.map((item) => (
        <FooterListLinkItem key={item.id} item={item} />
      ))}
    </ul>
  );
}