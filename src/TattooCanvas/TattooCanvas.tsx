import React from 'react';
import { getWidthFromHeight } from '~helpers/numbers';
import ImgTattoo from '~images/tattoo.jpg';
import { SPOTS } from '../const';
import { Spot } from './Spot';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH } from './const';
import './TattooCanvas.scss';

export const TattooCanvas = ({ height }: TattooCanvasProps) => {
	const width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);

	return (
		<div className="tattoo-canvas" style={{ height, width }}>
			{SPOTS.map((spot, index) => (
				<Spot key={index} {...spot} height={height} width={width} />
			))}

			<img alt="Tattoo" height={height} src={ImgTattoo} width={width} />
		</div>
	);
};

type TattooCanvasProps = {
	height: number;
};
