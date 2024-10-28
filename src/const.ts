export const SPOTS: SpotType[] = [
	{
		link: '/art',
		title: 'Art',
		x: 0.81,
		y: 0.74,
	},
	{
		link: '/dragon',
		title: 'Dragon',
		x: 0.38,
		y: 0.165,
	},
	{
		link: '/journey',
		title: 'Journey',
		x: 0.8,
		y: 0.5,
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
		title: 'Sun',
		x: 0.222,
		y: 0.195,
	},
	{
		link: '/torii',
		title: 'Torii',
		x: 0.9,
		y: 0.11,
	},
];

export type SpotType = {
	link: string;
	title: string;
	x: number;
	y: number;
};

export const LAPTOP_HEIGHT = 650;
export const LAPTOP_WIDTH = 600;
