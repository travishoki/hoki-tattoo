import React from 'react';
import { Page } from '../../components/Page/Page';
import ImgMelody from '~images/melody-at-wedding.jpg';
import ImgMelodySmall from '~images/melody-at-wedding-small.jpg';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';

export const MeaningPage = () => {
	return (
		<Page title="Meaning">
			<p>Meaning</p>
			<ImageMaximizable
				alt="Melody"
				dimensions={[300, 449]}
				src={ImgMelodySmall}
				srcLarge={ImgMelody}
				srcLargeDimensions={[1367, 2048]}
			/>
		</Page>
	);
};
