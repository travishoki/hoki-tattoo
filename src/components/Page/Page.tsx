import React, { ReactNode, useContext } from 'react';
import { HEADER_HEIGHT, LAPTOP_HEIGHT, TOGGLE_HEIGHT } from 'src/const';
import { MobileContext } from 'src/App.context';
import { Header } from './Header/Header';
import { getSreenHeight, getIsLandscape } from '~helpers/screen';
import './Page.scss';

const isLandscape = getIsLandscape();
const screenHeight = getSreenHeight();

const BORDER_SIZE = 10;

export const Page = ({ children, title }: PageProps) => {
	const { viewerHeight } = useContext(MobileContext);

	const desktopHeight =
		LAPTOP_HEIGHT - HEADER_HEIGHT - BORDER_SIZE - BORDER_SIZE;

	const mobileHeight =
		screenHeight -
		viewerHeight -
		HEADER_HEIGHT -
		TOGGLE_HEIGHT -
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
