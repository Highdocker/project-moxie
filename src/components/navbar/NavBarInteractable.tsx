import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const NavBarInteractable = ({ children }: Props) => {
  return <div className="navBarInteractable">{children}</div>;
};

export default NavBarInteractable;
