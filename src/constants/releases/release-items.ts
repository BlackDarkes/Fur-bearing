interface IReleaseItems {
  id: number;
  title: string;
  music: string;
}

const RELEASES_ITEMS: IReleaseItems[] = [
  {
    id: 1,
    title: "Музыка",
    music: "/Fur-bearing/releases/music/music1.mp3",
  },
  {
    id: 2,
    title: "Музыка",
    music: "/Fur-bearing/releases/music/music1.mp3",
  },
  {
    id: 3,
    title: "Музыка",
    music: "/Fur-bearing/releases/music/music1.mp3",
  },
  {
    id: 4,
    title: "Музыка",
    music: "/Fur-bearing/releases/music/music1.mp3",
  },
  {
    id: 5,
    title: "Музыка",
    music: "/Fur-bearing/releases/music/music1.mp3",
  },
];

export { type IReleaseItems, RELEASES_ITEMS };