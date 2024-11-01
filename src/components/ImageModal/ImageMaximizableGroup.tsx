import React, { useState } from 'react';

import { ImageModal } from './ImageModal';
import { ImageItem } from './ImageItem';
import { ImageMaximizableProps } from './ImageMaximizable';
import { getLeftIndex, getRightIndex } from './ImageMaximizableGroup.helpers';

export const ImageMaximizableGroup = ({ list }: ImageMaximizableGroupProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const onClickLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		e.stopPropagation();
		if (selectedIndex === null) return;

		const newselectedIndex = getLeftIndex(selectedIndex, list.length);
		setSelectedIndex(newselectedIndex);
	};
	const onClickRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		e.stopPropagation();
		if (selectedIndex === null) return;

		const newselectedIndex = getRightIndex(selectedIndex, list.length);
		console.log(`newselectedIndex: ${newselectedIndex}`);
		setSelectedIndex(newselectedIndex);
	};

	const onCloseImage = () => {
		setSelectedIndex(null);
	};

	const obj = selectedIndex !== null ? list[selectedIndex] : null;

	return (
		<>
			{obj !== null && (
				<ImageModal
					dimensions={obj.srcLargeDimensions ?? obj.dimensions}
					onClickLeft={onClickLeft}
					onClickRight={onClickRight}
					onClose={onCloseImage}
					src={obj.srcLarge ?? obj.src}
				/>
			)}

			{list.map((item, index) => (
				<ImageItem
					key={index}
					{...item}
					onClick={() => setSelectedIndex(index)}
				/>
			))}
		</>
	);
};

type ImageMaximizableGroupProps = {
	list: ImageMaximizableProps[];
};
