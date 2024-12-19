import React from 'react';
import { Page } from '../../components/Page/Page';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { SPOTS } from 'src/const';

const numberedSpots = SPOTS.map((spot, index) => ({
	link: spot.link,
	title: `${index + 1}) ${spot.title}`,
}));

const links = [
	...numberedSpots,
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
];

export const HomePage = () => {
	return (
		<Page title="Pick A Spot">
			<p>Click a circle to learn more</p>

			<SubPageLinks links={links} />
		</Page>
	);
};