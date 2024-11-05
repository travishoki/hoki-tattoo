import React from 'react';
import { Link } from 'react-router-dom';
import { LinkType } from '../../pages/DragonPage.const';
import './SubPageLink.scss';

export const SubPageLink = ({ link, num, title }: SubPageLinkProps) => {
	return (
		<Link className="sub-page-link" to={link}>
			{num && `${num})`} {title}
		</Link>
	);
};

type SubPageLinkProps = LinkType & {
	num?: number;
};
