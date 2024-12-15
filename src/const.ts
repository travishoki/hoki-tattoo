// Text Info Box
export const LAPTOP_HEIGHT = 650;
export const LAPTOP_WIDTH = 600;

// Tattoo Size
export const ORIGINAL_WIDTH = 2480;
export const ORIGINAL_HEIGHT = 3508;

// Heights
export const MOBILE_SIZER_HEIGHT = 60;
export const HEADER_HEIGHT = 100;
export const MIN_VIEWER_HEIGHT = 300;

// Tattoo Spots
export const SPOTS: SpotType[] = [
	{
		link: '/kanji',
		title: 'Kanji',
		x: 0.12,
		y: 0.3,
	},
	{
		link: '/dragon',
		title: 'Dragon',
		x: 0.37,
		y: 0.1,
	},
	{
		link: '/koi',
		title: 'Koi',
		x: 0.63,
		y: 0.725,
	},
];

export type SpotType = {
	link: string;
	title: string;
	x: number;
	y: number;
};
