import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../components/Page/Page';

export const HomePage = () => {
	return (
		<Page title="HomePage">
			<Link title="Dragon" to="/dragon">
				Dragon
			</Link>
			<Link title="Koi" to="/koi">
				Koi
			</Link>
		</Page>
	);
};
