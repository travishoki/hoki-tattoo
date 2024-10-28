export const getOrientation = () => {
	if (window.innerHeight > window.innerWidth) return 'portrait';

	return 'landscape';
};

export const getIsLandscape = () => getOrientation() === 'landscape';

export const getIsPortrait = () => getOrientation() === 'portrait';
