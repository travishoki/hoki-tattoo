import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import "./Spot.css";

export const Spot = ({ isActive, link, title, x, y }: SpotProps) => {
  return (
    <Link
      className={classnames("spot", { active: isActive })}
      style={{ left: x, top: y }}
      title={title}
      to={link}
    />
  );
};

type SpotProps = {
  isActive: boolean;
  link: string;
  title: string;
  x: number;
  y: number;
};
