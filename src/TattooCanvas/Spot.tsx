import React from "react";
import classnames from "classnames";
import { useLocation, Link } from "react-router-dom";
import "./Spot.css";
import { firstPath } from "./Spot.helpers";

export const Spot = ({ link, title, x, y }: SpotProps) => {
  const location = useLocation();
  const isActive = firstPath(link) === firstPath(location.pathname);

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
  link: string;
  title: string;
  x: number;
  y: number;
};
