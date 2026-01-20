import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavBarDropdownmenu = ({ children }: Props) => {
  return <div className="navBarDropdownmenu">{children}</div>;
};

export default NavBarDropdownmenu;
