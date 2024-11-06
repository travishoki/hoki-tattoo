import React, { useContext } from 'react';
import { getScreenWidth, getIsLandscape } from '~helpers/screen';
import ImgTattooSmall from '~images/tattoo-small.jpg';
import { LAPTOP_HEIGHT, SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';
import { MobileContext } from 'src/App.context';
import { getCanvasDimensions } from './TattooCanvas.helpers';

const isLandscape = getIsLandscape();
const screenWidth = getScreenWidth();

export const TattooCanvas = () => {
	const { viewerHeight } = useContext(MobileContext);
	const viewerWidth = isLandscape ? LAPTOP_HEIGHT : screenWidth;

	const { height, left, top, width } = getCanvasDimensions(
		viewerWidth,
		viewerHeight,
	);

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
