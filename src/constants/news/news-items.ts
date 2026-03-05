import { StaticImageData } from "next/image";
import ImageNews1 from "@/assets/news/images/news1.png";

interface INewsItems {
  id: number;
  text: string;
  img: StaticImageData;
  link: string;
}

const NEWS_ITEMS: INewsItems[] = [
  {
    id: 1,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 2,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 3,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 4,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 5,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 6,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 7,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 8,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 9,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
];

export { type INewsItems, NEWS_ITEMS };