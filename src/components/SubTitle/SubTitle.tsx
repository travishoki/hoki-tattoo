import React, { ReactNode } from 'react';
import './SubTitle.scss';

export const SubTitle = ({ children }: PageProps) => {
	return <h2 className="subtitle">{children}</h2>;
};

type PageProps = {
	children: ReactNode;
};
