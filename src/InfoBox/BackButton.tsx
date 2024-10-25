import React from "react";
import "./BackButton.css";

export const BackButton = ({ onClick, text }: InfoBoxProps) => {
  return (
    <button className="back-button" onClick={onClick}>
      {text}
    </button>
  );
};

type InfoBoxProps = {
  onClick: () => void;
  text: string;
};
