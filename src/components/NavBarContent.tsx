import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavBarContent = ({ children }: Props) => {
  return (
    <div>
      <img src="/images/menuicon.png" alt="menuicon" />
    </div>
  );
};

export default NavBarContent;
