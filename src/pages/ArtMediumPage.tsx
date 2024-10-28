import React from 'react';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import ImgIpadArt from '~images/ipad-art.jpg';
import ImgIpadArtSmall from '~images/ipad-art-small.jpg';
import { Page } from '../components/Page/Page';

export const ArtMediumPage = () => {
	return (
		<Page backLink="/art" title="Medium Traditional">
			<p>
				The artwork is drawn on an iPad using an apple pencil. I&apos;m using
				the Procreate app and eveything is drawn using the studio pen.
			</p>

			<ImageMaximizable
				alt="iPad Art"
				dimensions={[300, 300]}
				src={ImgIpadArtSmall}
				srcLarge={ImgIpadArt}
				srcLargeDimensions={[510, 510]}
			/>
		</Page>
	);
};
