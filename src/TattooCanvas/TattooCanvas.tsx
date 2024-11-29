import React, { useState } from 'react';
import { ImageModal } from '~components/ImageModal/ImageModal';
import ImgTattooColor from '~images/tattoo/tattoo-color.jpg';
import ImgTattooColorSmall from '~images/tattoo/tattoo-color-small.jpg';
import ImgTattooSkin from '~images/tattoo/tattoo-skin.jpg';
import ImgTattooSkinSmall from '~images/tattoo/tattoo-skin-small.jpg';
import ImgTattooOutline from '~images/tattoo/tattoo-outline.jpg';
import ImgTattooOutlineSmall from '~images/tattoo/tattoo-outline-small.jpg';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH, SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import { getCanvasDimensions, getNewVersion } from './TattooCanvas.helpers';
import { VersionClicker } from './VersionClicker';
import './TattooCanvas.scss';

const imgVersions = [ImgTattooColor, ImgTattooOutline, ImgTattooSkin];
const imgSmallVersions = [
	ImgTattooColorSmall,
	ImgTattooOutlineSmall,
	ImgTattooSkinSmall,
];

export const TattooCanvas = ({
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
				{SPOTS.map((spot, index) => (
					<Spot
						key={index}
						{...spot}
						height={height}
						num={index + 1}
						width={width}
					/>
				))}

				<img alt="Tattoo" height={height} src={imgSmall} width={width} />

				<VersionClicker onClick={onClickVersion} />
				<MagnifyingGlass onClick={onClickMaginifyGlass} />
			</div>
		</>
	);
};

type TattooCanvasProps = {
	viewerHeight: number;
	viewerWidth: number;
};
