import React from "react";
import { Page } from "./Page";
import { Title } from "../components/Title";
import { ExternalLink } from "../components/ExternalLink/ExternalLink";

export const SunPage = () => {
  return (
    <Page>
      <Title>Sun</Title>

      <>
        <p>
          The national flag of Japan is a rectangular white banner with a
          crimson-red circle at its center.
        </p>
        <img
          alt="Japanese Flag"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/510px-Flag_of_Japan.svg.png"
          height="170"
          width="255"
        />
        <ExternalLink link="https://en.wikipedia.org/wiki/Flag_of_Japan" />
      </>

      <>
        <p>
          The Rising Sun Flag (Japanese: 旭日旗, Hepburn: Kyokujitsu-ki) is a
          Japanese flag that consists of a red disc and sixteen red rays
          emanating from the disc. Like the Japanese national flag, the Rising
          Sun Flag symbolizes the Sun.
        </p>
        <img
          alt="Rising Sun"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Naval_Ensign_of_Japan.svg/220px-Naval_Ensign_of_Japan.svg.png"
          height="147"
          width="220"
        />
        <ExternalLink link="https://en.wikipedia.org/wiki/Rising_Sun_Flag" />
      </>
    </Page>
  );
};
