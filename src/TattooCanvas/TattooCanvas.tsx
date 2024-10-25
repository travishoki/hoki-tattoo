import React from "react";
import ImgTattoo from "../images/tattoo.jpg";
import { getWidthFromHeight } from "../helpers/numbers";
import { SPOTS } from "../const";
import { Spot } from "./Spot";
import "./TattooCanvas.css";

const ORIGINAL_WIDTH = 1179;
const ORIGINAL_HEIGHT = 2556;

export const TattooCanvas = ({
  activeIndex,
  height,
  onClick,
}: TattooCanvasProps) => {
  const WIDTH = getWidthFromHeight(height, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);

  return (
    <div className="tattoo-canvas" style={{ height, width: WIDTH }}>
      {SPOTS.map((spot, index) => (
        <Spot
          isActive={index === activeIndex}
          onClick={() => onClick(index)}
          x={spot.x}
          y={spot.y}
        />
      ))}

      <img src={ImgTattoo} alt="Tattoo" />
    </div>
  );
};

type TattooCanvasProps = {
  activeIndex: number;
  height: number;
  onClick: (index: number) => void;
};
