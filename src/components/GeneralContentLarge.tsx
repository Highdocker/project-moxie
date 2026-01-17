import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const GeneralContentLarge = ({ children }: Props) => {
  return (
    <div className="generalContentLarge">
      <h1>test</h1>
    </div>
  );
};

export default GeneralContentLarge;
