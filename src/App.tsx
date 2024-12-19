import React from 'react';
import classNames from 'classnames';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { getOrientation } from '~helpers/screen';

import { HomePage } from './pages/main/HomePage';

import { NoMatchPage } from './pages/NoMatchPage';

// Dragon and Koi
import { ArtCreationPage } from './pages/dragon-and-koi/ArtCreationPage';
import { ArtJapaneseTraditionalPage } from './pages/dragon-and-koi/ArtJapaneseTraditionalPage';
import { ArtNeoTraditionalPage } from './pages/dragon-and-koi/ArtNeoTraditionalPage';
import { ArtPage } from './pages/dragon-and-koi/ArtPage';

// Dragon
import { AsianVsEuropeanPage } from './pages/dragon/AsianVsEuropeanPage';
import { DragonColorPage } from './pages/dragon/DragonColorPage';
import { DragonJapaneseVsChinesePage } from './pages/dragon/DragonJapaneseVsChinesePage';
import { DragonPage } from './pages/dragon';
import { DragonPhysiologyPage } from './pages/dragon/DragonPhysiology';
import { HomePage as DragonHomePage } from './pages/dragon/HomePage';
import { JourneyPage } from './pages/dragon/JourneyPage';
import { KanjiPage as DragonKanjiPage } from './pages/dragon/KanjiPage';
import { WhyPage } from './pages/shared/WhyPage';

// Koi
import { KoiPage } from './pages/koi';
import { KanjiPage as KoiKanjiPage } from './pages/koi/KanjiPage';
import { HomePage as KoiHomePage } from './pages/koi/HomePage';

import './App.scss';

const orientation = getOrientation();

function App() {
	return (
		<div className={classNames('app', orientation)}>
			<Router>
				<Routes>
					<Route element={<HomePage />} index path="/" />

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
						<Route element={<ArtPage />} path="/dragon/art" />

						<Route element={<WhyPage />} path="/dragon/why" />
						<Route element={<NoMatchPage />} path="*" />
					</Route>
					<Route element={<KoiPage />} path="/koi">
						<Route element={<KoiHomePage />} index />
						<Route element={<WhyPage />} path="/koi/why" />
						<Route element={<KoiKanjiPage />} path="/koi/kanji" />
						<Route element={<ArtPage />} path="/koi/art" />
					</Route>

					<Route element={<NoMatchPage />} path="*" />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
