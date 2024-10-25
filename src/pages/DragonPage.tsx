import { Page } from "../components/Page/Page";
import { DRAGON_LINKS } from "./const";
import { SubPageLinks } from "../components/SubPageLinks/SubPageLinks";

export const DragonPage = () => {
  return (
    <Page title="Dragon">
      <SubPageLinks links={DRAGON_LINKS} />
    </Page>
  );
};
