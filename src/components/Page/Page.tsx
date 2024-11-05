import React, { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Title } from '../Title/Title';

import './Page.scss';

export const Page = ({ children, title }: PageProps) => {
	return (
		<>
			<header>
				<Title>{title}</Title>
				<Breadcrumbs />
			</header>
			{children}
		</>
	);
};

type PageProps = {
	backLink?: string;
	children: ReactNode;
	title: string;
};
