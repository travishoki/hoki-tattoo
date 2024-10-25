import classnames from "classnames";
import { useLocation, Link } from "react-router-dom";
import "./Spot.css";
import { firstPath } from "./Spot.helpers";

export const Spot = ({ height, link, title, width, x, y }: SpotProps) => {
  const location = useLocation();
  const isActive = firstPath(link) === firstPath(location.pathname);
  const left = x * width;
  const top = y * height;

  return (
    <Link
      className={classnames("spot", { active: isActive })}
      style={{ left, top }}
      title={title}
      to={link}
    />
  );
};

type SpotProps = {
  height: number;
  link: string;
  title: string;
  width: number;
  x: number;
  y: number;
};
