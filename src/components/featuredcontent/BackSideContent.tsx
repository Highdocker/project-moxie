import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const BackSideContent = ({ children }: Props) => {
  return <div className="backSideContent">{children}</div>;
};

export default BackSideContent;
