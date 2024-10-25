import React from "react";
import { Page } from "./Page";
import { Title } from "../components/Title";
import { ExternalLink } from "../components/ExternalLink";

export const AsianVsEuropeanPage = () => {
  return (
    <Page backLink="/dragon">
      <Title>Asian vs European</Title>
      <p>
        Most Japanese ones are water deities associated with rainfall and bodies
        of water, and are typically depicted as large, wingless, serpentine
        creatures with clawed feet.
      </p>
      <ExternalLink link="https://en.m.wikipedia.org/wiki/Japanese_dragon" />
    </Page>
  );
};
