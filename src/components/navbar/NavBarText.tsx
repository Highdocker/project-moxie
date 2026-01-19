import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  navText?: String;
}
const NavBarText = ({ children, navText }: Props) => {
  return (
    <button className="navBarContent navBarButton">
      <h1 className="navBarText">{navText}</h1>
    </button>
  );
};

export default NavBarText;
