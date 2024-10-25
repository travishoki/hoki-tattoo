import React from 'react';
import './ExternalLink.css';

export const ExternalLink = ({ link, title }: ExternalLinkTypes) => {
	return (
		<p className="external-link">
			Reference:{' '}
			<a href={link} rel="noreferrer" target="_blank" title={title}>
				{title}
			</a>
		</p>
	);
};

type ExternalLinkTypes = {
	link: string;
	title: string;
};
