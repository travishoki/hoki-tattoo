import React from 'react';
import { Page } from '../../components/Page/Page';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { LinkType } from 'src/pages/dragon/DragonPage.const';

export const PickASpotPage = ({ links }: PickASpotPageProps) => {
	return (
		<Page title="Pick A Spot">
			<p>Click a circle to learn more</p>

			<SubPageLinks links={links} />
		</Page>
	);
};

type PickASpotPageProps = {
	links: LinkType[];
};
