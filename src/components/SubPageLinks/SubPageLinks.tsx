import React from 'react';
import { sortBy } from 'lodash';
import { LinkType } from '../../pages/DragonPage.const';
import { SubPageLink } from './SubPageLink';

export const SubPageLinks = ({ links }: SubPageLinksProps) => {
	const sortedLinks = sortBy(links, ['title']);

	return (
		<>
			{sortedLinks.map((link, index) => (
				<SubPageLink key={index} {...link} />
			))}
		</>
	);
};

type SubPageLinksProps = {
	links: LinkType[];
};
