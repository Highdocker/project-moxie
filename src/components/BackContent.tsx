import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const BackContent = ({ children }: Props) => {
  return <div className="backContent">{children}</div>;
};

export default BackContent;
