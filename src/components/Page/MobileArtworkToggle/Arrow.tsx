import React, { useContext } from 'react';
import classNames from 'classnames';
import { getHalfScreenHeight } from '~helpers/screen';
import { MobileContext } from 'src/App.context';
import './Arrow.scss';

export const Arrow = () => {
	const { setViewerSize, viewerSize } = useContext(MobileContext);

	const onClick = () => {
		const newViewerSize = viewerSize > 0 ? 0 : getHalfScreenHeight();
		setViewerSize(newViewerSize);
	};

	return (
		<i
			className={classNames(
				'fa',
				'mobile-artwork-toggle-arrow',
				viewerSize > 0 ? 'fa-chevron-up' : 'fa-chevron-down',
			)}
			onClick={onClick}
		/>
	);
};
