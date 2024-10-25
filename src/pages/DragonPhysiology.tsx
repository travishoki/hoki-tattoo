import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';

export const DragonPhysiologyPage = () => {
	return (
		<Page backLink="/dragon" title="Physiology">
			<p>
				Chinese dragons have nine characteristics which are a complex
				combination. They have a camel&apos;s head, a demon&apos;s eyes, a
				cow&apos;s ears, a deer&apos;s horns, a clam&apos;s belly, a
				snake&apos;s neck, an eagle&apos;s claws, a tiger&apos;s paws and 117
				carp scales.
			</p>
			<ExternalLink
				link="https://www.dragonsinn.net/chinese-dragons/#phy"
				title="Physiology of Chinese Dragons"
			/>
		</Page>
	);
};
