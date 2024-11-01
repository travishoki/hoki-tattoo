import React from 'react';
import classNames from 'classnames';

import './ImageItem.scss';

export const ImageItem = ({
	alt,
	className,
	dimensions,
	imageClassName,
	onClick,
	src,
}: ImageItemProps) => {
	const height = dimensions[1];
	const width = dimensions[0];

	return (
		<div className="image-maximizable-container">
			<div className={classNames('image-maximizable', className)}>
				<div className="zoom-overlay" onClick={() => onClick(src)}>
					<i className="fa fa-search-plus" />
				</div>

				<img
					alt={alt}
					className={imageClassName}
					height={height}
					src={src}
					width={width}
				/>
			</div>
		</div>
	);
};

export type ImageItemProps = {
	alt: string;
	className?: string;
	dimensions: number[];
	imageClassName?: string;
	onClick: (str: string) => void;
	src: string;
	srcLarge?: string;
	srcLargeDimensions?: number[];
};
