import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';
import { ImgCaption } from '~components/ImgCaption/ImgCaption';

export const DragonJapaneseVsChinesePage = () => {
	return (
		<Page backLink="/dragon" title="Japanese vs Chinese">
			<p>
				The style and appearance of the dragon was heavily influenced by the
				Chinese dragon, especially the three-clawed long (龍) dragons which were
				introduced in Japan from China in ancient times.
			</p>

			<img
				alt="Chinese Dragon"
				height="239"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nine-Dragons1.jpg/440px-Nine-Dragons1.jpg"
				width="400"
			/>
			<ImgCaption text="Chinese Dragon" />

			<img
				alt="Japenese Dragon"
				height="400"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hokusai_Dragon.jpg/440px-Hokusai_Dragon.jpg"
				width="400"
			/>
			<ImgCaption text="Japanese Dragon" />

			<ExternalLink
				link="https://en.m.wikipedia.org/wiki/Japanese_dragon"
				title="Japanese dragon"
			/>
		</Page>
	);
};
