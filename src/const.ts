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
		link: '/dragon/kanji',
		title: 'Kanji',
		x: 0.12,
		y: 0.3,
	},
	{
		link: '/dragon/koi',
		title: 'Koi',
		x: 0.63,
		y: 0.725,
	},
	{
		link: '/dragon/color',
		title: 'Color',
		x: 0,
		y: 0,
	},
	{
		link: '/dragon/japanese-vs-chinese',
		title: 'Japanese vs Chinese',
		x: 0,
		y: 0,
	},
	{
		link: '/dragon/physiology',
		title: 'Physiology',
		x: 0,
		y: 0,
	},
	{
		link: '/dragon//dragon/asian-vs-european',
		title: 'Asian vs European',
		x: 0,
		y: 0,
	},
];

export type SpotType = {
	link: string;
	title: string;
	x: number;
	y: number;
};
