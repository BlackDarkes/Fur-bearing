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
    link: "https://t.me/otpstudio",
  },
  {
    id: 2,
    img: ImagePartners,
    link: "https://youtube.com/c/%D0%9E%D0%A2%D0%9F%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%BE",
  },
  {
    id: 3,
    img: ImagePartners,
    link: "https://t.me/otpstudio",
  },
  {
    id: 4,
    img: ImagePartners,
    link: "https://youtube.com/c/%D0%9E%D0%A2%D0%9F%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%BE",
  },
  {
    id: 5,
    img: ImagePartners,
    link: "https://t.me/otpstudio",
  },
];

export { type IPartnersItems, PARTNERS_ITEMS };