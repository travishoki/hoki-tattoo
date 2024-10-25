import React from "react";

export const ExternalLink = ({
  title = "Reference Link",
  link,
}: ExternalLinkTypes) => {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      {title}
    </a>
  );
};

type ExternalLinkTypes = {
  link: string;
  title?: string;
};
