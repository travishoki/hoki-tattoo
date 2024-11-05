import React from 'react';
import { Page } from '../components/Page/Page';
import { SubPageLinks } from '~components/SubPageLinks/SubPageLinks';
import { SPOTS } from 'src/const';

const links = SPOTS;

export const HomePage = () => {
	return (
		<Page title="Pick A Spot">
			<p>Click a circle to learn more</p>

			<SubPageLinks links={links} showNums />
		</Page>
	);
};
