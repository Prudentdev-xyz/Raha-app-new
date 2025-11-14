import React from "react";
import AboutHeroPics from "/AboutHeroPics.svg";
import { DonatenewButton } from "../buttons/DonatenewButton";

export const HeroAboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-90 py-5 md:py-20 px-5 relative">
        <img
          src={AboutHeroPics}
          alt="AboutHeroPics"
          className="md:flex hidden h-170 w-210 pl-10"
        />
        <div className="md:pr-20">
          <p className="text-lg md:text-xl text-center md:text-left font-bold text-primary tracking-widest py-2 md:py-3">
            Start Donations
          </p>
          <h2 className="text-xl md:text-3xl font-semibold text-center md:text-left space-x-5 md:spzce-x-11 max-w-sm md:max-w-lg py-2">
            Supporting One Another to Create a Better World
          </h2>
          <p className="max-w-lg md:max-w-2xl text-gray space-y-2 md:space-y-3 text-center md:text-left text-sm md:text-xl">
            Supporting one another is one of the most powerful ways we can make
            a positive impact in the world. When we extend a helping hand, we
            strengthen our communities, uplift those in need, and build a
            foundation of kindness that benefits everyone. Small acts of
            generosity and compassion can inspire others to do the same,
            creating a ripple effect that reaches far beyond what we can see. By
            working together and looking out for each other, we foster a world
            where empathy and cooperation thrive, making it a better place for
            future generations.
          </p>
          <div className="pt-7 md:pt-10 pb-10 md:pb-20 flex items-center justify-center md:justify-start">
            <a href="/Donate"><DonatenewButton>Donate Now</DonatenewButton></a>
          </div>

          <div className="flex gap-10 bg-secondary p-10 items-center text-center justify-center">
            <div>
              <h1 className="font-semibold text-2xl md:text-4xl pb-3 text-center md:text-left">
                15K+
              </h1>
              <p className="font-regular text-xs md:text-lg">
                Incredible Volunteers
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-2xl md:text-4xl pb-3 text-center md:text-left">
                125+
              </h1>
              <p className="font-regular text-xs md:text-lg">Monthly Donors</p>
            </div>
            <div>
              <h1 className="font-semibold text-2xl md:text-4xl pb-3 text-center md:text-left">
                5K+
              </h1>
              <p className="font-regular text-xs md:text-lg">Team Support</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute md:flex hidden right-0 top-150"
        src="/LeafAboutHero.svg"
        alt="LeafAboutHero"
      />
    </div>
  );
};
