import React, { ReactNode, useContext } from 'react';
import { getIsLandscape, getSreenHeight } from '~helpers/screen';
import { LAPTOP_HEIGHT, LAPTOP_WIDTH } from 'src/const';
import { MobileContext } from 'src/App.context';
import './InfoBox.scss';

const isLandscape = getIsLandscape();

export const InfoBox = ({ children }: InfoBoxProps) => {
	const { viewerSize } = useContext(MobileContext);

	const mobileHeight = `${getSreenHeight() - viewerSize}px`;
	const tabletHeight = `${LAPTOP_HEIGHT}px`;

	const height = isLandscape ? tabletHeight : mobileHeight;
	const width = isLandscape ? `${LAPTOP_WIDTH}px` : '100%';

	return (
		<div className="info-box" style={{ height, width }}>
			{children}
		</div>
	);
};

type InfoBoxProps = {
	children: ReactNode;
};
