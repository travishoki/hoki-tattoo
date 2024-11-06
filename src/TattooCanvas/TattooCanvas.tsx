import React, { useContext } from 'react';
import { getHeightFromWidth, getWidthFromHeight } from '~helpers/numbers';
import { getScreenWidth, getIsLandscape, getIsPortrait } from '~helpers/screen';
import ImgTattooSmall from '~images/tattoo-small.jpg';
import {
	LAPTOP_HEIGHT,
	LAPTOP_WIDTH,
	ORIGINAL_HEIGHT,
	ORIGINAL_WIDTH,
	SPOTS,
} from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';
import { MobileContext } from 'src/App.context';

const isLandscape = getIsLandscape();
const isPortrait = getIsPortrait();
const screenWidth = getScreenWidth();

export const TattooCanvas = () => {
	const { viewerHeight } = useContext(MobileContext);
	const viewerWidth = isLandscape ? LAPTOP_HEIGHT : screenWidth;

	let width: number;
	let height = LAPTOP_HEIGHT;
	let left = 0;
	let top = 0;

	if (isPortrait) {
		const shouldUseHeight =
			viewerWidth / viewerHeight > ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

		if (shouldUseHeight) {
			height = viewerHeight;
			width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
		} else {
			width = viewerWidth;
			height = getHeightFromWidth(width, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
		}

		left = (getScreenWidth() - width) / 2;
		top = (viewerHeight - height) / 2;
	} else {
		width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
	}

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
