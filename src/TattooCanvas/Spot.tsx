import React from "react";
import classnames from "classnames";
import "./Spot.css";

export const Spot = ({ isActive, onClick, x, y }: SpotProps) => {
  return (
    <button
      className={classnames("spot", { active: isActive })}
      onClick={onClick}
      style={{ left: x, top: y }}
    />
  );
};

type SpotProps = {
  isActive: boolean;
  onClick: () => void;
  x: number;
  y: number;
};
