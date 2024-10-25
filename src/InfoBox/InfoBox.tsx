import "./InfoBox.css";
import { Route, Routes } from "react-router-dom";

import { AsianVsEuropeanPage } from "../pages/AsianVsEuropeanPage";
import { DragonColorPage } from "../pages/DragonColorPage";
import { DragonJapaneseVsChinesePage } from "../pages/DragonJapaneseVsChinesePage";
import { DragonPage } from "../pages/DragonPage";
import { DragonPhysiologyPage } from "../pages/DragonPhysiology";
import { HomePage } from "../pages/HomePage";
import { KanjiPage } from "../pages/KanjiPage";
import { KoiPage } from "../pages/KoiPage";
import { NoMatchPage } from "../pages/NoMatchPage";
import { SunPage } from "../pages/SunPage";
import { ToriiPage } from "../pages/ToriiPage";

export const InfoBox = ({ height }: InfoBoxProps) => {
  return (
    <div className="info-box" style={{ height }}>
      <Routes>
        <Route index element={<HomePage />} path="/" />
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
        <Route element={<DragonPhysiologyPage />} path="/dragon/physiology" />
        <Route element={<DragonPage />} path="/dragon" />
        <Route element={<ToriiPage />} path="/torii" />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
};

type InfoBoxProps = {
  height: number;
};
