import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SiteContainer = ({ children }: Props) => {
  return <div className="siteContainer">{children}</div>;
};

export default SiteContainer;
