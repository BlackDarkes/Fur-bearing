interface IReleaseItems {
  id: number;
  title: string;
  music: string;
}

const RELEASES_ITEMS: IReleaseItems[] = [
  {
    id: 1,
    title: "Слушает БАХА ",
    music: "/Fur-bearing/releases/music/music1.mp3",
  },
  {
    id: 2,
    title: "гИИпноз",
    music: "/Fur-bearing/releases/music/music2.mp3",
  },
  {
    id: 3,
    title: "Трава у дома cover version",
    music: "/Fur-bearing/releases/music/music3.mp3",
  },
  {
    id: 4,
    title: "От винта!",
    music: "/Fur-bearing/releases/music/music4.mp3",
  },
  {
    id: 5,
    title: "Вершина",
    music: "/Fur-bearing/releases/music/music5.mp3",
  },
];

export { type IReleaseItems, RELEASES_ITEMS };