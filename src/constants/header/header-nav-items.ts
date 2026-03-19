import { ComponentType, SVGProps } from "react";
import IconTelegram from "@/assets/icons/telegram.svg";
import IconVk from "@/assets/icons/vk.svg";

interface IHeaderNavItems {
  id: number;
  title: string;
  href: string;
  isIcon?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

const HEADER_NAV_ITEMS: IHeaderNavItems[] = [
  {
    id: 1,
    title: "Мерч",
    href: "#merch",
  },
  {
    id: 2,
    title: "Билеты на концерт",
    href: "#tickets",
  },
  {
    id: 3,
    title: "Новости",
    href: "#news",
  },
  {
    id: 4,
    title: "Партнеры",
    href: "#partners",
  },
  {
    id: 5,
    title: "Последние релизы",
    href: "#releases",
  },
  {
    id: 6,
    title: "",
    href: "https://t.me/pushnoypro",
    isIcon: true,
    icon: IconTelegram,
  },
  {
    id: 7,
    title: "",
    href: "https://vk.ru/pushnoy_nadorad",
    isIcon: true,
    icon: IconVk,
  }
];

export { type IHeaderNavItems, HEADER_NAV_ITEMS };