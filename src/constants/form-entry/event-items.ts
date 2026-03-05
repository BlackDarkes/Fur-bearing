interface IEventItems {
  id: number;
  name: string;
}

const EVENT_ITEMS: IEventItems[] = [
  {
    id: 1,
    name: "Концерт1",
  },
  {
    id: 2,
    name: "Концерт2",
  },
  {
    id: 3,
    name: "Концерт3",
  },
];

export { type IEventItems, EVENT_ITEMS };