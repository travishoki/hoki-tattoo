import React, { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Title } from '../Title';
import { MobileArtworkToggle } from './MobileArtworkToggle';
import './Page.scss';

export const Page = ({ children, title }: PageProps) => {
	return (
		<div className="page">
			<MobileArtworkToggle />
			<header>
				<Title>{title}</Title>
				<Breadcrumbs />
			</header>
			<div className="page-content">{children}</div>
		</div>
	);
};

type PageProps = {
	backLink?: string;
	children: ReactNode;
	title: string;
};
