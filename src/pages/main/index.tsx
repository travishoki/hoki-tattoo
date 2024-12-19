import React from 'react';

import { OverarchingPage } from '~components/OverarchingPage/OverarchingPage';

import ImgTattooFigure from '~images/tattoo/figure.jpg';
import ImgTattooFigureSmall from '~images/tattoo/figure-small.jpg';

import { SPOTS } from './spots';

const imgVersions = [ImgTattooFigure];
const imgSmallVersions = [ImgTattooFigureSmall];

export const MainPage = () => {
	return (
		<OverarchingPage
			imgSmallVersions={imgSmallVersions}
			imgVersions={imgVersions}
			spots={SPOTS}
		/>
	);
};
