import React, { useContext } from 'react';
import classNames from 'classnames';
import { getIsLandscape } from '~helpers/screen';
import { MobileContext } from 'src/App.context';

const isLandscape = getIsLandscape();

export const Arrow = () => {
	const { isToggleOpen, setIsToggleOpen } = useContext(MobileContext);

	if (isLandscape) return null;

	return (
		<i
			className={classNames(
				'fa',
				isToggleOpen ? 'fa-chevron-up' : 'fa-chevron-down',
			)}
			onClick={setIsToggleOpen}
		/>
	);
};
