import React, { ReactNode } from "react";

type MainWrapperChildren = { children: ReactNode };

const MainWrapper: React.FC<MainWrapperChildren> = ({ children }) => {
  return (
    <main className="bg-red-500  relative p-4 w-[60dvw] mx-auto grid place-content-center">
      {children}
    </main>
  );
};

export default MainWrapper;
