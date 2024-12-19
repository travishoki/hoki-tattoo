import React from 'react';
import { HEADER_HEIGHT } from 'src/types';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Title } from '../../Title/Title';
import './Header.scss';

export const Header = ({ title }: PageProps) => {
	return (
		<header style={{ height: HEADER_HEIGHT }}>
			<div className="header-inner">
				<Title>{title}</Title>
				<Breadcrumbs />
			</div>
		</header>
	);
};

type PageProps = {
	title: string;
};
