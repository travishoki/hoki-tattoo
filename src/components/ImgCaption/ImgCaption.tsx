import React, { ReactNode } from 'react';
import './ImgCaption.scss';

export const ImgCaption = ({ text }: PageProps) => {
	return <p className="img-caption">{text}</p>;
};

type PageProps = {
	text: string;
};
