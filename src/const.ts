export const SPOTS: SpotType[] = [
  {
    link: "/dragon",
    x: 117,
    y: 102,
    title: "Dragon",
  },
  {
    link: "/kanji",
    x: 10,
    y: 180,
    title: "Kanji",
  },
  {
    link: "/koi",
    x: 182,
    y: 425,
    title: "Koi",
  },
  {
    link: "/torii",
    x: 265,
    y: 65,
    title: "Torii",
  },
  {
    link: "/sun",
    x: 65,
    y: 126,
    title: "Japenese Sun",
  },
];

export type SpotType = {
  link: string;
  title: string;
  x: number;
  y: number;
};
