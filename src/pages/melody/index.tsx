import React from 'react';

import { OverarchingPage } from '~components/OverarchingPage/OverarchingPage';

import ImgTattooMelody from '~images/tattoo/melody.jpg';
import ImgTattooMelodySmall from '~images/tattoo/melody-small.jpg';

import { SPOTS } from './spots';

const imgVersions = [ImgTattooMelody];
const imgSmallVersions = [ImgTattooMelodySmall];

export const MelodyPage = () => {
	return (
		<OverarchingPage
			imgSmallVersions={imgSmallVersions}
			imgVersions={imgVersions}
			spots={SPOTS}
		/>
	);
};
