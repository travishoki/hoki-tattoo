import React from "react";
import "./BackButton.css";

export const BackButton = ({ onClick }: InfoBoxProps) => {
  return (
    <button className="back-button" onClick={onClick}>
      Back
    </button>
  );
};

type InfoBoxProps = {
  onClick: () => void;
};
