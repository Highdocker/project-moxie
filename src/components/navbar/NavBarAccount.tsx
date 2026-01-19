import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavBarAccount = ({ children }: Props) => {
  return (
    <div className="navBarInteractable">
      <button className="navInteractableButton">
        <img src="/svgcontent/accounticon.svg" className="navIcon" />
      </button>
    </div>
  );
};

export default NavBarAccount;
