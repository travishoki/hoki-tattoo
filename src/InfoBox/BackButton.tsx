import React from 'react';
import './BackButton.scss';
import { Link } from 'react-router-dom';

export const BackButton = ({ link = '/' }: BackButtonProps) => {
	return (
		<Link className="back-button" title="Back" to={link}>
			Back
		</Link>
	);
};

type BackButtonProps = {
	link?: string;
};
