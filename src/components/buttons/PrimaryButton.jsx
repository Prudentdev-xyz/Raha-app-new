import React, { Children } from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-primary text-white px-4 py-2 md:px-8 md:py-4 text-lg md:text-xl font-medium rounded-full">
      {children}
    </button>
  );
};
