export const getWidthFromHeight = (
  height: number,
  origWidth: number,
  origHeight: number
): number => {
  const ratio = origWidth / origHeight;

  return height * ratio;
};

export const getHeightFromWidth = (
  width: number,
  origWidth: number,
  origHeight: number
): number => {
  const ratio = origHeight / origWidth;

  return width * ratio;
};
