import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainContentWrapper = ({ children }: Props) => {
  return <div className="mainContentWrapper">{children}</div>;
};

export default MainContentWrapper;
