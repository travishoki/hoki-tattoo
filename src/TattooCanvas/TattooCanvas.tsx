import React from 'react';
import { getWidthFromHeight } from '~helpers/numbers';
import ImgTattooSmall from '~images/tattoo-small.jpg';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH, SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';

export const TattooCanvas = ({ height }: TattooCanvasProps) => {
	const width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);

	return (
		<div className="tattoo-canvas" style={{ height, width }}>
			{SPOTS.map((spot, index) => (
				<Spot key={index} {...spot} height={height} width={width} />
			))}

			<img alt="Tattoo" height={height} src={ImgTattooSmall} width={width} />

			<MagnifyingGlass />
		</div>
	);
};

type TattooCanvasProps = {
	height: number;
};
