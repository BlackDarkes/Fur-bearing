interface IHeaderNavItems {
  id: number;
  title: string;
  href: string;
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
  }
];

export { type IHeaderNavItems, HEADER_NAV_ITEMS };