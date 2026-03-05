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
          width={item.img.width}
          height={item.img.height}
          className="w-[clamp(160px,20vw,240px)]"
        />
      </Link>
    </li>
  );
};
