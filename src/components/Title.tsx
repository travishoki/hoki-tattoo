import React, { ReactNode } from 'react';
import './Title.css';

export const Title = ({ children }: PageProps) => {
	return <h1 className="title">{children}</h1>;
};

type PageProps = {
	children: ReactNode;
};
