import React from 'react';
import { Page } from '../components/Page/Page';
import ImgSisterTattoo from '~images/sister-tattoo.jpg';

export const WhyPage = () => {
	return (
		<Page title="Why">
			<p>
				My sisters got their tattoos, of our name in Kanji, about 24 years ago I
				think. I was around 8ish. Ever since I was a little kid I thought about
				getting mine too. I&apos;ve just always wanted to and haven&apos;t done
				it yet.
			</p>
			<img alt="Sister Tattoos" src={ImgSisterTattoo} />
		</Page>
	);
};
