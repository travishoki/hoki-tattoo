import React from 'react';
import './MagnifyingGlass.scss';

export const MagnifyingGlass = ({ onClick }: MagnifyingGlassProps) => {
	return (
		<>
			<i className="fa fa-search-plus magnifying-glass" onClick={onClick} />
		</>
	);
};

type MagnifyingGlassProps = {
	onClick: () => void;
};
