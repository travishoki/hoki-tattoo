import { createContext } from 'react';
import { getHalfScreenHeight } from '~helpers/screen';

export const MobileContext = createContext({
	setViewerHeight: (_viewerHeight: number) => {},
	viewerHeight: getHalfScreenHeight(),
});
