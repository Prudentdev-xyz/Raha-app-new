import React from "react";
import AvaPicture from "/AvaPicture.svg";
import Ethanpicture from "/EthanPicture.svg";
import LiamPicture from "/LiamPicture.svg";

export const Teamcarddata = [
  {
    Team: AvaPicture,
    Name: "Liam Anderson",
    Title: "CEO & Founder",
    Social: "LinkedIn",
  },
  {
    Team: Ethanpicture,
    Name: "Ethan Patel",
    Title: "Co-Founder, Growth Lead",
    Social: "LinkedIn",
    buttonClassName: "!bg-primary !text-tetiary"
  },
  {
    Team: LiamPicture,
    Name: "Ava Thompson",
    Title: "Special Adviser",
    Social: "LinkedIn",
  },
];

export const TeamCard = ({ Team, Name, Title, Social, buttonClassName }) => {
  return (
    <div className="border-tetiary border-2 hover-shadow hover:shadow-lg hover:border-0 pb-5 px-10">
      <img
        src={Team}
        alt="TeamPics"
        className="h-60 w-80 md:h-100 md:w-150 pt-3 md:pt-10"
      />
      <h1 className="p-2 md:py-5 md:px-7 font-medium text-lg md:text-3xl">{Name}</h1>
      <p className="font-regular text-gray2 text-sm md:text-xl px-3 md:px-7 py-1">{Title}</p>
      <div className="px-1 md:px-5 py-1 pt-3 md:pt-5">
        <a href="/about"><button className={`${buttonClassName} bg-secondary text-black px-6 md:px-8 py-2 md:py-4 text-lg md:text-xl font-medium rounded-full`}>{Social}</button></a>
      </div>
    </div>
  );
};
