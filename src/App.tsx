import React, { useState } from "react";
import { TattooCanvas } from "./TattooCanvas/TattooCanvas";
import { InfoBox } from "./InfoBox/InfoBox";
import { SPOTS } from "./const";
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
      <TattooCanvas
        activeIndex={activeIndex}
        height={HEIGHT}
        onClick={onClick}
      />
      <InfoBox activeIndex={activeIndex} onClear={onClear} height={HEIGHT} />
    </div>
  );
}

export default App;
