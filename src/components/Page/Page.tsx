import React, { ReactNode, useContext } from 'react';
import { HEADER_HEIGHT, LAPTOP_HEIGHT, MOBILE_SIZER_HEIGHT } from 'src/const';
import { MobileContext } from 'src/App.context';
import { Header } from './Header/Header';
import { getScreenHeight, getIsLandscape } from '~helpers/screen';
import './Page.scss';

const isLandscape = getIsLandscape();
const screenHeight = getScreenHeight();

const BORDER_SIZE = 10;

export const Page = ({ children, title }: PageProps) => {
	const { viewerHeight } = useContext(MobileContext);

	const desktopHeight =
		LAPTOP_HEIGHT - HEADER_HEIGHT - BORDER_SIZE - BORDER_SIZE;

	const mobileHeight =
		screenHeight -
		viewerHeight -
		HEADER_HEIGHT -
		MOBILE_SIZER_HEIGHT -
		BORDER_SIZE -
		BORDER_SIZE;

	const height = isLandscape ? desktopHeight : mobileHeight;

	return (
		<>
			<Header title={title} />
			<div
				className="page-content"
				style={{
					height,
					top: HEADER_HEIGHT,
				}}
			>
				{children}
			</div>
		</>
	);
};

type PageProps = {
	backLink?: string;
	children: ReactNode;
	title: string;
};
