import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { LinkType } from '../dragon/DragonPage.const';
import { SPOTS } from './spots';

const spotList: LinkType[] = [
	{
		link: '/melody/meaning',
		title: 'Meaning',
	},
];

export const HomePage = () => {
	return <PickASpotPage spotList={spotList} spots={SPOTS} />;
};
