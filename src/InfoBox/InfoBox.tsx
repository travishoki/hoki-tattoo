import React from "react";
import "./InfoBox.css";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { KoiPage } from "../pages/KoiPage";
import { DragonPage } from "../pages/DragonPage";
import { KanjiPage } from "../pages/KanjiPage";
import { ToriiPage } from "../pages/ToriiPage";
import { SunPage } from "../pages/SunPage";
import { NoMatchPage } from "../pages/NoMatchPage";
import { DragonColorPage } from "../pages/DragonColorPage";
import { DragonJapaneseVsChinesePage } from "../pages/DragonJapaneseVsChinesePage";

export const InfoBox = ({ height }: InfoBoxProps) => {
  return (
    <div className="info-box" style={{ height }}>
      <div className="info-box-content">
        <Routes>
          <Route index element={<HomePage />} path="/" />
          <Route element={<KoiPage />} path="/koi" />
          <Route element={<KanjiPage />} path="/kanji" />
          <Route element={<SunPage />} path="/sun" />
          <Route element={<DragonColorPage />} path="/dragon/color" />
          <Route
            element={<DragonJapaneseVsChinesePage />}
            path="/dragon/japanese-vs-chinese"
          />
          <Route element={<DragonPage />} path="/dragon" />
          <Route element={<ToriiPage />} path="/torii" />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </div>
    </div>
  );
};

type InfoBoxProps = {
  height: number;
};
