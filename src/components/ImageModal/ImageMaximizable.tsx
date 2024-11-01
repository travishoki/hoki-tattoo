import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';
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
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

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
