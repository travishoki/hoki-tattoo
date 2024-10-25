import React, { ReactNode } from 'react';
import { BackButton } from '../../InfoBox/BackButton';
import { Title } from '../Title';
import './Page.css';

export const Page = ({ backLink, children, title }: PageProps) => {
	return (
		<div className="page">
			<header>
				<Title>{title}</Title>
			</header>
			<div className="page-content">{children}</div>
			<footer>
				<BackButton link={backLink} />
			</footer>
		</div>
	);
};

type PageProps = {
	backLink?: string;
	children: ReactNode;
	title: string;
};
