// Text Info Box
export const LAPTOP_HEIGHT = 650;
export const LAPTOP_WIDTH = 600;

// Tattoo Size
export const ORIGINAL_WIDTH = 2480;
export const ORIGINAL_HEIGHT = 3508;

// Tattoo Spots
export const SPOTS: SpotType[] = [
	{
		link: '/art',
		title: 'Art',
		x: 0.8,
		y: 0.8,
	},
	{
		link: '/dragon',
		title: 'Dragon',
		x: 0.37,
		y: 0.1,
	},
	{
		link: '/journey',
		title: 'Journey',
		x: 0.74,
		y: 0.53,
	},
	{
		link: '/kanji',
		title: 'Kanji',
		x: 0.137,
		y: 0.285,
	},
	{
		link: '/koi',
		title: 'Koi',
		x: 0.63,
		y: 0.725,
	},
	{
		link: '/sun',
		title: 'Sun',
		x: 0.28,
		y: 0.165,
	},
	{
		link: '/torii',
		title: 'Torii',
		x: 0.82,
		y: 0.059,
	},
	{
		link: '/why',
		title: 'Why',
		x: 0.05,
		y: 0.04,
	},
];

export type SpotType = {
	link: string;
	title: string;
	x: number;
	y: number;
};
