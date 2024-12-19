import React from 'react';

import { OverarchingPage } from '~components/OverarchingPage/OverarchingPage';

import ImgTattooSkin from '~images/tattoo/dragon-skin.jpg';
import ImgTattooSkinSmall from '~images/tattoo/dragon-skin-small.jpg';
import ImgTattooTemplate from '~images/tattoo/dragon-template.jpg';
import ImgTattooTemplateSmall from '~images/tattoo/dragon-template-small.jpg';

import { SPOTS } from './spots';

const imgVersions = [ImgTattooSkin, ImgTattooTemplate];
const imgSmallVersions = [ImgTattooSkinSmall, ImgTattooTemplateSmall];

export const DragonPage = () => {
	return (
		<OverarchingPage
			imgSmallVersions={imgSmallVersions}
			imgVersions={imgVersions}
			spots={SPOTS}
		/>
	);
};
