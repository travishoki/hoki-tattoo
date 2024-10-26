export const getOrientation = () => {
	if (window.innerHeight > window.innerWidth) return 'portrait';

	return 'landscape';
};
