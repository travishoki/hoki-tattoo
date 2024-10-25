import React from "react";
import { SpotType } from "../const";
import "./InfoBox.css";

export const InfoBox = ({ height, spot }: InfoBoxProps) => {
  const { description, title } = spot;

  return (
    <div className="info-box" style={{ height }}>
      <div className="info-box-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>{" "}
    </div>
  );
};

type InfoBoxProps = {
  height: number;
  spot: SpotType;
};
