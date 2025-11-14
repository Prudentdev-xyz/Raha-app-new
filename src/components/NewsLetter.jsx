import React from "react";
import { WatchnowButton } from "./buttons/WatchnowButton";

export const NewsLetter = () => {
  return (
    <div className="bg-primary py-10 px-8 md:p-30 relative">
      <h1 className="text-tetiary font-semibold text-2xl md:text-4xl nx-auto text-center items-center justify-center flex pt-5">
        Subscribe to our Newsletter
      </h1>
      <p className="text-gray font-regular flex text-center justify-center text-xs md:ext-sm max-w-3xl mx-auto py-5">
        Subscribe to our newsletter to stay updated with the latest news,
        exclusive content, and special offers! Join our community and be the
        first to know about exciting events and opportunities. Don’t miss out,
        sign up today!
      </p>

      <div className="pt-3 flex flex-col md:flex-row gap-3 items-center justify-center">
        <input
          type="email"
          placeholder="Enter your email address"
          id=""
          className="rounded-full bg-tetiary/10 h-11 md:h-15 w-70 md:w-120 px-4 placeholder:text-gray border-0"
        />
        <a href="mailto:Raha-app@yahoo.com"><WatchnowButton>Subscribe</WatchnowButton></a>
      </div>

      <div>
        <img
          src="/StarRight.svg"
          alt="StarRight"
          className="md:flex hidden absolute top-15 right-130"
        />
        <img
          src="/StarLeft.svg"
          alt="StarLeft"
          className="md:flex hidden absolute top-65 left-120"
        />
        <img
          src="/plasticNewsletter.svg"
          alt="plasticNewsLetter"
          className="md:flex hidden absolute bottom-0 right-10"
        />
        <img
          src="/flowerNewsletter.svg"
          alt="flowerNewsletter"
          className="absolute md:flex hidden top-0 right-0"
        />
        <img
          src="/EnvelopeNewsletter.svg"
          alt="EnvelopeNewsletter"
          className="md:flex hidden absolute top-0 left-10"
        />
        <img
          src="/Gift.svg"
          alt="Gift"
          className="md:flex hidden absolute bottom-12 left-30"
        />
      </div>
    </div>
  );
};
