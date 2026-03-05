import { IPartnersItems } from "@/constants/partners/partners-items";
import { PartnersListItem } from "./PartnersListItem";

interface IPartnersListProps {
  items: IPartnersItems[];
}
  
export const PartnersList = ({ items }: IPartnersListProps) => {
  return (
    <ul className="flex justify-between gap-x-5 overflow-auto">
      { items.map((item) => (
        <PartnersListItem key={item.id} item={item} />
      )) }
    </ul>
  );
}