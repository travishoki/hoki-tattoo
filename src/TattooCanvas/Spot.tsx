import React from 'react';
import classnames from 'classnames';
import { useLocation, Link } from 'react-router-dom';
import './Spot.scss';
import { firstPath } from './Spot.helpers';

export const Spot = ({ height, link, title, width, x, y }: SpotProps) => {
	const location = useLocation();
	const isActive = firstPath(link) === firstPath(location.pathname);
	const left = x * width;
	const top = y * height;
	const to = isActive ? '/' : link;

	return (
		<Link
			className={classnames('spot', { active: isActive })}
			style={{ left, top }}
			title={title}
			to={to}
		/>
	);
};

type SpotProps = {
	height: number;
	link: string;
	title: string;
	width: number;
	x: number;
	y: number;
};
