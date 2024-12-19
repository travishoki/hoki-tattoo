import React from 'react';
import { PickASpotPage } from '~components/PickASpotPage/PickASpotPage';
import { LinkType } from '../dragon/DragonPage.const';
import { SPOTS } from './spots';

const spotList: LinkType[] = [];

export const HomePage = () => {
	return <PickASpotPage spotList={spotList} spots={SPOTS} />;
};
