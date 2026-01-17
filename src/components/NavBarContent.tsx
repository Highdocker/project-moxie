import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const NavBarContent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default NavBarContent;
