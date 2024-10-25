import React from "react";
import "./BackButton.css";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link className="back-button" title="Back" to="/">
      Back
    </Link>
  );
};
