import React from "react";
import { WatchnowButton } from "./buttons/WatchnowButton";

export const DonationNO = () => {
  return (
    <div className='relative bg-cover bg-[url("/Donation-No-bg.svg")]'>
      <div className="py-10 md:py-20">
        <div className="text-tetiary">
          <p className="flex text-center items-center justify-center font-medium text-lg md:text-4xl max-w-3xl mx-auto">
            Join Our Community of Donors and Volunteers:
          </p>
          <p className="flex text-center items-center justify-center font-medium text-lg md:text-4xl max-w-10xl md:max-w-3xl mx-auto py-3">
            Be Part of Positive Change in the World
          </p>
          <h1 className="font-bold text-tetiary text-4xl md:text-8xl flex text-center items-center justify-center py-3 md:py-5">
            154,859+
          </h1>
          <p className="font-medium text-gray flex text-center items-center justify-center md:pt-5 md:pb-2 text-sm md:text-3xl max-w-lg mx-auto">
            Join the Many Who Already Support
          </p>
          <p className="font-medium text-gray flex text-center items-center justify-center text-sm md:text-3xl max-w-lg mx-auto">
            Our Mission
          </p>
        </div>
        <div className="flex items-center justify-center pt-5 md:pt-10">
          <WatchnowButton>Join Our Community</WatchnowButton>
        </div>
        <div>
          <img
            className="absolute md:flex hidden bottom-0 left-50"
            src="/envelopeDonation.svg"
          />
          <img className="absolute md:flex hidden -top-5 left-20" src="/loveDonation.svg" />
        </div>
      </div>
    </div>
  );
};
