import React from 'react';
import ImgTattooSmall from '~images/tattoo-small.jpg';
import { SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';

export const TattooCanvas = ({
	height,
	left,
	top,
	width,
}: TattooCanvasProps) => {
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

type TattooCanvasProps = {
	height: number;
	left: number;
	top: number;
	width: number;
};
