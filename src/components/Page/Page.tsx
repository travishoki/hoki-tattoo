import React, { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Title } from '../Title';
import './Page.scss';

export const Page = ({ backLink, children, title }: PageProps) => {
	return (
		<div className="page">
			<header>
				<Title>{title}</Title>
			</header>
			<div className="page-content">{children}</div>
			<footer>
				<Breadcrumbs />
			</footer>
		</div>
	);
};

type PageProps = {
	backLink?: string;
	children: ReactNode;
	title: string;
};
