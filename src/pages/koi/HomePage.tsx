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
];

export const HomePage = () => {
	return <PickASpotPage spotList={spotList} spots={SPOTS} />;
};
