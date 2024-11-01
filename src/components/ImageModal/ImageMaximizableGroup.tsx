import React from 'react';

import { ImageMaximizable, ImageMaximizableProps } from './ImageMaximizable';

export const ImageMaximizableGroup = ({ list }: ImageModalProps) => {
	return (
		<>
			{list.map((props, index) => (
				<ImageMaximizable key={index} {...props} />
			))}
		</>
	);
};

type ImageModalProps = {
	list: ImageMaximizableProps[];
};
