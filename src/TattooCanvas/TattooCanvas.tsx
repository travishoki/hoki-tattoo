import React, { useContext } from 'react';
import { getHeightFromWidth, getWidthFromHeight } from '~helpers/numbers';
import { getScreenWidth, getIsLandscape } from '~helpers/screen';
import ImgTattooSmall from '~images/tattoo-small.jpg';
import {
	LAPTOP_HEIGHT,
	ORIGINAL_HEIGHT,
	ORIGINAL_WIDTH,
	SPOTS,
} from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';
import { MobileContext } from 'src/App.context';

const isLandscape = getIsLandscape();
const screenWidth = getScreenWidth();

export const TattooCanvas = () => {
	const { viewerHeight } = useContext(MobileContext);
	const viewerWidth = isLandscape ? LAPTOP_HEIGHT : screenWidth;

	let width: number;
	let height: number;
	const shouldUseHeight =
		viewerWidth / viewerHeight > ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

	if (shouldUseHeight) {
		height = viewerHeight;
		width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
	} else {
		width = viewerWidth;
		height = getHeightFromWidth(width, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
	}

	const left = isLandscape ? 0 : (getScreenWidth() - width) / 2;
	const top = isLandscape ? 0 : (viewerHeight - height) / 2;

	return (
		<div className="tattoo-canvas" style={{ height, left, top, width }}>
			{SPOTS.map((spot, index) => (
				<Spot
					key={index}
					{...spot}
					height={height}
					num={index + 1}
					width={width}
				/>
			))}

			<img alt="Tattoo" height={height} src={ImgTattooSmall} width={width} />

			<MagnifyingGlass />
		</div>
	);
};
