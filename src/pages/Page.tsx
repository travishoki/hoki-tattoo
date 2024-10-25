import React, { ReactNode } from "react";
import { BackButton } from "../InfoBox/BackButton";

export const Page = ({ children }: PageProps) => {
  return (
    <>
      {children}
      <BackButton />
    </>
  );
};

type PageProps = {
  children: ReactNode;
};
