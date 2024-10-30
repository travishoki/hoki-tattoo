// Text Info Box
export const LAPTOP_HEIGHT = 650;
export const LAPTOP_WIDTH = 600;

// Tattoo Size
export const ORIGINAL_WIDTH = 1179;
export const ORIGINAL_HEIGHT = 2047;

// Tattoo Spots
export const SPOTS: SpotType[] = [
	{
		link: '/art',
		title: 'Art',
		x: 0.87,
		y: 0.8,
	},
	{
		link: '/dragon',
		title: 'Dragon',
		x: 0.385,
		y: 0.125,
	},
	{
		link: '/journey',
		title: 'Journey',
		x: 0.8,
		y: 0.53,
	},
	{
		link: '/kanji',
		title: 'Kanji',
		x: 0.055,
		y: 0.285,
	},
	{
		link: '/koi',
		title: 'Koi',
		x: 0.655,
		y: 0.725,
	},
	{
		link: '/sun',
		title: 'Sun',
		x: 0.23,
		y: 0.165,
	},
	{
		link: '/torii',
		title: 'Torii',
		x: 0.9,
		y: 0.059,
	},
];

export type SpotType = {
	link: string;
	title: string;
	x: number;
	y: number;
};
