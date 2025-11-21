import { DonatenewButton } from "./buttons/DonatenewButton";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { WatchnowButton } from "./buttons/WatchnowButton";
import Completed1 from "/Completed1.svg";
import Completed2 from "/Completed2.svg";
import Completed3 from "/Completed3.svg";

export const CompletedProjectdata = [
  {
    img: Completed1,
    header: "Charity's Mission to Educate Underprivileged Children",
    text: "With a focus on providing quality education to children in need, this charity is building schools that offer new opportunities for brighter futures.",
    SeeProject: "See Project",
    className: "!bg-secondary !text-black",
  },
  {
    img: Completed2,
    header: "A Charity's School-Building Initiative for Vulnerable Youth",
    text: "Through dedicated efforts, this initiative aims to give underprivileged children a safe space to learn, grow, and achieve their dreams.",
    SeeProject: "See Project",
  },
  {
    img: Completed3,
    header: "Charity Builds Schools to Uplift Communities",
    text: "This charity believes every child deserves a quality education. By constructing schools, they're paving the way for lasting community transformation.",
    SeeProject: "See Project",
    className: "!bg-secondary !text-black",
  },
];

import React from "react";

export const CompletedProjectCard = ({
  img,
  header,
  text,
  SeeProject,
  className,
}) => {
  return (
    <div className="bg-tetiary px-6 md:px-6 pt-3 pb-10">
      <img
        src={img}
        alt="CompletedProject"
        className="h-50 py-2 md:h-full w-5/6 flex items-center justify-center mx-auto"
      />
      <h1 className="font-medium mx-auto text-sm md:text-2xl text-black items-center">
        {header}
      </h1>
      <p className="font-regular text-xs md:text-sm text-gray py-2 md:py-5">
        {text}
      </p>
      <a href="/"><button
        className={`bg-primary text-white px-4 py-2 md:px-8 md:py-4 text-lg md:text-xl font-medium rounded-full ${className}`}
      >
        {SeeProject}
      </button>
      </a>
    </div>
  );
};
