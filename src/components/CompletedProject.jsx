import CompletedProjectCamera from "/CompletedProjectCamera.svg"
import CompletedProjectHand from "/CompletedProjectHand.svg"

import React from "react";
import { CampaignCard } from "./CampaignCard";
import { CompletedProjectCard, CompletedProjectdata } from "./CompletedProjectCard";

export const CompletedProject = () => {
  return (
    <div className="bg-secondary p-10 md:p-25 relative">
      <div>
        <p className="font-bold text-primary tracking-widest text-lg md:text-xl text-center">
          OUR COMPLETED PROJECTS
        </p>
        <p className="font-semibold mx-auto text-center text-lg md:text-3xl p-0 md:p-2 max-w-3xl">
          A Comprehensive Collection of Completed Projects That Reflect Our
          Dedication, Skill, and Excellence
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 pt-5 items-center justify-center mx-2 md:mx-20">
        {CompletedProjectdata.map((CompletedProjectdata) => (
        <CompletedProjectCard
        img={CompletedProjectdata.img}
        header={CompletedProjectdata.header}
        text={CompletedProjectdata.text}
        SeeProject={CompletedProjectdata.SeeProject}
        className={CompletedProjectdata.className}
        />
        ))}
      </div>

      <div>
    <img src={CompletedProjectCamera} className="md:flex hidden absolute right-0 top-4"/>
    <img src={CompletedProjectHand} className=" -left-15 absolute md:left-0 top-0"/>
      </div>
    </div>
  );
};
