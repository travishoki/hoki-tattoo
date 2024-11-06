import React, { useContext } from 'react';
import classNames from 'classnames';
import { MobileContext } from 'src/App.context';
import './Arrow.scss';

export const Arrow = ({ onClick }: ArrowProps) => {
	const { viewerHeight } = useContext(MobileContext);

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

type ArrowProps = {
	onClick: () => void;
};
