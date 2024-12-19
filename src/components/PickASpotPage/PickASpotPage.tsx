import React from 'react';
import { Page } from '../../components/Page/Page';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { LinkType } from 'src/pages/dragon/DragonPage.const';
import { SpotType } from 'src/types';

export const PickASpotPage = ({ spotList, spots }: PickASpotPageProps) => {
	const numberedSpots = spots.map((spot, index) => ({
		link: spot.link,
		title: `${index + 1}) ${spot.title}`,
	}));

	const links = [...numberedSpots, ...spotList];

	return (
		<Page title="Pick A Spot">
			<p>Click a circle to learn more</p>

			<SubPageLinks links={links} />
		</Page>
	);
};

type PickASpotPageProps = {
	spotList: LinkType[];
	spots: SpotType[];
};
