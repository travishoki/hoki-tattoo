import React, { useState } from "react";
import { TattooCanvas } from "./TattooCanvas/TattooCanvas";
import { InfoBox } from "./InfoBox/InfoBox";
import { SPOTS } from "./const";
import "./App.css";

const HEIGHT = 650;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="app">
      <TattooCanvas
        activeIndex={activeIndex}
        height={HEIGHT}
        onClick={onClick}
      />
      <InfoBox height={HEIGHT} spot={SPOTS[activeIndex]} />
    </div>
  );
}

export default App;
