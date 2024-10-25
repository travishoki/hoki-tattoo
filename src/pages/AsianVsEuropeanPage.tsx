import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';

export const AsianVsEuropeanPage = () => {
	return (
		<Page backLink="/dragon" title="Asian vs European">
			<p>
				Most Japanese ones are water deities associated with rainfall and bodies
				of water, and are typically depicted as large, wingless, serpentine
				creatures with clawed feet.
			</p>
			<ExternalLink
				link="https://en.m.wikipedia.org/wiki/Japanese_dragon"
				title="Japanese dragon"
			/>
		</Page>
	);
};
