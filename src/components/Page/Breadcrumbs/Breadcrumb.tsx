import React from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';

export const Breadcrumb = ({ link, title }: BackButtonProps) => {
	const text = title.replace(/-/g, ' ');

	if (!link) {
		return <p className="breadcrumb">{text}</p>;
	}

	return (
		<Link className="breadcrumb" title={text} to={link}>
			{text}
			<i className="fa fa-chevron-right" />
		</Link>
	);
};

type BackButtonProps = {
	link?: string;
	title: string;
};
