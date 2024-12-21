import React from 'react';
import classnames from 'classnames';
import { useLocation, Link } from 'react-router-dom';
import './Spot.scss';
import { firstPath } from './Spot.helpers';

export const Spot = ({ height, link, num, title, width, x, y }: SpotProps) => {
	const location = useLocation();
	const isActive = firstPath(link) === firstPath(location.pathname);
	const left = x * width;
	const top = y * height;
	const to = isActive ? '/' : link;

	const spotSize = width * 0.075;

	const spotStyles = {
		height: spotSize,
		left,
		marginLeft: -(spotSize / 2),
		marginTop: -(spotSize / 2),
		top,
		width: spotSize,
	};

	const markerStyles = {
		fontSize: spotSize * 0.25,
	};

	return (
		<Link
			className={classnames('spot', { active: isActive })}
			style={spotStyles}
			title={title}
			to={to}
		>
			<div className="marker" style={markerStyles}>
				{num}
			</div>
		</Link>
	);
};

type SpotProps = {
	height: number;
	link: string;
	num: number;
	title: string;
	width: number;
	x: number;
	y: number;
};
