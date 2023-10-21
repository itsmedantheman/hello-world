import React from "react";
import dynamic from "next/dynamic";

const Navbar = () => {
  const SetTheme = dynamic(() => import("./DarkmodeToggler"), {
    ssr: false,
  });

  return (
    <header className="w-full sticky">
      <nav className="max-width flex-end p-x p-y">
        <div className="flex-center">
          <SetTheme />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
