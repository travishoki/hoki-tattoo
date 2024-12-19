import React from 'react';
import { Page } from '../../components/Page/Page';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
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
	return (
		<Page title="Pick A Spot">
			<p>Click a circle to learn more</p>

			<SubPageLinks links={links} />
		</Page>
	);
};
