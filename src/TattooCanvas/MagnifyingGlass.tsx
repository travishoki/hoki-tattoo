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
					dimensions={[1179, 2556]}
					onClose={onClick}
					src={ImgTattoo}
				/>
			)}
			<i className="fa fa-search-plus magnifying-glass" onClick={onClick} />
		</>
	);
};
