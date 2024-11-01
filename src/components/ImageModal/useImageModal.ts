import { useState } from 'react';

export const useImageModal = () => {
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	const onClickImage = (src: string) => {
		setSelectedImg(src);
	};

	const onCloseImage = () => {
		console.log('%c---- %s -----', 'font-size: 12px;', 'onCloseImage');
		setSelectedImg(null);
	};

	return { onClickImage, onCloseImage, selectedImg };
};
