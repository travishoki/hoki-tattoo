import React, { useContext } from 'react';
import { getHalfScreenHeight } from '~helpers/screen';
import { MobileContext } from 'src/App.context';
import './Dragger.scss';

export const Dragger = () => {
	const { setViewerSize, viewerSize } = useContext(MobileContext);

	const onClick = () => {
		const newViewerSize = viewerSize > 0 ? 0 : getHalfScreenHeight();
		setViewerSize(newViewerSize);
	};

	return (
		<i className="fa fa-bars mobile-artwork-toggle-dragger" onClick={onClick} />
	);
};
