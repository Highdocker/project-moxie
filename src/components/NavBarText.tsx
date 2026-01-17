import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  navText?: String;
}
const NavBarText = ({ children, navText }: Props) => {
  return (
    <div className="navBarContent">
      <div>{children}</div>
      <h1 className="navBarText">{navText}</h1>
    </div>
  );
};

export default NavBarText;
