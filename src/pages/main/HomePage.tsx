import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { LinkType } from '../dragon/DragonPage.const';
import { SPOTS } from './spots';

const numberedSpots = SPOTS.map((spot, index) => ({
	link: spot.link,
	title: `${index + 1}) ${spot.title}`,
}));

const spotList: LinkType[] = [];

const links = [...numberedSpots, ...spotList];

export const HomePage = () => {
	return <PickASpotPage links={links} />;
};
