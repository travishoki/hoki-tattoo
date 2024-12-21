import React from 'react';
import { Page } from '../../components/Page/Page';
import ImgMelody from '~images/melody-at-wedding.jpg';
import ImgMelodySmall from '~images/melody-at-wedding-small.jpg';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';

export const HomePage = () => {
	return (
		<Page title="Melody">
			<ImageMaximizable
				alt="Melody"
				dimensions={[300, 449]}
				src={ImgMelodySmall}
				srcLarge={ImgMelody}
				srcLargeDimensions={[1367, 2048]}
			/>
			<p>
				This piece is if for my Mom, Melody. She passed away in March of 2024.
			</p>
			<p>
				My Grandma named her first daughter &quot;melody&quot; because of her
				love of music.
			</p>
		</Page>
	);
};
