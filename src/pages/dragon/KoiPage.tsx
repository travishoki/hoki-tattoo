import React from 'react';
import { Page } from '../../components/Page/Page';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';

export const KoiPage = () => {
	return (
		<Page title="Koi Fish">
			<p>
				In Japan, the koi is a symbol of luck, prosperity, and good fortune, and
				also of perseverance in the face of adversity. Ornamental koi are
				symbolic of Japanese culture and are closely associated with the
				country&apos;s national identity. The custom of koinobori (carp
				streamers), which began in the Edo period (1603–1867), is still
				practiced today and displayed in gardens on Children&apos;s Day, 5 May.
			</p>
			<img
				height="293"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ojiya_Nishikigoi_no_Sato_ac_%283%29.jpg/440px-Ojiya_Nishikigoi_no_Sato_ac_%283%29.jpg"
				width="440"
			/>
			<ExternalLink link="https://en.wikipedia.org/wiki/Koi" title="Koi" />

			<p>
				The koi fish is revered in Japan for its perseverance, strength, and
				ability to overcome adversity, embodying qualities such as luck and good
				fortune. This transformation from koi to dragon symbolizes a profound
				mental and spiritual metamorphosis, where the human mind transcends its
				limitations and achieves enlightenment, much like the journey of Zen
				practitioners striving for satori (awakening).
			</p>
			<ExternalLink
				link="https://www.bardadim.tattoo/koi-dragon-mystical-creature-of-japanese-art"
				title="bardadim.tattoo"
			/>
		</Page>
	);
};
