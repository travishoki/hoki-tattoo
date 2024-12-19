import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { SPOTS } from './spots';

const spotList = [
	{
		link: '/koi/why',
		title: 'Why',
	},
	{
		link: '/koi/art',
		title: 'Art',
	},
	{
		link: '/koi/journey',
		title: 'Journey',
	},
	{
		link: '/koi/info',
		title: 'Info',
		x: 0.63,
		y: 0.725,
	},
];

export const HomePage = () => {
	return <PickASpotPage spotList={spotList} spots={SPOTS} />;
};
