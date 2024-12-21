import React from 'react';
import { Page } from '../../components/Page/Page';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { SubTitle } from '~components/SubTitle/SubTitle';
import ImgKanji from '~images/hoki-kanji.jpg';
import ImgKanjiMeaning from '~images/kanji-meaning.jpg';
import ImgKanjiSmall from '~images/hoki-kanji-small.jpg';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';

export const KoiKanjiPage = () => {
	return (
		<Page title="Kanji">
			<p>
				&quot;Miyagishima&quot; is my Bachan (Grandma)&apos;s surname. These are
				the Japanese Kanji characters for Miyagishima.
			</p>
			<ImageMaximizable
				alt="Kanji"
				dimensions={[300, 389]}
				src={ImgKanjiSmall}
				srcLarge={ImgKanji}
				srcLargeDimensions={[790, 1024]}
			/>
			<p>Miyagishima roughly translated means &quot;Keaper of Joy&quot;</p>

			<SubTitle>Kanji Meaning</SubTitle>
			<img src={ImgKanjiMeaning} />

			<p>宮 means &quot;palace, shrine, temple.&quot;</p>
			<p>城 means &quot;castle, fortress.&quot;</p>
			<p>島 means &quot;island.&quot;</p>
			<ExternalLink
				link="https://japanese-names.info/last-name/miyagishima"
				title="Kanji Names & Meanings - 6 variations"
			/>
		</Page>
	);
};
//
