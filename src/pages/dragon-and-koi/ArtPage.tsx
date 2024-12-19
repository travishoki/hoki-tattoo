import React from 'react';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { Page } from '../../components/Page/Page';
import { ART_LINKS } from './ArtPage.const';

export const ArtPage = ({ root }: ArtPageProps) => {
	return (
		<Page title="Art">
			<SubPageLinks links={ART_LINKS} root={root} />
		</Page>
	);
};

type ArtPageProps = {
	root: string;
};
