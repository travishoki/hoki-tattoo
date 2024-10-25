import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TattooCanvas } from './TattooCanvas/TattooCanvas';
import { InfoBox } from './InfoBox/InfoBox';
import './App.css';

const HEIGHT = 650;

function App() {
	return (
		<div className="app">
			<Router>
				<TattooCanvas height={HEIGHT} />
				<InfoBox height={HEIGHT} />
			</Router>
		</div>
	);
}

export default App;
