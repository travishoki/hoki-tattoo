import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TattooCanvas } from "./TattooCanvas/TattooCanvas";
import { InfoBox } from "./InfoBox/InfoBox";
import "./App.css";

const HEIGHT = 650;

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onClick = (index: number) => {
    setActiveIndex(index);
  };

  const onClear = () => setActiveIndex(null);

  return (
    <div className="app">
      <Router>
        <TattooCanvas
          activeIndex={activeIndex}
          height={HEIGHT}
          onClick={onClick}
        />
        <InfoBox activeIndex={activeIndex} onClear={onClear} height={HEIGHT} />
      </Router>
    </div>
  );
}

export default App;
