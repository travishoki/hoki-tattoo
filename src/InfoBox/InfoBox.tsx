import React, { ReactNode, useContext } from 'react';
import { getIsLandscape, getScreenHeight } from '~helpers/screen';
import { LAPTOP_HEIGHT, LAPTOP_WIDTH, MOBILE_SIZER_HEIGHT } from 'src/types';
import { MobileContext } from 'src/App.context';
import './InfoBox.scss';

const isLandscape = getIsLandscape();
const screenHeight = getScreenHeight();

export const InfoBox = ({ children }: InfoBoxProps) => {
	const { viewerHeight } = useContext(MobileContext);

	const mobileHeight = `${screenHeight - viewerHeight - MOBILE_SIZER_HEIGHT}px`;
	const tabletHeight = `${LAPTOP_HEIGHT}px`;

	const height = isLandscape ? tabletHeight : mobileHeight;
	const width = isLandscape ? `${LAPTOP_WIDTH}px` : '100%';

	const top = isLandscape ? 0 : viewerHeight + MOBILE_SIZER_HEIGHT;

	return (
		<div className="info-box" style={{ height, top, width }}>
			{children}
		</div>
	);
};

type InfoBoxProps = {
	children: ReactNode;
};
