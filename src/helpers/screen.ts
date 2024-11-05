export const getSreenHeight = () => window.innerHeight;
export const getSreenWidth = () => window.innerWidth;
export const getHalfScreenHeight = () => getSreenHeight() / 2;

export const getOrientation = () => {
	if (getSreenHeight() > getSreenWidth()) return 'portrait';

	return 'landscape';
};

export const getIsLandscape = () => getOrientation() === 'landscape';

export const getIsPortrait = () => getOrientation() === 'portrait';
