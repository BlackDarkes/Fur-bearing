import { StaticImageData } from "next/image";
import ImagePartners from "@/assets/partners/images/partner.png";

interface IPartnersItems {
  id: number;
  img: StaticImageData;
  link: string;
}

const PARTNERS_ITEMS: IPartnersItems[] = [
  {
    id: 1,
    img: ImagePartners,
    link: "#",
  },
  {
    id: 2,
    img: ImagePartners,
    link: "#",
  },
  {
    id: 3,
    img: ImagePartners,
    link: "#",
  },
  {
    id: 4,
    img: ImagePartners,
    link: "#",
  },
  {
    id: 5,
    img: ImagePartners,
    link: "#",
  },
];

export { type IPartnersItems, PARTNERS_ITEMS };