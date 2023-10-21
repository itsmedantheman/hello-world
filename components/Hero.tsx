"use client";

import React from "react";
import { Button } from ".";

const Hero = () => {
  const handleClick = () => {
    alert("Thanks. Stay tuned.");
  };

  return (
    <div className="hero__main max-width">
      <div className="flex-1 p-x">
        <h1 className="hero__title">Hello World!</h1>
        <p className="hero__subtitle">This gets awesome. To be continued...</p>
        <Button
          text="Click me"
          textStyle="bg-green-600 text-white rounded-full px-3"
          handleClick={handleClick}
          btnStyle="pt-1"
        />
      </div>
    </div>
  );
};

export default Hero;
