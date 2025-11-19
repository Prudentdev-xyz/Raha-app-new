import React from "react";
import { Header } from "./Header";
import { Servicedatas, ServiceCards } from "../ServiceCard";
import CharityLeaf from "/Charity-leaf.svg";

export const CharityService = () => {
  return (
    <div className="relative items-center">
      <div className="px-3 py-10 md:px-20 md:py-30 flex flex-col md:flex-row items-center text-center justify-between gap-10">
        <div className="md:text-left text-center">
          <p className="text-sm md:text-xl font-bold text-primary tracking-widest">
            CHARITY SERVICE
          </p>
          <h2 className="text-xl md:text-3xl font-semibold space-x-5 md:space-x-11 max-w-sm md:max-w-xl">
            Dedicated to Everyone: Compassionate Service for All People
            Everywhere
          </h2>
        </div>

        <div className="flex max-w-2xl md:max-w-4xl space-y-2 md:space-y-4 items-center md:items-end md:justify-end md:pl-80 text-gray">
          Dedicated to Everyone: Compassionate Service for All People
          Everywhere means reaching all individuals with the care and support
          they need.
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-5 justify-between relative p-7 md:p-20">
        {Servicedatas.map((Servicedata) => (
          <ServiceCards
            text={Servicedata.text}
            header={Servicedata.header}
            img={Servicedata.img}
            className={Servicedata.className}
            HeaderChange={Servicedata?.HeaderChange}
          />
        ))}
      </div>
      <div>
        <img src={CharityLeaf} className="absolute right-0 top-2" />
      </div>
    </div>
  );
};
