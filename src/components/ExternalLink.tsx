import React from "react";

export const ExternalLink = ({ title, link }: ExternalLinkTypes) => {
  return (
    <a href={link} target="_blank">
      {title}
    </a>
  );
};

type ExternalLinkTypes = {
  link: string;
  title: string;
};
