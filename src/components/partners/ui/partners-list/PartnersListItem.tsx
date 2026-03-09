import { IPartnersItems } from "@/constants/partners/partners-items";
import Image from "next/image";
import Link from "next/link";

interface IPartnersListItemProps {
  item: IPartnersItems;
}

export const PartnersListItem = ({ item }: IPartnersListItemProps) => {
  return (
    <li className="shrink-0">
      <Link href={item.link}>
        <Image
          src={item.img}
          alt={item.link}
          width={1}
          height={1}
          className="w-[clamp(160px,20vw,240px)] rounded-lg shadow-block-shadow transition duration-300 hover:scale-105 active:scale-95"
        />
      </Link>
    </li>
  );
};
