import React from 'react';
import './VersionClicker.scss';

export const VersionClicker = ({ onClick }: MagnifyingGlassProps) => {
	return (
		<>
			<i className="fa fa-object-group version-clicker" onClick={onClick} />
		</>
	);
};

type MagnifyingGlassProps = {
	onClick: () => void;
};
