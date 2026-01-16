import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <div className="homeNavBar">
      {children}
      <div className="homeNavBarBottom"></div>
    </div>
  );
};

export default NavBar;
