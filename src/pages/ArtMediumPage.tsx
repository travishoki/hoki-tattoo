import React from 'react';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import ImgIpadArt from '~images/ipad-art.jpg';
import ImgIpadArtSmall from '~images/ipad-art-small.jpg';

import Img3dModel1 from '~images/3d-model-1.jpg';
import Img3dModel1Small from '~images/3d-model-1-small.jpg';
import Img3dModel2 from '~images/3d-model-2.jpg';
import Img3dModel2Small from '~images/3d-model-2-small.jpg';

import { Page } from '../components/Page/Page';
import { SubTitle } from '~components/SubTitle/SubTitle';
import './ArtMediumPage.scss';

export const ArtMediumPage = () => {
	return (
		<Page backLink="/art" title="Medium Traditional">
			<p>
				The artwork is drawn on an iPad using an apple pencil. I&apos;m using
				the Procreate app and eveything is drawn using the studio pen for both
				the brush and the eraser.
			</p>

			<ImageMaximizable
				alt="iPad Art"
				dimensions={[300, 300]}
				src={ImgIpadArtSmall}
				srcLarge={ImgIpadArt}
				srcLargeDimensions={[510, 510]}
			/>

			<SubTitle>Procreate Settings</SubTitle>
			<ul className="procreate-settings-list">
				<li>
					<p>Canvas:</p> <p>A4</p>
				</li>
				<li>
					<p>Pixel Width:</p> <p>2480px</p>
				</li>
				<li>
					<p>Pixel Height:</p> <p>3508px</p>
				</li>
				<li>
					<p>Physical Width:</p> <p>8.267 (210mm)</p>
				</li>
				<li>
					<p>Physical Height:</p> <p>11.693 (297mm)</p>
				</li>
				<li>
					<p>DPI:</p> <p>300</p>
				</li>
			</ul>

			<ImageMaximizable
				alt="3D Model"
				dimensions={[300, 300]}
				src={Img3dModel1Small}
				srcLarge={Img3dModel1}
				srcLargeDimensions={[2048, 2048]}
			/>
			<ImageMaximizable
				alt="3D Model"
				dimensions={[300, 300]}
				src={Img3dModel2Small}
				srcLarge={Img3dModel2}
				srcLargeDimensions={[2048, 2048]}
			/>
		</Page>
	);
};
