import React, { useContext } from 'react';
import { getIsLandscape } from '~helpers/screen';
import './MobileArtworkToggle.scss';
import classNames from 'classnames';
import { MobileContext } from 'src/App.context';

const isLandscape = getIsLandscape();

export const MobileArtworkToggle = () => {
	const { isToggleOpen, setIsToggleOpen } = useContext(MobileContext);

	if (isLandscape) return null;

	return (
		<div className="mobile-artwork-toggle" onClick={setIsToggleOpen}>
			<i
				className={classNames(
					'fa',
					isToggleOpen ? 'fa-chevron-up' : 'fa-chevron-down',
				)}
			/>
		</div>
	);
};
