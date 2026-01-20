import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const NavBarWrapper = ({ children }: Props) => {
  return (
    <div className="homeNavBarWrapper">
      {children}
      <div className="navBarHorizGradient"></div>
    </div>
  );
};

export default NavBarWrapper;
