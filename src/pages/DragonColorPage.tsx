import { Page } from "../components/Page/Page";
import { ExternalLink } from "../components/ExternalLink/ExternalLink";

export const DragonColorPage = () => {
  return (
    <Page backLink="/dragon" title="Dragon Color">
      <p>Eastern and Chinese Dragons: Colors and Meaning</p>

      <ul>
        <li>
          Dragons and the accompanying colours have different meanings in
          Eastern mythology. These are the common colors:
        </li>

        <li>
          Yellow is superior, imperial, a symbol of the centre of the Earth,
          linked to the spleen and stomach. A yellow dragon robe was reserved
          for the Emperor (the Son of Heaven) and his family alone.
        </li>

        <li>
          Gold coloured dragons are also special. They have special attributes
          such as wealth, wisdom, kindness and the ability to face challenges
          head on.
        </li>

        <li>
          Blue and Green are symbols of the East, the chief spirits of the
          Spring. The blues are pure azure. Green represents good fortune, good
          health, or luck.
        </li>

        <li>
          Red is associated with storms, the South, Summer, the heart and large
          intestine, fire, passion, activity, and good fortune.
        </li>

        <li>
          Black is associated with storms, the North, winter, vengeance, and
          worry.
        </li>

        <li>
          White represents the West, Autumn, mourning, and death. To my own
          knowledge, it&apos;s different from the association of the color white
          with purity.
        </li>
      </ul>

      <ExternalLink link="https://www.dragonsinn.net/chinese-dragons/" />
    </Page>
  );
};
