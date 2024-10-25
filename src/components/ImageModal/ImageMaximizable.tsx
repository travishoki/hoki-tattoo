import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

import './ImageMaximizable.scss';

export const ImageMaximizable = ({
	alt,
	className,
	dimensions,
	src,
	srcLarge,
	srcLargeDimensions,
}: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	const height = dimensions[1];
	const width = dimensions[0];

	return (
		<div
			className="image-maximizable"
			style={{
				height,
				width,
			}}
		>
			{selectedImg && (
				<ImageModal
					dimensions={srcLargeDimensions}
					onClose={onCloseImage}
					src={srcLarge ?? selectedImg}
				/>
			)}

			<div className="zoom-overlay" onClick={() => onClickImage(src)}>
				<i className="fa fa-search-plus" />
			</div>

			<img
				alt={alt}
				className={className}
				height={height}
				src={src}
				width={width}
			/>
		</div>
	);
};

type ImageMaximizableProps = {
	alt: string;
	className?: string;
	dimensions: number[];
	src: string;
	srcLarge?: string;
	srcLargeDimensions: number[];
};
