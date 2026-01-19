import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainSideContent = ({ children }: Props) => {
  return <div className="mainSideContent">{children}</div>;
};

export default MainSideContent;
