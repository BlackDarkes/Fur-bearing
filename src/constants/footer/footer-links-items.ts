interface IFooterLinksItems {
  id: number;
  name?: string;
  message: string;
  link?: string;
  isTitle: boolean;
}

const FOOTER_LINKS_ITEMS: IFooterLinksItems[] = [
  {
    id: 1,
    message: "Ссылки для связи:",
    isTitle: true,
  },
  {
    id: 2,
    name: "email:",
    message: "digital@juice.film",
    link: "mailto:digital@juice.film",
    isTitle: false,
  },
  {
    id: 3,
    name: "phone:",
    message: "+7 (985) 786-09-92",
    link: "tel:+7 (985) 786-09-92",
    isTitle: false,
  },
  {
    id: 4,
    name: "telegram:",
    message: "t.me/pushnoypro",
    link: "https://t.me/pushnoypro",
    isTitle: false,
  },
  {
    id: 5,
    name: "youtube:",
    message: "PushnoyRU",
    link: "https://www.youtube.com/user/PushnoyRU",
    isTitle: false,
  },
  {
    id: 6,
    name: "Дзен:",
    message: "alexanderpushnoy",
    link: "https://dzen.ru/alexanderpushnoy",
    isTitle: false,
  },
  {
    id: 7,
    name: "Мерч:",
    message: "pushnoymerch",
    link: "https://www.pinkbus.ru/authors/pushnoymerch",
    isTitle: false,
  },
];

const FOOTER_SECURE_ITEMS: IFooterLinksItems[] = [
  {
    id: 1,
    message: "Юридическая информация:",
    isTitle: true,
  },
  {
    id: 2,
    message: "Политика конфиденциальности",
    link: "#",
    isTitle: false,
  },
  {
    id: 3,
    message: "Обработка персональных данных",
    link: "#",
    isTitle: false,
  },
]

export { type IFooterLinksItems, FOOTER_LINKS_ITEMS, FOOTER_SECURE_ITEMS };