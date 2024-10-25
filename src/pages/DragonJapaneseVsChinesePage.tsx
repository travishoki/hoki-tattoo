import React from "react";
import { Page } from "./Page";
import { Title } from "../components/Title";
import { ExternalLink } from "../components/ExternalLink/ExternalLink";

export const DragonJapaneseVsChinesePage = () => {
  return (
    <Page backLink="/dragon">
      <Title>Japanese vs Chinese</Title>
      <p>
        The style and appearance of the dragon was heavily influenced by the
        Chinese dragon, especially the three-clawed long (龍) dragons which were
        introduced in Japan from China in ancient times.
      </p>
      <ExternalLink link="https://en.m.wikipedia.org/wiki/Japanese_dragon" />
    </Page>
  );
};
