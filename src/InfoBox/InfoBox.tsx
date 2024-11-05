import React, { ReactNode, useContext } from 'react';
import { getIsLandscape, getSreenHeight } from '~helpers/screen';
import { LAPTOP_HEIGHT, LAPTOP_WIDTH, TOGGLE_HEIGHT } from 'src/const';
import { MobileContext } from 'src/App.context';
import './InfoBox.scss';

const isLandscape = getIsLandscape();
const screenHeight = getSreenHeight();

export const InfoBox = ({ children }: InfoBoxProps) => {
	console.log('%c---- %s -----', 'font-size: 12px;', 'InfoBox');

	const { viewerSize } = useContext(MobileContext);

	console.log(`viewerSize: ${viewerSize}`);
	console.log(`TOGGLE_HEIGHT: ${TOGGLE_HEIGHT}`);

	const mobileHeight = `${screenHeight - viewerSize - TOGGLE_HEIGHT}px`;
	const tabletHeight = `${LAPTOP_HEIGHT}px`;

	const height = isLandscape ? tabletHeight : mobileHeight;
	const width = isLandscape ? `${LAPTOP_WIDTH}px` : '100%';

	const top = isLandscape ? 0 : viewerSize + TOGGLE_HEIGHT;

	return (
		<div className="info-box" style={{ height, top, width }}>
			<div className="info-box-inner">{children}</div>
		</div>
	);
};

type InfoBoxProps = {
	children: ReactNode;
};
