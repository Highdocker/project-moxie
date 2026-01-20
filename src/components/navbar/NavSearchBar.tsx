import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavSearchBar = ({ children }: Props) => {
  return (
    <div className="navSearchContent">
      <div className="navBarInteractable">
        <button className="navInteractableButton">
          <img src="/svgcontent/searchicon.svg" className="navIcon" />
        </button>
      </div>

      <div className="navSearchBar">
        <input type="search" className="navSearchInput" />
      </div>
      <div className="navBarInteractable">
        <button className="navInteractableButton">
          <img src="/svgcontent/filtericon.svg" className="navIcon" />
        </button>
      </div>
    </div>
  );
};

export default NavSearchBar;
