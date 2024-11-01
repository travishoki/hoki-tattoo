import React from 'react';

import { getDimensions } from './ImageModal.helpers';
import { useScrollLock } from './ImageModal.hooks';
import './ImageModal.scss';

export const ImageModal = ({
	dimensions,
	onClickLeft,
	onClickRight,
	onClose,
	src,
}: ImageModalProps) => {
	useScrollLock();

	const originalWidth = dimensions[0];
	const originalHeight = dimensions[1];
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	const [width, height] = getDimensions(
		originalWidth,
		originalHeight,
		screenWidth,
		screenHeight,
	);

	return (
		<div className="image-modal" onClick={onClose}>
			{onClickLeft && (
				<div className="image-modal-control-left" onClick={onClickLeft}>
					<i className="fa fa-chevron-left" />
				</div>
			)}
			{onClickRight && (
				<div className="image-modal-control-right" onClick={onClickRight}>
					<i className="fa fa-chevron-right" />
				</div>
			)}
			<div className="image-modal-inner">
				<img
					src={src}
					style={{
						height,
						width,
					}}
				/>
				<button className="close-icon">
					<i className="fa fa-close" />
				</button>
			</div>
		</div>
	);
};

type ImageModalProps = {
	dimensions: number[];
	onClickLeft?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onClickRight?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onClose: () => void;
	src: string;
};
