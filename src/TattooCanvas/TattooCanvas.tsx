import React, { useState } from 'react';
import { ImageModal } from '~components/ImageModal/ImageModal';
import ImgTattoo from '~images/tattoo/tattoo.jpg';
import ImgTattooSmall from '~images/tattoo/tattoo-small.jpg';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH, SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import './TattooCanvas.scss';
import { getCanvasDimensions } from './TattooCanvas.helpers';

export const TattooCanvas = ({
	viewerHeight,
	viewerWidth,
}: TattooCanvasProps) => {
	const [selectedImg, setSelectedImg] = useState(false);

	const { height, left, top, width } = getCanvasDimensions(
		viewerWidth,
		viewerHeight,
	);

	const onClickMaginifyGlass = () => setSelectedImg(!selectedImg);

	return (
		<>
			{selectedImg && (
				<ImageModal
					dimensions={[ORIGINAL_WIDTH, ORIGINAL_HEIGHT]}
					onClose={onClickMaginifyGlass}
					src={ImgTattoo}
				/>
			)}

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

				<MagnifyingGlass onClick={onClickMaginifyGlass} />
			</div>
		</>
	);
};

type TattooCanvasProps = {
	viewerHeight: number;
	viewerWidth: number;
};
