export const SPOTS: SpotType[] = [
	{
		link: '/dragon',
		title: 'Dragon',
		x: 0.38,
		y: 0.165,
	},
	{
		link: '/kanji',
		title: 'Kanji',
		x: 0.05,
		y: 0.285,
	},
	{
		link: '/koi',
		title: 'Koi',
		x: 0.653,
		y: 0.645,
	},
	{
		link: '/sun',
		title: 'Japenese Sun',
		x: 0.222,
		y: 0.195,
	},
	{
		link: '/torii',
		title: 'Torii',
		x: 0.9,
		y: 0.11,
	},
	{
		link: '/journey',
		title: 'Journey',
		x: 0.8,
		y: 0.5,
	},
	{
		link: '/style',
		title: 'Style',
		x: 0.81,
		y: 0.74,
	},
];

export type SpotType = {
	link: string;
	title: string;
	x: number;
	y: number;
};
