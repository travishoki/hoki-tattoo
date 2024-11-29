import React from 'react';
import classNames from 'classnames';
import './IconTool.scss';

export const IconTool = ({ className, onClick }: IconToolProps) => {
	return (
		<i className={classNames('fa', 'icon-tool', className)} onClick={onClick} />
	);
};

type IconToolProps = {
	className: string;
	onClick: () => void;
};
