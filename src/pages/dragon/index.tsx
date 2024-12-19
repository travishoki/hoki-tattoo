import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileArtworkToggle } from '~components/Page/MobileArtworkToggle/MobileArtworkToggle';
import { getIsLandscape, getIsPortrait, getScreenWidth } from '~helpers/screen';
import { TattooCanvas } from '../../TattooCanvas/TattooCanvas';
import { InfoBox } from '../../InfoBox/InfoBox';

import { MobileContext } from '../../App.context';
import { LAPTOP_HEIGHT } from '../../types';
import { getIntialViewerHeight } from '../../App.helpers';

const isPortrait = getIsPortrait();
const isLandscape = getIsLandscape();
const screenWidth = getScreenWidth();

export const DragonPage = () => {
	const [viewerHeight, setViewerHeight] = useState(getIntialViewerHeight());
	const viewerWidth = isLandscape ? LAPTOP_HEIGHT : screenWidth;

	return (
		<MobileContext.Provider value={{ setViewerHeight, viewerHeight }}>
			<TattooCanvas viewerHeight={viewerHeight} viewerWidth={viewerWidth} />
			{isPortrait && <MobileArtworkToggle />}

			<InfoBox>
				<Outlet />
			</InfoBox>
		</MobileContext.Provider>
	);
};
