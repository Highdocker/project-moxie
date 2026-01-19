import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const BackContentWrapper = ({ children }: Props) => {
  return <div className="backContentWrapper">{children}</div>;
};

export default BackContentWrapper;
