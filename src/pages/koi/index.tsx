import React from 'react';

import { OverarchingPage } from '~components/OverarchingPage/OverarchingPage';

import ImgTattooSkin from '~images/tattoo/koi-skin.jpg';
import ImgTattooSkinSmall from '~images/tattoo/koi-skin-small.jpg';
import ImgTattooTemplate from '~images/tattoo/koi-template.jpg';
import ImgTattooTemplateSmall from '~images/tattoo/koi-template-small.jpg';

import { SPOTS } from './spots';

const imgVersions = [ImgTattooSkin, ImgTattooTemplate];
const imgSmallVersions = [ImgTattooSkinSmall, ImgTattooTemplateSmall];

export const KoiPage = () => {
	return (
		<OverarchingPage
			imgSmallVersions={imgSmallVersions}
			imgVersions={imgVersions}
			spots={SPOTS}
		/>
	);
};
