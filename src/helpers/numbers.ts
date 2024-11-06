export const getWidthFromHeight = (
	height: number,
	origWidth: number,
	origHeight: number,
): number => {
	const ratio = origWidth / origHeight;

	return height * ratio;
};

export const getHeightFromWidth = (
	width: number,
	origWidth: number,
	origHeight: number,
): number => {
	const ratio = origHeight / origWidth;

	return width * ratio;
};

export const getSmallerNum = (num1: number, num2: number): number => {
	if (num1 < num2) return num1;

	return num2;
};
