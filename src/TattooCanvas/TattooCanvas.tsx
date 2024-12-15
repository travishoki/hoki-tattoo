import React, { useState } from 'react';
import { ImageModal } from '~components/ImageModal/ImageModal';

import ImgTattooSkin from '~images/tattoo/dragon-skin.jpg';
import ImgTattooSkinSmall from '~images/tattoo/dragon-skin-small.jpg';

import ImgTattooTemplate from '~images/tattoo/dragon-template.jpg';
import ImgTattooTemplateSmall from '~images/tattoo/dragon-template-small.jpg';

import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH, SPOTS } from '../const';
import { Spot } from './Spot';
import { MagnifyingGlass } from './MagnifyingGlass';
import { getCanvasDimensions, getNewVersion } from './TattooCanvas.helpers';
import { VersionClicker } from './VersionClicker';
import './TattooCanvas.scss';

const imgVersions = [ImgTattooSkin, ImgTattooTemplate];
const imgSmallVersions = [ImgTattooSkinSmall, ImgTattooTemplateSmall];

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
