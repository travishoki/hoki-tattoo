import { createContext } from 'react';
import { getHalfScreenHeight } from '~helpers/screen';

export const MobileContext = createContext({
	setViewerSize: (_viewerSize: number) => {},
	viewerSize: getHalfScreenHeight(),
});
