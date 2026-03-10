interface IEventItems {
  id: number;
  name: string;
}

const EVENT_ITEMS: IEventItems[] = [
  {
    id: 1,
    name: 'Домодедово / ДК "Мир"',
  },
  {
    id: 2,
    name: 'Красногорск / ДК "Подмосковье"',
  },
  {
    id: 3,
    name: 'Краснодар / Кроп Арена',
  },
];

export { type IEventItems, EVENT_ITEMS };