import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavSearchBar = ({ children }: Props) => {
  return (
    <div className="navSearchContent">
      <img src="/svgcontent/searchicon.svg" className="navSearchIcon" />
      <div className="navSearchBar">
        <input type="search" className="navSearchInput" />
      </div>
      <img src="/svgcontent/filtericon.svg" className="navFilterIcon" />
    </div>
  );
};

export default NavSearchBar;
