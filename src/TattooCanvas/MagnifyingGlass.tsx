import React, { useState } from 'react';
import { ImageModal } from '~components/ImageModal/ImageModal';
import ImgTattoo from '~images/tattoo.jpg';
import './MagnifyingGlass.scss';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH } from 'src/const';

export const MagnifyingGlass = () => {
	const [selectedImg, setSelectedImg] = useState(false);
	const onClick = () => setSelectedImg(!selectedImg);

	return (
		<>
			{selectedImg && (
				<ImageModal
					dimensions={[ORIGINAL_WIDTH, ORIGINAL_HEIGHT]}
					onClose={onClick}
					src={ImgTattoo}
				/>
			)}
			<i className="fa fa-search-plus magnifying-glass" onClick={onClick} />
		</>
	);
};
