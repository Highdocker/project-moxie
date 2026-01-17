import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const GeneralContentLargeWrapper = ({ children }: Props) => {
  return <div className="generalContentLargeWrapper">{children}</div>;
};

export default GeneralContentLargeWrapper;
