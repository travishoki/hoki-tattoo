import React, { ReactNode, useContext } from 'react';
import { getHalfScreenHeight } from '~helpers/screen';
import { MobileContext } from 'src/App.context';
import './InfoBox.scss';

export const InfoBox = ({ children }: InfoBoxProps) => {
	const { isToggleOpen } = useContext(MobileContext);
	const height = isToggleOpen ? getHalfScreenHeight() : '100%';

	return (
		<div className="info-box" style={{ height }}>
			{children}
		</div>
	);
};

type InfoBoxProps = {
	children: ReactNode;
};
