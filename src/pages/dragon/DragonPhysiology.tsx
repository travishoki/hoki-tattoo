import React from 'react';
import { Page } from '../../components/Page/Page';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

export const DragonPhysiologyPage = () => {
	return (
		<Page backLink="/dragon/dragon" title="Physiology">
			<p>
				Chinese dragons have nine characteristics which are a complex
				combination.
			</p>
			<ul>
				<li>Camel&apos;s head</li>
				<li>Demon&apos;s eyes</li>
				<li>Cow&apos;s ears</li>
				<li>Deer&apos;s horns</li>
				<li>Clam&apos;s belly</li>
				<li>Snake&apos;s neck</li>
				<li>Eagle&apos;s claws</li>
				<li>Tiger&apos;s paws</li>
				<li>117 carp scales</li>
			</ul>
			<ExternalLink
				link="https://www.dragonsinn.net/chinese-dragons/#phy"
				title="Physiology of Chinese Dragons"
			/>
		</Page>
	);
};
