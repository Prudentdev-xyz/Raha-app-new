import React from "react";

export const ContactHero = () => {
  return (
    <div>
      <div className="p-20 md:p-40 pt-35 md:pt-2 bg-primary relative">
        <h1 className="text-tetiary font-bold text-4xl md:text-8xl flex items-center justify-center text-center">
          Contact
        </h1>
        <p className="text-tetiary flex items-center justify-center text-center pt-1 text-sm md:text-xl">
          Home / Contact
        </p>
        <div>
          <img
            className="absolute md:flex hidden right-0 bottom-20"
            src="/AboutLeafRight.svg"
            alt="AboutLeafRight"
          />
          <img
            className="absolute md:flex hidden left-0 top-20"
            src="/AboutLeafLeft.svg"
            alt="AboutLeafLeft"
          />
        </div>
      </div>
    </div>
  );
};
