export const SPOTS: SpotType[] = [
  {
    description: "asdf",
    x: 117,
    y: 102,
    title: "Dragon",
  },
  {
    description: "asdf",
    x: 10,
    y: 180,
    title: "Kanji",
  },
  {
    description: "asdf",
    x: 182,
    y: 425,
    title: "Koi",
  },
  {
    description: "asdf",
    x: 265,
    y: 65,
    title: "Torii",
  },
  {
    description: "asdf",
    x: 65,
    y: 126,
    title: "Japenese Sun",
  },
];

export type SpotType = {
  description: string;
  title: string;
  x: number;
  y: number;
};
