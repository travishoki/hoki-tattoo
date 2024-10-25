import React from "react";
import "./InfoBox.css";
import { Content } from "./Content";
import { PickASpot } from "./PickASpot";

export const InfoBox = ({ activeIndex, height, onClear }: InfoBoxProps) => {
  return (
    <div className="info-box" style={{ height }}>
      <div className="info-box-content">
        {activeIndex === null ? (
          <PickASpot />
        ) : (
          <Content activeIndex={activeIndex} onClear={onClear} />
        )}
      </div>
    </div>
  );
};

type InfoBoxProps = {
  activeIndex: number | null;
  height: number;
  onClear: () => void;
};
