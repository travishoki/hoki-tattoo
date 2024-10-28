import React from 'react';
import { Page } from '../components/Page/Page';

import ImgKanji from '~images/hoki-kanji-original-with-border.jpg';
import ImgCranes from '~images/1001-cranes.jpg';
import ImgCranesSmall from '~images/1001-cranes-small.jpg';
import ImgCranesFrame from '~images/1001-cranes-frame.jpg';
import ImgCranesFrameSmall from '~images/1001-cranes-frame-small.jpg';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';

export const KanjiPage = () => {
	return (
		<Page title="Kanji">
			<img alt="Tattoo" height="400" src={ImgKanji} width="309" />
			<p>
				&quot;Hoki&quot; is my family surname. These are the Japanese Kanji
				characters for Hoki.
			</p>
			<p>Hoki roughly translated means &quot;Keaper of Joy&quot;</p>

			<p>
				This is the 1001 Cranes that my family made for my wedding. They did an
				awesome job! Each crane was hand folded and shaped into the Japanese
				symbols spelling &quot;Hoki&quot;. I&apos;ve wanted this since I was a
				little kid. I have it hanging in my living room. It will bring luck to
				my house and family. Thanks family for making this for Lindsey and I.
			</p>
			<ImageMaximizable
				alt="Cranes Frame"
				dimensions={[300, 300]}
				src={ImgCranesFrameSmall}
				srcLarge={ImgCranesFrame}
				srcLargeDimensions={[960, 960]}
			/>
			<ImageMaximizable
				alt="Cranes"
				dimensions={[300, 375]}
				src={ImgCranesSmall}
				srcLarge={ImgCranes}
				srcLargeDimensions={[1638, 2048]}
			/>
		</Page>
	);
};
//
