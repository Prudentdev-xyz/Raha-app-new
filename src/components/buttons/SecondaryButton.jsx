import React from "react";

export const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-secondary text-black px-8 py-4 text-xl font-medium rounded-full">
      {children}
    </button>
  );
};
