import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';

export const DragonJapaneseVsChinesePage = () => {
	return (
		<Page backLink="/dragon" title="Japanese vs Chinese">
			<p>
				The style and appearance of the dragon was heavily influenced by the
				Chinese dragon, especially the three-clawed long (龍) dragons which were
				introduced in Japan from China in ancient times.
			</p>
			<ExternalLink
				link="https://en.m.wikipedia.org/wiki/Japanese_dragon"
				title="Japanese dragon"
			/>
		</Page>
	);
};
