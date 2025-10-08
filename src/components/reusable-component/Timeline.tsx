import type { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Timeline = ({ children }: props) => {
  return <div className="w-full max-w-3xl mx-auto">{children}</div>;
};

export default Timeline;
