import React, { ReactNode } from "react";

interface GridSmallBackgroundDemoProps {
  children: ReactNode;
}

export const GridSmallBackgroundDemo: React.FC<GridSmallBackgroundDemoProps> = ({ children }) => {
  return (
    <div
      className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.5] relative flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
     
      {children}
    </div>
  );
};
