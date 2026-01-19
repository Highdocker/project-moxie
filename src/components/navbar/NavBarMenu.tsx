import { ReactNode } from "react";
import React, { useState } from "react";
interface Props {
  children?: ReactNode;
}

const NavBarMenu = ({ children }: Props) => {
  // Determines whether or not the menu dropdown is active
  // Dropdown is either Open, OR Not Open [true OR false]
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="navInteractableButton" onClick={() => setOpen(!open)}>
        <img src="/svgcontent/menuicon.svg" className="navIcon" />
      </button>
      {open && children}
    </>
  );
};

export default NavBarMenu;
