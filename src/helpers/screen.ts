export const getScreenHeight = () => window.innerHeight;
export const getScreenWidth = () => window.innerWidth;
export const getHalfScreenHeight = () => getScreenHeight() / 2;

export const getOrientation = () => {
	if (getScreenHeight() > getScreenWidth()) return 'portrait';

	return 'landscape';
};

export const getIsLandscape = () => getOrientation() === 'landscape';

export const getIsPortrait = () => getOrientation() === 'portrait';
