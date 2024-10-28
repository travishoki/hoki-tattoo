import React from 'react';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import { Page } from '../components/Page/Page';
import { ImgCaption } from '~components/ImgCaption/ImgCaption';

export const ToriiPage = () => {
	return (
		<Page title="Torii">
			<p>
				A torii (Japanese: 鳥居, [to.ɾi.i]) is a traditional Japanese gate most
				commonly found at the entrance of or within a Shinto shrine, where it
				symbolically marks the transition from the mundane to the sacred,[1] and
				a spot where kami are welcomed and thought to travel through.
			</p>

			<img
				alt="Torii"
				height="660"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/ItsukushimaTorii7379.jpg/440px-ItsukushimaTorii7379.jpg"
				width="440"
			/>
			<ImgCaption text="The famous torii at Itsukushima Shrine" />

			<ExternalLink link="https://en.wikipedia.org/wiki/Torii" title="Torii" />
		</Page>
	);
};
