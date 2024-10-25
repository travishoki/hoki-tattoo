import React from 'react';
import { Page } from '../components/Page/Page';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';

export const SunPage = () => {
	return (
		<Page title="Sun">
			<>
				<p>
					The national flag of Japan is a rectangular white banner with a
					crimson-red circle at its center.
				</p>
				<img
					alt="Japanese Flag"
					height="170"
					src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/510px-Flag_of_Japan.svg.png"
					width="255"
				/>
				<ExternalLink
					link="https://en.wikipedia.org/wiki/Flag_of_Japan"
					title="Flag of Japan"
				/>
			</>

			<>
				<p>
					The Rising Sun Flag (Japanese: 旭日旗, Hepburn: Kyokujitsu-ki) is a
					Japanese flag that consists of a red disc and sixteen red rays
					emanating from the disc. Like the Japanese national flag, the Rising
					Sun Flag symbolizes the Sun.
				</p>
				<img
					alt="Rising Sun"
					height="147"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Naval_Ensign_of_Japan.svg/220px-Naval_Ensign_of_Japan.svg.png"
					width="220"
				/>
				<ExternalLink
					link="https://en.wikipedia.org/wiki/Rising_Sun_Flag"
					title="Rising Sun Flag"
				/>
			</>
		</Page>
	);
};
