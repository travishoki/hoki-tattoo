import React, { ReactNode } from 'react';
import './InfoBox.scss';

export const InfoBox = ({ children, height }: InfoBoxProps) => {
	return (
		<div className="info-box" style={{ height }}>
			{children}
		</div>
	);
};

type InfoBoxProps = {
	children: ReactNode;
	height: number;
};
