import React from 'react';
import { Page } from '../components/Page/Page';

import ImgKanji from '~images/hoki-kanji-original-with-border.jpg';
import ImgCranes from '~images/1001-cranes.jpg';
import ImgCranesFrame from '~images/1001-cranes-frame.jpg';

export const KanjiPage = () => {
	return (
		<Page title="Kanji">
			<p>Kanji</p>
			<img alt="Tattoo" height="400" src={ImgKanji} width="309" />

			<img alt="Tattoo" height="2048" src={ImgCranes} width="1638" />
			<p>
				This is the 1001 Cranes that my family made for my wedding. They did an
				awesome job! Each crane was hand folded and shaped into the Japanese
				symbols spelling &quot;Hoki&quot;. I&apos;ve wanted this since I was a
				little kid. I have it hanging in my living room. It will bring luck to
				my house and family. Thanks family for making this for Lindsey and I.
			</p>

			<img alt="Tattoo" height="960" src={ImgCranesFrame} width="960" />
		</Page>
	);
};
