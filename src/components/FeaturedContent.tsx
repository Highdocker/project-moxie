import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const FeaturedContent = ({ children }: Props) => {
  return <div className="featuredContent">{children}</div>;
};

export default FeaturedContent;
