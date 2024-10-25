import React from "react";
import { useLocation } from "react-router-dom";
import ImgTattoo from "../images/tattoo.jpg";
import { getWidthFromHeight } from "../helpers/numbers";
import { SPOTS } from "../const";
import { Spot } from "./Spot";
import { ORIGINAL_HEIGHT, ORIGINAL_WIDTH } from "./const";
import "./TattooCanvas.css";

export const TattooCanvas = ({ height }: TattooCanvasProps) => {
  const location = useLocation();
  const width = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);

  return (
    <div className="tattoo-canvas" style={{ height, width }}>
      {SPOTS.map((spot, index) => (
        <Spot
          key={index}
          isActive={spot.link === location.pathname}
          {...spot}
        />
      ))}

      <img src={ImgTattoo} alt="Tattoo" />
    </div>
  );
};

type TattooCanvasProps = {
  height: number;
};
