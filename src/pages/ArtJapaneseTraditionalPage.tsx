import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';

export const ArtJapaneseTraditionalPage = () => {
	return (
		<Page backLink="/art" title="Japanese Traditional">
			<p>
				Traditional Japanese tattoos, also known as &quot;irezumi&quot;, are a
				unique form of body art with a rich history and a set of strict rules.
				These tattoos, often featuring intricate designs of mythical creatures
				or traditional objects like koi fish or cherry blossoms, were originally
				associated with the country&apos;s criminal underworld. However, in
				recent decades they have gained widespread acceptance and popularity.
			</p>

			<p>
				Unlike western-style tattoos which can be placed anywhere on the body,
				traditional Japanese tattoos must typically cover larger areas such as
				the back or sleeve. This style of tattooing originally also follows a
				specific method using woodblock printing techniques and hand-poked
				needles instead of modern electric machines. Whether you choose to honor
				its traditional origins or simply appreciate its stunning visual appeal,
				traditional Japanese tattoos make for a bold and beautiful statement.
			</p>
			<img src="https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/1665860329793-4FK278KC83U88TPT91XH/Certified+Tattoo+Studios+-+cody+10.14.22-03.jpg?format=500w" />

			<ExternalLink
				link="https://certifiedtattoo.com/neo-traditional-tattoos"
				title="certifiedtattoo.com"
			/>
		</Page>
	);
};
