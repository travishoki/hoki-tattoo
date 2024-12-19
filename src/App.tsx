import React from 'react';
import classNames from 'classnames';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { getOrientation } from '~helpers/screen';

// Main Page
import { MainPage } from './pages/main';
import { HomePage } from './pages/main/HomePage';

// Dragon and Koi
import { ArtCreationPage } from './pages/dragon-and-koi/ArtCreationPage';
import { ArtJapaneseTraditionalPage } from './pages/dragon-and-koi/ArtJapaneseTraditionalPage';
import { ArtNeoTraditionalPage } from './pages/dragon-and-koi/ArtNeoTraditionalPage';
import { ArtPage } from './pages/dragon-and-koi/ArtPage';

// Dragon
import { DragonPage } from './pages/dragon';
import { AsianVsEuropeanPage } from './pages/dragon/AsianVsEuropeanPage';
import { DragonColorPage } from './pages/dragon/DragonColorPage';
import { DragonJapaneseVsChinesePage } from './pages/dragon/DragonJapaneseVsChinesePage';
import { DragonPhysiologyPage } from './pages/dragon/DragonPhysiology';
import { HomePage as DragonHomePage } from './pages/dragon/HomePage';
import { JourneyPage } from './pages/dragon/JourneyPage';
import { KanjiPage as DragonKanjiPage } from './pages/dragon/KanjiPage';
import { WhyPage } from './pages/shared/WhyPage';

// Koi
import { KoiPage } from './pages/koi';
import { KanjiPage as KoiKanjiPage } from './pages/koi/KanjiPage';
import { HomePage as KoiHomePage } from './pages/koi/HomePage';

// No Match
import { NoMatchPage } from './pages/NoMatchPage';

import './App.scss';

const orientation = getOrientation();

function App() {
	return (
		<div className={classNames('app', orientation)}>
			<Router>
				<Routes>
					<Route element={<MainPage />} path="/">
						<Route element={<HomePage />} index />
					</Route>

					<Route element={<DragonPage />} path="/dragon">
						<Route element={<DragonHomePage />} index />
						<Route element={<KoiPage />} path="/dragon/koi" />
						<Route element={<DragonKanjiPage />} path="/dragon/kanji" />
						<Route
							element={<AsianVsEuropeanPage />}
							path="/dragon/asian-vs-european"
						/>
						<Route element={<DragonColorPage />} path="/dragon/color" />
						<Route
							element={<DragonJapaneseVsChinesePage />}
							path="/dragon/japanese-vs-chinese"
						/>
						<Route
							element={<DragonPhysiologyPage />}
							path="/dragon/physiology"
						/>
						<Route element={<JourneyPage />} path="/dragon/journey" />
						<Route
							element={<ArtJapaneseTraditionalPage />}
							path="/dragon/art/japanese-traditional"
						/>
						<Route
							element={<ArtNeoTraditionalPage />}
							path="/dragon/art/neo-traditional"
						/>
						<Route
							element={<ArtCreationPage />}
							path="/dragon/art/art-creation"
						/>
						<Route element={<ArtPage root="/dragon" />} path="/dragon/art" />

						<Route element={<WhyPage />} path="/dragon/why" />
						<Route element={<NoMatchPage />} path="*" />
					</Route>
					<Route element={<KoiPage />} path="/koi">
						<Route element={<KoiHomePage />} index />
						<Route element={<WhyPage />} path="/koi/why" />
						<Route element={<KoiKanjiPage />} path="/koi/kanji" />
						<Route
							element={<ArtJapaneseTraditionalPage />}
							path="/koi/art/japanese-traditional"
						/>
						<Route
							element={<ArtNeoTraditionalPage />}
							path="/koi/art/neo-traditional"
						/>
						<Route element={<ArtCreationPage />} path="/koi/art/art-creation" />

						<Route element={<ArtPage root="/koi" />} path="/koi/art" />
					</Route>

					<Route element={<NoMatchPage />} path="*" />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
