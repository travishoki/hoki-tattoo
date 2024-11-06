import React from 'react';
import { getWidthFromHeight } from '~helpers/numbers';
import { getScreenWidth, getIsLandscape } from '~helpers/screen';
import ImgTattooSmall from '~images/tattoo-small.jpg';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH, SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';

const isLandscape = getIsLandscape();

export const TattooCanvas = ({ height }: TattooCanvasProps) => {
	const width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);

	const left = isLandscape ? 0 : (getScreenWidth() - width) / 2;

	return (
		<div className="tattoo-canvas" style={{ height, left, width }}>
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

type TattooCanvasProps = {
	height: number;
};
