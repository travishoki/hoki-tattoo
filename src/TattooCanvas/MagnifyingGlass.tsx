import React from 'react';
import { IconTool } from './IconTool';
import './MagnifyingGlass.scss';

export const MagnifyingGlass = ({ onClick }: MagnifyingGlassProps) => {
	return (
		<IconTool className="fa-search-plus magnifying-glass" onClick={onClick} />
	);
};

type MagnifyingGlassProps = {
	onClick: () => void;
};
