import { getHeightFromWidth, getSmallerNum } from '~helpers/numbers';
import { getHalfScreenHeight, getScreenWidth } from '~helpers/screen';
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH } from './const';

const screenWidth = getScreenWidth();
const halfScreenHeight = getHalfScreenHeight();

export const getIntialViewerHeight = () => {
	const mobileImageHeight = getHeightFromWidth(
		screenWidth,
		ORIGINAL_WIDTH,
		ORIGINAL_HEIGHT,
	);
	const initialViewerHeight = getSmallerNum(
		halfScreenHeight,
		mobileImageHeight,
	);

	return initialViewerHeight;
};
