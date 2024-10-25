import "./ExternalLink.css";

export const ExternalLink = ({ title, link }: ExternalLinkTypes) => {
  return (
    <a
      href={link}
      className="external-link"
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {title}
    </a>
  );
};

type ExternalLinkTypes = {
  link: string;
  title: string;
};
