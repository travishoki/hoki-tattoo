export const SPOTS: SpotType[] = [
  {
    link: "/dragon",
    x: 0.38,
    y: 0.165,
    title: "Dragon",
  },
  {
    link: "/kanji",
    x: 0.05,
    y: 0.285,
    title: "Kanji",
  },
  {
    link: "/koi",
    x: 0.653,
    y: 0.645,
    title: "Koi",
  },
  {
    link: "/sun",
    x: 0.222,
    y: 0.195,
    title: "Japenese Sun",
  },
  {
    link: "/torii",
    x: 0.9,
    y: 0.11,
    title: "Torii",
  },
];

export type SpotType = {
  link: string;
  title: string;
  x: number;
  y: number;
};
