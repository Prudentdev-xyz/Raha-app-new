import React from "react";

export const FundraisePage = () => {
  return (
    <div className="flex p-20">
      <div className="p-10">
        <h1>Fundraise</h1>
      </div>
      <div className="bg-primary p-10 md:flex hidden flex-col items-center justify-center">
        <h1 className="text-secondary">Make a difference today</h1>
        <p className="text-white">
          Join thousands of donors and organizations making an impact through
          Raha.
        </p>
      </div>
    </div>
  );
};
