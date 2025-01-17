import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { SPOTS } from './spots';

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

export const HomePage = () => {
	return <PickASpotPage spotList={spotList} spots={SPOTS} />;
};
