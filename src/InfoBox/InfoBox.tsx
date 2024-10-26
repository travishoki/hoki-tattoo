import React, { ReactNode } from 'react';
import './InfoBox.scss';

export const InfoBox = ({ children }: InfoBoxProps) => {
	return <div className="info-box">{children}</div>;
};

type InfoBoxProps = {
	children: ReactNode;
};
