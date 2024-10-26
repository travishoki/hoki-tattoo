import React from 'react';
import { compact } from 'lodash';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import './Breadcrumbs.scss';

export const Breadcrumbs = () => {
	const location = useLocation();
	const links = compact(location.pathname.split('/'));
	console.log('links:');
	console.dir(links);

	return (
		<div className="breadcrumbs">
			{links.length > 0 && <Breadcrumb link="/" title="Home" />}
			{links.map((link, index) => (
				<Breadcrumb
					key={index}
					link={
						index === links.length - 1
							? undefined
							: '/' + links.slice(0, index + 1).join('/')
					}
					title={link}
				/>
			))}
		</div>
	);
};
