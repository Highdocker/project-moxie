import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavSearchBar = ({ children }: Props) => {
  return (
    <div className="navSearchContent">
      <button className="navSearchButton">
        <img src="/svgcontent/searchicon.svg" className="navSearchIcon" />
      </button>
      <div className="navSearchBar">
        <input type="search" className="navSearchInput" />
      </div>
      <button className="navFilterButton">
        <img src="/svgcontent/filtericon.svg" className="navFilterIcon" />
      </button>
    </div>
  );
};

export default NavSearchBar;
