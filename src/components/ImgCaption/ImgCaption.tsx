import React, { ReactNode } from 'react';
import './ImgCaption.css';

export const ImgCaption = ({ text }: PageProps) => {
	return <p className="img-caption">{text}</p>;
};

type PageProps = {
	text: string;
};
