import React, { useState } from 'react';
import classNames from 'classnames';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
	getHalfScreenHeight,
	getIsLandscape,
	getOrientation,
} from '~helpers/screen';
import { TattooCanvas } from './TattooCanvas/TattooCanvas';
import { InfoBox } from './InfoBox/InfoBox';
import { HomePage } from './pages/HomePage';
import { KoiPage } from './pages/KoiPage';
import { SunPage } from './pages/SunPage';
import { KanjiPage } from './pages/KanjiPage';
import { AsianVsEuropeanPage } from './pages/AsianVsEuropeanPage';
import { DragonColorPage } from './pages/DragonColorPage';
import { DragonJapaneseVsChinesePage } from './pages/DragonJapaneseVsChinesePage';
import { DragonPhysiologyPage } from './pages/DragonPhysiology';
import { DragonPage } from './pages/DragonPage';
import { JourneyPage } from './pages/JourneyPage';
import { ToriiPage } from './pages/ToriiPage';
import { NoMatchPage } from './pages/NoMatchPage';
import { ArtPage } from './pages/ArtPage';
import { ArtNeoTraditionalPage } from './pages/ArtNeoTraditionalPage';
import { ArtMediumPage } from './pages/ArtMediumPage';
import { MobileContext } from './App.context';
import { ArtJapaneseTraditionalPage } from './pages/ArtJapaneseTraditionalPage';
import { LAPTOP_HEIGHT } from './const';
import './App.scss';

const orientation = getOrientation();
const isLandscape = getIsLandscape();
const height = isLandscape ? LAPTOP_HEIGHT : getHalfScreenHeight();

function App() {
	const [isToggleOpen, setIsToggleOpen] = useState(true);

	const handleSetIsToggleOpen = () => setIsToggleOpen(!isToggleOpen);

	return (
		<div
			className={classNames(
				'app',
				orientation,
				isToggleOpen ? 'open' : undefined,
			)}
		>
			<MobileContext.Provider
				value={{ isToggleOpen, setIsToggleOpen: handleSetIsToggleOpen }}
			>
				<Router>
					{isToggleOpen && <TattooCanvas height={height} />}
					<InfoBox>
						<Routes>
							<Route element={<HomePage />} index path="/" />
							<Route element={<KoiPage />} path="/koi" />
							<Route element={<KanjiPage />} path="/kanji" />
							<Route element={<SunPage />} path="/sun" />
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
							<Route element={<DragonPage />} path="/dragon" />
							<Route element={<JourneyPage />} path="/journey" />
							<Route
								element={<ArtJapaneseTraditionalPage />}
								path="/art/japanese-traditional"
							/>
							<Route
								element={<ArtNeoTraditionalPage />}
								path="/art/neo-traditional"
							/>
							<Route element={<ArtMediumPage />} path="/art/art-medium" />
							<Route element={<ArtPage />} path="/art" />
							<Route element={<ToriiPage />} path="/torii" />
							<Route element={<NoMatchPage />} path="*" />
						</Routes>
					</InfoBox>
				</Router>
			</MobileContext.Provider>
		</div>
	);
}

export default App;
