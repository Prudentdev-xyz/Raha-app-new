import React from "react";

export const WatchnowButton = ({ children }) => {
  return (
    <button className="bg-secondary text-black px-6 md:px-8 py-2 md:py-4 text-lg md:text-xl font-medium rounded-full">
      {children}
    </button>
  );
};
