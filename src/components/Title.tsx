import React, { ReactNode } from "react";

export const Title = ({ children }: PageProps) => {
  return <h1>{children}</h1>;
};

type PageProps = {
  children: ReactNode;
};
