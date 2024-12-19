import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileArtworkToggle } from '~components/Page/MobileArtworkToggle/MobileArtworkToggle';
import { getIsLandscape, getIsPortrait, getScreenWidth } from '~helpers/screen';

import ImgTattooSkin from '~images/tattoo/koi-skin.jpg';
import ImgTattooSkinSmall from '~images/tattoo/koi-skin-small.jpg';
import ImgTattooTemplate from '~images/tattoo/koi-template.jpg';
import ImgTattooTemplateSmall from '~images/tattoo/koi-template-small.jpg';

import { TattooCanvas } from '../../TattooCanvas/TattooCanvas';
import { InfoBox } from '../../InfoBox/InfoBox';

import { MobileContext } from '../../App.context';
import { LAPTOP_HEIGHT } from '../../types';
import { getIntialViewerHeight } from '../../App.helpers';

const isPortrait = getIsPortrait();
const isLandscape = getIsLandscape();
const screenWidth = getScreenWidth();

const imgVersions = [ImgTattooSkin, ImgTattooTemplate];
const imgSmallVersions = [ImgTattooSkinSmall, ImgTattooTemplateSmall];

export const KoiPage = () => {
	const [viewerHeight, setViewerHeight] = useState(getIntialViewerHeight());
	const viewerWidth = isLandscape ? LAPTOP_HEIGHT : screenWidth;

	return (
		<MobileContext.Provider value={{ setViewerHeight, viewerHeight }}>
			<TattooCanvas
				imgSmallVersions={imgSmallVersions}
				imgVersions={imgVersions}
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
