import React from "react";
import arrowLeft from "/arrowLeft.svg";
import arrowRight from "/arrowRight.svg";
import { TeamCard, Teamcarddata } from "./TeamCard";

export const Team = () => {
  return (
    <div className="bg-neutral p-10 relative">
      <div>
        <p className="font-semibold text-xl md:text-2xl text-primary tracking-widest">
          Our Team
        </p>
        <h2 className="text-sm md:text-3xl font-semibold space-x-11 msx-w-10xl md:max-w-xl pt-3">
          Meet the people behind Raha
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-20 gap-10 md:gap-20">
        {Teamcarddata.map((Teamcarddata) => (
          <TeamCard 
          Team={Teamcarddata.Team}
          Name={Teamcarddata.Name}
          Title={Teamcarddata.Title}
          Social={Teamcarddata.Social}
          buttonClassName={Teamcarddata?.buttonClassName}
        />
        ))}
      </div>
    </div>
  );
};
