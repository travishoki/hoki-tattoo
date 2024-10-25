import React, { ReactNode } from "react";
import { BackButton } from "../InfoBox/BackButton";

export const Page = ({ children, backLink }: PageProps) => {
  return (
    <>
      {children}
      <BackButton link={backLink} />
    </>
  );
};

type PageProps = {
  backLink?: string;
  children: ReactNode;
};
