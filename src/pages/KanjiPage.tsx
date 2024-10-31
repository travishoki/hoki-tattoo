import React from 'react';
import { Page } from '../components/Page/Page';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { SubTitle } from '~components/SubTitle/SubTitle';
import ImgCranes from '~images/1001-cranes.jpg';
import ImgCranesFrame from '~images/1001-cranes-frame.jpg';
import ImgCranesFrameSmall from '~images/1001-cranes-frame-small.jpg';
import ImgCranesSmall from '~images/1001-cranes-small.jpg';
import ImgKanji from '~images/hoki-kanji.jpg';
import ImgKanjiSmall from '~images/hoki-kanji-small.jpg';

export const KanjiPage = () => {
	return (
		<Page title="Kanji">
			<SubTitle>Kanji</SubTitle>
			<p>
				&quot;Hoki&quot; is my family surname. These are the Japanese Kanji
				characters for Hoki.
			</p>

			<ImageMaximizable
				alt="Kanji"
				dimensions={[300, 389]}
				src={ImgKanjiSmall}
				srcLarge={ImgKanji}
				srcLargeDimensions={[790, 1024]}
			/>
			<p>Hoki roughly translated means &quot;Keaper of Joy&quot;</p>

			<SubTitle>1001 Cranes</SubTitle>
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
