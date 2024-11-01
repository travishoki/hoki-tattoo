export const getLeftIndex = (index: number, length: number) => {
	if (index === 0) return length - 1;

	return index - 1;
};

export const getRightIndex = (index: number, length: number) => {
	if (index === length - 1) return 0;

	return index + 1;
};
