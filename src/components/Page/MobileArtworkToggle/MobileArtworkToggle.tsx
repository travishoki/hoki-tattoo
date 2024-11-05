import React, { useContext } from 'react';
import { getIsLandscape } from '~helpers/screen';
import { Arrow } from './Arrow';
// import { Dragger } from './Dragger';
import { MobileContext } from 'src/App.context';
import { TOGGLE_HEIGHT } from 'src/const';
import './MobileArtworkToggle.scss';

const isLandscape = getIsLandscape();

export const MobileArtworkToggle = () => {
	const { viewerHeight } = useContext(MobileContext);

	if (isLandscape) return null;

	return (
		<div
			className="mobile-artwork-toggle"
			style={{ height: TOGGLE_HEIGHT, top: viewerHeight }}
		>
			{/* <Dragger /> */}
			<Arrow />
		</div>
	);
};
