import React from 'react';
import { LinkType } from '../../pages/dragon/DragonPage.const';
import { SubPageLink } from './SubPageLink';

export const SubPageLinks = ({ links }: SubPageLinksProps) => {
	return (
		<>
			{links.map((link, index) => (
				<SubPageLink key={index} {...link} />
			))}
		</>
	);
};

type SubPageLinksProps = {
	links: LinkType[];
};
