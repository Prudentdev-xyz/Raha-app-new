import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { WatchnowButton } from "../buttons/WatchnowButton";
import { DonatenewButton } from "../buttons/DonatenewButton";

export const Hero = () => {
  return (
    <div className="relative items-center bg-cover bg-[url('/hero-bg.svg')] pt-5">
      <div className="p-8 md:p-52">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-2xl md:text-8xl font-bold text-white text-center">
            Every Helping Hand, Every Heartfelt Change
          </h1>
          <p className="text:sm md:text-xl text-white text-center">
            Every helping hand brings heartfelt change, creating ripples of hope
            and compassion. Each act of kindness lifts lives, inspiring others
            and uniting us in a shared journey toward a brighter, more
            compassionate world.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <a href="https://youtu.be/fEheBFAVtJU?si=stmN5D8NhN65QdRg"><WatchnowButton>Watch Video</WatchnowButton></a>
            <a href="/Donate"><DonatenewButton>Donate Now</DonatenewButton></a>
          </div>
        </div>
      </div>
      <img className="absolute md:flex hidden right-20 -bottom-24" src="/hero-plastic.svg" />
      <img className="absolute md:flex hidden right-0 -top-9 z-1" src="/hero-hand.png" />
    </div>
  );
};
