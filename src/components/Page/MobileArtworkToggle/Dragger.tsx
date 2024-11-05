import React, { useContext } from 'react';
import { MobileContext } from 'src/App.context';
import './Dragger.scss';

export const Dragger = () => {
	const { setViewerHeight } = useContext(MobileContext);

	const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
		if (e.clientY === 0) {
			return;
		}

		setViewerHeight(e.clientY);
	};

	return (
		<i
			className="fa fa-bars mobile-artwork-toggle-dragger"
			draggable
			onDrag={onDrag}
		/>
	);
};
