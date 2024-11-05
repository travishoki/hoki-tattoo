import React, { useContext } from 'react';
import { getHalfScreenHeight } from '~helpers/screen';
import { MobileContext } from 'src/App.context';
import './Dragger.scss';

export const Dragger = () => {
	const { setViewerHeight, viewerHeight } = useContext(MobileContext);

	const onClick = () => {
		const newviewerHeight = viewerHeight > 0 ? 0 : getHalfScreenHeight();
		setViewerHeight(newviewerHeight);
	};

	return (
		<i className="fa fa-bars mobile-artwork-toggle-dragger" onClick={onClick} />
	);
};
