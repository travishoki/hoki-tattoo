import React, { useState } from 'react';
import { ImageModal } from '~components/ImageModal/ImageModal';

import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH, SpotType } from '../types';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import { getCanvasDimensions, getNewVersion } from './TattooCanvas.helpers';
import { VersionClicker } from './VersionClicker';
import './TattooCanvas.scss';

export const TattooCanvas = ({
	imgSmallVersions,
	imgVersions,
	spots,
	viewerHeight,
	viewerWidth,
}: TattooCanvasProps) => {
	const [selectedImg, setSelectedImg] = useState(false);
	const [version, setVersion] = useState(1);

	const { height, left, top, width } = getCanvasDimensions(
		viewerWidth,
		viewerHeight,
	);

	const img = imgVersions[version - 1];
	const imgSmall = imgSmallVersions[version - 1];

	const onClickMaginifyGlass = () => setSelectedImg(!selectedImg);

	const onClickVersion = () => {
		const newVersion = getNewVersion(version, imgVersions.length);
		setVersion(newVersion);
	};

	return (
		<>
			{selectedImg && (
				<ImageModal
					dimensions={[ORIGINAL_WIDTH, ORIGINAL_HEIGHT]}
					onClose={onClickMaginifyGlass}
					src={img}
				/>
			)}

			<div className="tattoo-canvas" style={{ height, left, top, width }}>
				{spots.map((spot, index) => (
					<Spot
						key={index}
						{...spot}
						height={height}
						num={index + 1}
						width={width}
					/>
				))}

				<img alt="Tattoo" height={height} src={imgSmall} width={width} />

				{imgVersions.length > 1 && <VersionClicker onClick={onClickVersion} />}
				<MagnifyingGlass onClick={onClickMaginifyGlass} />
			</div>
		</>
	);
};

type TattooCanvasProps = {
	imgSmallVersions: string[];
	imgVersions: string[];
	spots: SpotType[];
	viewerHeight: number;
	viewerWidth: number;
};
