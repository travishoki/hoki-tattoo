import React from 'react';
import { Page } from '../../components/Page/Page';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import { SubTitle } from '~components/SubTitle/SubTitle';

export const JourneyPage = () => {
	return (
		<Page title="Journey">
			<SubTitle>Swimming Upstream</SubTitle>
			<p>
				In irezumi (traditional Japanese tattooing), the design of a koi fish
				transforming into a dragon is a powerful symbol derived from an ancient
				Chinese tale. This legend tells the story of a koi fish swimming
				upstream, overcoming immense challenges, and eventually transforming
				into a majestic dragon. This transformation represents perseverance,
				strength, and the reward of enduring hardship. The journey from koi to
				dragon symbolizes the process of inner transformation, a theme deeply
				rooted in both Japanese art and Zen philosophy.
			</p>
			<ExternalLink
				link="https://www.bardadim.tattoo/koi-or-dragon"
				title="bardadim.tattoo"
			/>

			<SubTitle>Ryuugyo</SubTitle>
			<p>
				In Japanese culture, the concept of ryuugyo, or &quot;dragon fish&quot;,
				holds deep symbolic significance, particularly within Zen philosophy and
				the art of irezumi (traditional Japanese tattooing). The ryuugyo
				represents the transformative journey of the mind towards enlightenment,
				akin to the legendary koi fish that swims upstream and transforms into a
				powerful dragon upon reaching the top of a waterfall.
			</p>
			<img src="https://lirp.cdn-website.com/ae570bfc/dms3rep/multi/opt/Koi-Dragon_Japanese_Tattoo_Bardadim_1-1000h.jpg" />

			<SubTitle>Koi-Dragon in Irezumi</SubTitle>
			<p>
				In the realm of irezumi, ryuugyo designs are highly cherished for their
				rich symbolism and aesthetic appeal. These tattoos often depict vibrant
				koi fish adorned with intricate scales, transitioning into majestic
				dragons. The imagery serves as a metaphor for the wearer&apos;s personal
				growth, resilience, and the pursuit of a higher state of being. Just as
				the koi fish&apos;s journey upstream is arduous and fraught with
				challenges, so too is the path to enlightenment. The ryuugyo in irezumi
				thus becomes a powerful emblem of transformation, perseverance, and
				spiritual evolution.
			</p>
			<ExternalLink
				link="https://www.bardadim.tattoo/koi-dragon-mystical-creature-of-japanese-art"
				title="bardadim.tattoo"
			/>
		</Page>
	);
};
