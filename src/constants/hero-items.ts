import { StaticImageData } from "next/image";
import ImageProduct1 from "@/assets/hero/images/image1.png";
import ImageProduct2 from "@/assets/hero/images/image2.png";
import ImageProduct3 from "@/assets/hero/images/image3.png";
import ImageProduct4 from "@/assets/hero/images/image4.png";
import ImageProduct5 from "@/assets/hero/images/image5.png";
import ImageProduct6 from "@/assets/hero/images/image6.png";
import ImageProduct7 from "@/assets/hero/images/image7.png";
import ImageProduct8 from "@/assets/hero/images/image8.png";
import ImageProduct9 from "@/assets/hero/images/image9.png";
import ImageProduct10 from "@/assets/hero/images/image10.png";

interface IHeroItems {
  id: number;
  img: StaticImageData,
  title: string;
  price: string;
  link: string;
}

const HERO_ITEMS: IHeroItems[] = [
  {
    id: 1,
    img: ImageProduct1,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 2,
    img: ImageProduct2,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 3,
    img: ImageProduct3,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 4,
    img: ImageProduct4,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 5,
    img: ImageProduct5,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 6,
    img: ImageProduct6,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 7,
    img: ImageProduct7,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 8,
    img: ImageProduct8,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 9,
    img: ImageProduct9,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
  {
    id: 10,
    img: ImageProduct10,
    title: "Толстовка",
    price: "1 500 ₽",
    link: "#",
  },
];

export { type IHeroItems, HERO_ITEMS };