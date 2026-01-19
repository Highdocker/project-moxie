import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainContent = ({ children }: Props) => {
  return <div className="mainContent">{children}</div>;
};

export default MainContent;
