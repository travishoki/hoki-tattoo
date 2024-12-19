import React from 'react';
import { LinkType } from '../../pages/dragon/DragonPage.const';
import { SubPageLink } from './SubPageLink';

export const SubPageLinks = ({ links, root = '' }: SubPageLinksProps) => {
	return (
		<>
			{links.map((link, index) => (
				<SubPageLink key={index} link={root + link.link} title={link.title} />
			))}
		</>
	);
};

type SubPageLinksProps = {
	links: LinkType[];
	root?: string;
};
