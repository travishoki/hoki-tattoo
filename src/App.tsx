import React from 'react';
import classNames from 'classnames';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { getOrientation } from '~helpers/screen';

import { HomePage } from './main/HomePage';

import { NoMatchPage } from './pages/NoMatchPage';

import { ArtWorkPage } from './pages/dragon/ArtWorkPage';

import { ArtJapaneseTraditionalPage } from './pages/dragon/ArtJapaneseTraditionalPage';
import { ArtCreationPage } from './pages/dragon/ArtCreationPage';
import { ArtNeoTraditionalPage } from './pages/dragon/ArtNeoTraditionalPage';
import { ArtPage } from './pages/dragon/ArtPage';
import { AsianVsEuropeanPage } from './pages/dragon/AsianVsEuropeanPage';
import { DragonColorPage } from './pages/dragon/DragonColorPage';
import { DragonJapaneseVsChinesePage } from './pages/dragon/DragonJapaneseVsChinesePage';
import { DragonPage } from './pages/dragon/DragonPage';
import { DragonPhysiologyPage } from './pages/dragon/DragonPhysiology';
import { HomePage as DragonHomePage } from './pages/dragon/HomePage';
import { JourneyPage } from './pages/dragon/JourneyPage';
import { KanjiPage } from './pages/dragon/KanjiPage';
import { KoiPage } from './pages/dragon/KoiPage';
import { WhyPage } from './pages/dragon/WhyPage';

import './App.scss';

const orientation = getOrientation();

function App() {
	return (
		<div className={classNames('app', orientation)}>
			<Router>
				<Routes>
					<Route element={<HomePage />} index path="/" />
					<Route element={<ArtWorkPage />} path="/dragon">
						<Route element={<DragonHomePage />} index />
						<Route element={<KoiPage />} path="/dragon/koi" />
						<Route element={<KanjiPage />} path="/dragon/kanji" />

						<Route
							element={<AsianVsEuropeanPage />}
							path="/dragon/dragon/asian-vs-european"
						/>
						<Route element={<DragonColorPage />} path="/dragon/dragon/color" />
						<Route
							element={<DragonJapaneseVsChinesePage />}
							path="/dragon/dragon/japanese-vs-chinese"
						/>
						<Route
							element={<DragonPhysiologyPage />}
							path="/dragon/dragon/physiology"
						/>
						<Route element={<DragonPage />} path="/dragon/dragon" />
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
					<Route element={<NoMatchPage />} path="*" />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
