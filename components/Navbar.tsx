import React from "react";
import { DarkmodeToggler } from ".";

const Navbar = () => {
  return (
    <header className="w-full sticky">
      <nav className="max-width flex-end p-x p-y">
        <div className="flex-center">
          <DarkmodeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
