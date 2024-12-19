import React from 'react';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { Page } from '../../components/Page/Page';
import { ART_LINKS } from './ArtPage.const';

export const ArtPage = () => {
	return (
		<Page title="Art">
			<SubPageLinks links={ART_LINKS} />
		</Page>
	);
};
