import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';
import './DragonColorPage.scss';

export const DragonColorPage = () => {
	return (
		<Page backLink="/dragon/dragon" title="Dragon Color">
			<p>Eastern and Chinese Dragons: Colors and Meaning</p>

			<ul>
				<li>
					Dragons and the accompanying colours have different meanings in
					Eastern mythology. These are the common colors:
				</li>

				<li>
					<span className="color yellow">Yellow</span> is superior, imperial, a
					symbol of the centre of the Earth, linked to the spleen and stomach. A
					yellow dragon robe was reserved for the Emperor (the Son of Heaven)
					and his family alone.
				</li>

				<li>
					<span className="color gold">Gold</span> coloured dragons are also
					special. They have special attributes such as wealth, wisdom, kindness
					and the ability to face challenges head on.
				</li>

				<li>
					<span className="color blue">Blue</span> and{' '}
					<span className="color green">Green</span> are symbols of the East,
					the chief spirits of the Spring. The blues are pure azure. Green
					represents good fortune, good health, or luck.
				</li>

				<li>
					<span className="color red">Red</span> is associated with storms, the
					South, Summer, the heart and large intestine, fire, passion, activity,
					and good fortune.
				</li>

				<li>
					<span className="color black">Black</span> is associated with storms,
					the North, winter, vengeance, and worry.
				</li>

				<li>
					<span className="color white">White</span> represents the West,
					Autumn, mourning, and death. To my own knowledge, it&apos;s different
					from the association of the color white with purity.
				</li>
			</ul>

			<ExternalLink
				link="https://www.dragonsinn.net/chinese-dragons/#color"
				title="Eastern and Chinese Dragons: Colors and Meaning"
			/>
		</Page>
	);
};
