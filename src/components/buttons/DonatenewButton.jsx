import React from "react";

export const DonatenewButton = ({ children}) => {
  return (
    <button className={`bg-primary w-fit text-white px-6 md:px-8 py-2 md:py-4 text-lg md:text-xl font-medium rounded-full border-tetiary border-2`}>
      {children}
    </button>
  );
};
