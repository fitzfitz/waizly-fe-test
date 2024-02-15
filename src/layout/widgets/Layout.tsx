import React from "react";

interface ILayout {
  children?: React.ReactNode;
  className?: string;
}

const Layout = ({ className, children }: ILayout) => {
  return (
    <div
      className={`flex h-full min-h-screen w-screen flex-col bg-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
