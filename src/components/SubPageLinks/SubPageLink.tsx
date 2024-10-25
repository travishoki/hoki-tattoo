import React from "react";
import { Link } from "react-router-dom";
import { linkType } from "../../pages/const";
import "./SubPageLink.css";

export const SubPageLink = ({ link, title }: SubPageLinkProps) => {
  return (
    <Link className="sub-page-link" to={link}>
      {title}
    </Link>
  );
};

type SubPageLinkProps = linkType;
