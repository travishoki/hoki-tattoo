import React, { useContext } from 'react';
import classNames from 'classnames';
import { getHalfScreenHeight } from '~helpers/screen';
import { MobileContext } from 'src/App.context';
import './Arrow.scss';

export const Arrow = () => {
	const { setViewerHeight, viewerHeight } = useContext(MobileContext);

	const onClick = () => {
		const newviewerHeight = viewerHeight > 0 ? 0 : getHalfScreenHeight();
		setViewerHeight(newviewerHeight);
	};

	return (
		<i
			className={classNames(
				'fa',
				'mobile-artwork-toggle-arrow',
				viewerHeight > 0 ? 'fa-chevron-up' : 'fa-chevron-down',
			)}
			onClick={onClick}
		/>
	);
};
