import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { SPOTS } from './spots';

const numberedSpots = SPOTS.map((spot, index) => ({
	link: spot.link,
	title: `${index + 1}) ${spot.title}`,
}));

const spotList = [
	{
		link: '/dragon/art',
		title: 'Art',
	},
	{
		link: '/dragon/journey',
		title: 'Journey',
	},
	{
		link: '/dragon/why',
		title: 'Why',
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
		link: '/dragon/asian-vs-european',
		title: 'Asian vs European',
		x: 0,
		y: 0,
	},
];

const links = [...numberedSpots, ...spotList];

export const HomePage = () => {
	return <PickASpotPage links={links} />;
};
