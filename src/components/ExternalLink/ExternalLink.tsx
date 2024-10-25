import React from "react";
import "./ExternalLink.css";

export const ExternalLink = ({
  title = "Reference Link",
  link,
}: ExternalLinkTypes) => {
  return (
    <a href={link} className="external-link" rel="noreferrer" target="_blank">
      {title}
    </a>
  );
};

type ExternalLinkTypes = {
  link: string;
  title?: string;
};
