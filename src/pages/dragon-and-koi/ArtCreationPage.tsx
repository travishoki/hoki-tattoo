import React from 'react';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';

import ImgIpadArt from '~images/art/ipad-art.jpg';
import ImgIpadArtSmall from '~images/art/ipad-art-small.jpg';

import ImgLeftArm from '~images/3d-model/left-arm-2.jpg';
import ImgLeftArmSmall from '~images/3d-model/left-arm-2-small.jpg';

import ImgRightArm from '~images/3d-model/right-arm-2.jpg';
import ImgRightArmSmall from '~images/3d-model/right-arm-2-small.jpg';

import { Page } from '../../components/Page/Page';
import { SubTitle } from '~components/SubTitle/SubTitle';

import { ImageMaximizableGroup } from '~components/ImageModal/ImageMaximizableGroup';
import './ArtCreationPage.scss';

export const ArtCreationPage = () => {
	return (
		<Page backLink="/art" title="Art Creation">
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
					<p>Physical Width:</p> <p>8.267&quot; (210mm)</p>
				</li>
				<li>
					<p>Physical Height:</p> <p>11.693&quot; (297mm)</p>
				</li>
				<li>
					<p>DPI:</p> <p>300</p>
				</li>
			</ul>

			<ImageMaximizableGroup
				list={[
					{
						alt: '3D Model',
						dimensions: [300, 300],
						src: ImgLeftArmSmall,
						srcLarge: ImgLeftArm,
						srcLargeDimensions: [2048, 2048],
					},
					{
						alt: '3D Model',
						dimensions: [300, 300],
						src: ImgRightArmSmall,
						srcLarge: ImgRightArm,
						srcLargeDimensions: [2048, 2048],
					},
				]}
			/>
		</Page>
	);
};
