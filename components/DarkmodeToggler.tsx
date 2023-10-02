"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

declare global {
  interface Window {
    __theme: any;
    __setPreferredTheme: any;
    __onThemeChange: any;
  }
}

const DarkmodeToggler = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");

  const isDark = theme === "dark";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className={`${isDark ? "bg-gray-500" : "bg-gray-900"}
            relative inline-flex h-[21px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Darkmode</span>
      <span
        aria-hidden="true"
        className={`${isDark ? "translate-x-4" : "translate-x-0"}
              pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out`}
      />
    </Switch>
  );
};

export default DarkmodeToggler;
