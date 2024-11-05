import React from 'react';
import { getIsLandscape } from '~helpers/screen';
import { Arrow } from './Arrow';
import { Dragger } from './Dragger';
import './MobileArtworkToggle.scss';

const isLandscape = getIsLandscape();

export const MobileArtworkToggle = () => {
	if (isLandscape) return null;

	return (
		<div className="mobile-artwork-toggle">
			<Dragger />
			<Arrow />
		</div>
	);
};
