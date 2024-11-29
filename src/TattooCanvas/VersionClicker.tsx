import React from 'react';
import { IconTool } from './IconTool';
import './VersionClicker.scss';

export const VersionClicker = ({ onClick }: VersionClickerProps) => {
	return (
		<IconTool className="fa-object-group version-clicker" onClick={onClick} />
	);
};

type VersionClickerProps = {
	onClick: () => void;
};
