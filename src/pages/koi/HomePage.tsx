import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { SPOTS } from './spots';

const numberedSpots = SPOTS.map((spot, index) => ({
	link: spot.link,
	title: `${index + 1}) ${spot.title}`,
}));

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
];

const links = [...numberedSpots, ...spotList];

export const HomePage = () => {
	return <PickASpotPage links={links} />;
};
