import React, { ReactNode, useContext } from 'react';
import { getIsLandscape, getSreenHeight } from '~helpers/screen';
import { LAPTOP_HEIGHT, LAPTOP_WIDTH, TOGGLE_HEIGHT } from 'src/const';
import { MobileContext } from 'src/App.context';
import './InfoBox.scss';

const isLandscape = getIsLandscape();
const screenHeight = getSreenHeight();

export const InfoBox = ({ children }: InfoBoxProps) => {
	const { viewerHeight } = useContext(MobileContext);

	const mobileHeight = `${screenHeight - viewerHeight - TOGGLE_HEIGHT}px`;
	const tabletHeight = `${LAPTOP_HEIGHT}px`;

	const height = isLandscape ? tabletHeight : mobileHeight;
	const width = isLandscape ? `${LAPTOP_WIDTH}px` : '100%';

	const top = isLandscape ? 0 : viewerHeight + TOGGLE_HEIGHT;

	return (
		<div className="info-box" style={{ height, top, width }}>
			{children}
		</div>
	);
};

type InfoBoxProps = {
	children: ReactNode;
};
