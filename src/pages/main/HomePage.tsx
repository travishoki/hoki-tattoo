import React from 'react';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { Page } from '../../components/Page/Page';
import { LinkType } from '../dragon/DragonPage.const';
import { SPOTS } from './spots';

const numberedSpots = SPOTS.map((spot, index) => ({
	link: spot.link,
	title: `${index + 1}) ${spot.title}`,
}));

const spotList: LinkType[] = [];

const links = [...numberedSpots, ...spotList];

export const HomePage = () => {
	return (
		<Page title="Pick A Spot">
			<p>Click a circle to learn more</p>

			<SubPageLinks links={links} />
		</Page>
	);
};
