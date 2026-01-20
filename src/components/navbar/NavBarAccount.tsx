import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavBarAccount = ({ children }: Props) => {
  return (
    <>
      <button className="navInteractableButton">
        <img src="/svgcontent/accounticon.svg" className="navIcon" />
      </button>
    </>
  );
};

export default NavBarAccount;
