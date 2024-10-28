import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';

export const ArtNeoTraditionalPage = () => {
	return (
		<Page backLink="/art" title="Neo Traditional">
			<p>
				The neo traditional style combines elements of both traditional and
				modern tattoo designs, often featuring bold lines, vibrant colors, and a
				mix of familiar and unique subject matter.
			</p>

			<ExternalLink
				link="https://certifiedtattoo.com/neo-traditional-tattoos"
				title="certifiedtattoo.com"
			/>
		</Page>
	);
};
