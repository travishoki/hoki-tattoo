import { Page } from "../components/Page/Page";
import { ExternalLink } from "../components/ExternalLink/ExternalLink";

export const DragonPhysiologyPage = () => {
  return (
    <Page backLink="/dragon" title="Physiology">
      <p>
        Chinese dragons have nine characteristics which are a complex
        combination. They have a camel’s head, a demon’s eyes, a cow’s ears, a
        deer’s horns, a clam’s belly, a snake’s neck, an eagle’s claws, a
        tiger’s paws and 117 carp scales.
      </p>
      <ExternalLink
        link="https://www.dragonsinn.net/chinese-dragons/#phy"
        title="Physiology of Chinese Dragons"
      />
    </Page>
  );
};
