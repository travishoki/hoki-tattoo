import React from "react";
import { SPOTS } from "../const";
import { BackButton } from "./BackButton";
import "./InfoBox.css";

export const Content = ({ activeIndex, onClear }: InfoBoxProps) => {
  const spot = SPOTS[activeIndex];
  const { description, title } = spot;

  return (
    <div className="info-box-content">
      <BackButton onClick={onClear} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

type InfoBoxProps = {
  activeIndex: number;
  onClear: () => void;
};
