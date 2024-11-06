import React, { useContext } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import {
	getScreenHeight,
	getIsLandscape,
	getHalfScreenHeight,
} from '~helpers/screen';
import { MOBILE_SIZER_HEIGHT } from 'src/const';
import { Arrow } from './Arrow';
import { Dragger } from './Dragger';
import { MobileContext } from 'src/App.context';
import './MobileArtworkToggle.scss';

const isLandscape = getIsLandscape();

export const MobileArtworkToggle = () => {
	const { setViewerHeight, viewerHeight } = useContext(MobileContext);

	if (isLandscape) return null;

	const onDrag = (e: DraggableEvent, data: DraggableData) => {
		const { y } = data;

		setViewerHeight(y);
	};

	const onClickArrow = () => {
		const newviewerHeight = viewerHeight > 0 ? 0 : getHalfScreenHeight();
		setViewerHeight(newviewerHeight);
	};

	return (
		<Draggable
			axis="y"
			bounds={{ bottom: getScreenHeight() - MOBILE_SIZER_HEIGHT, top: 0 }}
			defaultPosition={{ x: 0, y: viewerHeight }}
			onDrag={onDrag}
		>
			<div className="mobile-artwork-toggle">
				<Dragger />
				<Arrow onClick={onClickArrow} />
			</div>
		</Draggable>
	);
};
