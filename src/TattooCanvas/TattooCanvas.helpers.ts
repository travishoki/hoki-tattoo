import { LAPTOP_HEIGHT, ORIGINAL_HEIGHT, ORIGINAL_WIDTH } from '../const';
import { getHeightFromWidth, getWidthFromHeight } from '~helpers/numbers';
import { getIsPortrait, getScreenWidth } from '~helpers/screen';

const isPortrait = getIsPortrait();

export const getCanvasDimensions = (
	viewerWidth: number,
	viewerHeight: number,
) => {
	let width: number;
	let height = LAPTOP_HEIGHT;
	let left = 0;
	let top = 0;

	if (isPortrait) {
		const shouldUseHeight =
			viewerWidth / viewerHeight > ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

		if (shouldUseHeight) {
			height = viewerHeight;
			width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
		} else {
			width = viewerWidth;
			height = getHeightFromWidth(width, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
		}

		left = (getScreenWidth() - width) / 2;
		top = (viewerHeight - height) / 2;
	} else {
		width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
	}

	return {
		height,
		left,
		top,
		width,
	};
};

export const getNewVersion = (version: number, length: number) => {
	if (version === length) return 1;

	return version + 1;
};
