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
    title: "Футболка с полной запечаткой «Песни Пушного. Кто вы? Черный фон»",
    price: "1 100 ₽",
    link: "https://www.pinkbus.ru/tshirt-polnayazapechatka/1197109",
  },
  {
    id: 2,
    img: ImageProduct2,
    title: "Футболка с полной запечаткой «Песни Пушного. Надо радоваться! Желтый фон»",
    price: "1 100 ₽",
    link: "https://www.pinkbus.ru/tshirt-polnayazapechatka/1197064",
  },
  {
    id: 3,
    img: ImageProduct3,
    title: "Холст «С автографом. Пушной и LP»",
    price: "3 000 ₽",
    link: "https://www.pinkbus.ru/canvases/1218477",
  },
  {
    id: 4,
    img: ImageProduct4,
    title: "Подушка «Песни Пушного. Надо радоваться! »",
    price: "1 590 ₽",
    link: "https://www.pinkbus.ru/pillows/1196909",
  },
  {
    id: 5,
    img: ImageProduct5,
    title: "Футболка с полной запечаткой «Песни Пушного. Катастрофически О_О черный фон»",
    price: "1 850 ₽",
    link: "https://www.pinkbus.ru/tshirt-polnayazapechatka/1198526",
  },
  {
    id: 6,
    img: ImageProduct6,
    title: "Рюкзак «Каверы Пушного. Обложка альбома с автографом. Черный фон.»",
    price: "1 500 ₽",
    link: "https://www.pinkbus.ru/backpacks/1167690",
  },
  {
    id: 7,
    img: ImageProduct7,
    title: "Сумка хб «Каверы Пушного. Обложка альбома с автографом. Черный фон.»",
    price: "1 100 ₽",
    link: "https://www.pinkbus.ru/cotton_bags/1167689",
  },
  {
    id: 8,
    img: ImageProduct8,
    title: "Футболка «Песни Пушного. Надо радоваться! »",
    price: "1 300 ₽",
    link: "https://www.pinkbus.ru/tshirts/1196923",
  },
  {
    id: 9,
    img: ImageProduct9,
    title: "Футболка с полной запечаткой «Пушной и 8струн»",
    price: "1 100 ₽",
    link: "https://www.pinkbus.ru/tshirt-polnayazapechatka/1220410",
  },
  {
    id: 10,
    img: ImageProduct10,
    title: "Сумка хб «Пушной и LP»",
    price: "1 100 ₽",
    link: "https://www.pinkbus.ru/cotton_bags/1220395",
  },
];

export { type IHeroItems, HERO_ITEMS };