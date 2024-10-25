import React from "react";
import { Page } from "./Page";
import { Title } from "../components/Title";
import { DRAGON_LINKS } from "./const";
import { SubPageLinks } from "../components/SubPageLinks/SubPageLinks";

export const DragonPage = () => {
  return (
    <Page>
      <Title>Dragon</Title>
      <SubPageLinks links={DRAGON_LINKS} />
    </Page>
  );
};
