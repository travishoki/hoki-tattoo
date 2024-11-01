import React, { useState } from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { ImageItem, ImageItemProps } from './ImageItem';

export const ImageMaximizable = ({
	alt,
	className,
	dimensions,
	imageClassName,
	src,
	srcLarge,
	srcLargeDimensions,
}: ImageMaximizableProps) => {
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	const onClickImage = (src: string) => {
		setSelectedImg(src);
	};

	const onCloseImage = () => {
		setSelectedImg(null);
	};

	return (
		<>
			{selectedImg && (
				<ImageModal
					dimensions={srcLargeDimensions ?? dimensions}
					onClose={onCloseImage}
					src={srcLarge ?? selectedImg}
				/>
			)}

			<ImageItem
				alt={alt}
				className={className}
				dimensions={dimensions}
				imageClassName={imageClassName}
				onClick={onClickImage}
				src={src}
				srcLarge={srcLarge}
				srcLargeDimensions={srcLargeDimensions}
			/>
		</>
	);
};

export type ImageMaximizableProps = Omit<ImageItemProps, 'onClick'>;
