import { linkType } from "../../pages/const";
import { SubPageLink } from "./SubPageLink";

export const SubPageLinks = ({ links }: SubPageLinksProps) => {
  return (
    <>
      {links.map((link, index) => (
        <SubPageLink key={index} {...link} />
      ))}
    </>
  );
};

type SubPageLinksProps = {
  links: linkType[];
};
