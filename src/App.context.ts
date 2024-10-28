import { createContext } from 'react';

export const MobileContext = createContext({
	isToggleOpen: true,
	setIsToggleOpen: () => {},
});
