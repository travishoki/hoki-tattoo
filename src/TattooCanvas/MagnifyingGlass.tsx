import React, { useState } from 'react';
import { ImageModal } from '~components/ImageModal/ImageModal';
import ImgTattoo from '~images/tattoo.jpg';
import './MagnifyingGlass.scss';

export const MagnifyingGlass = () => {
	const [selectedImg, setSelectedImg] = useState(false);
	const onClick = () => setSelectedImg(!selectedImg);

	return (
		<>
			{selectedImg && (
				<ImageModal
					onClose={onClick}
					src={ImgTattoo}
					srcLargeDimensions={[1179, 2556]}
				/>
			)}
			<i className="fa fa-search magnifying-glass" onClick={onClick} />
		</>
	);
};
