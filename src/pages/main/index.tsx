import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileArtworkToggle } from '~components/Page/MobileArtworkToggle/MobileArtworkToggle';
import { getIsLandscape, getIsPortrait, getScreenWidth } from '~helpers/screen';

import ImgTattooFigure from '~images/tattoo/figure.jpg';
import ImgTattooFigureSmall from '~images/tattoo/figure-small.jpg';

import { TattooCanvas } from '../../TattooCanvas/TattooCanvas';
import { InfoBox } from '../../InfoBox/InfoBox';

import { MobileContext } from '../../App.context';
import { LAPTOP_HEIGHT } from '../../types';
import { getIntialViewerHeight } from '../../App.helpers';

import { SPOTS } from './spots';

const isPortrait = getIsPortrait();
const isLandscape = getIsLandscape();
const screenWidth = getScreenWidth();

const imgVersions = [ImgTattooFigure];
const imgSmallVersions = [ImgTattooFigureSmall];

export const MainPage = () => {
	const [viewerHeight, setViewerHeight] = useState(getIntialViewerHeight());
	const viewerWidth = isLandscape ? LAPTOP_HEIGHT : screenWidth;

	return (
		<MobileContext.Provider value={{ setViewerHeight, viewerHeight }}>
			<TattooCanvas
				imgSmallVersions={imgSmallVersions}
				imgVersions={imgVersions}
				spots={SPOTS}
				viewerHeight={viewerHeight}
				viewerWidth={viewerWidth}
			/>
			{isPortrait && <MobileArtworkToggle />}

			<InfoBox>
				<Outlet />
			</InfoBox>
		</MobileContext.Provider>
	);
};
