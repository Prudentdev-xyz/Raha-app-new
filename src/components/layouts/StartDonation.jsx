import React from "react";
import { CampaignCard, Campaigndata } from "../campaignCard";

export const StartDonation = () => {
  return (
    <div className="relative items-center p-10 md:p-25 bg-neutral">
      <div>
        <p className="font-semibold md:font-bold text-center text-primary tracking-widest text-sm md:text-xl">
          START DONATIONS
        </p>
        <p className="font-medium md:font-semibold mx-auto text-center text-2xl md:text-3xl p-2 max-w-5xl md:max-w-xl">
          Transparent Donations: See How You Make a Difference
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-10 pt-10 items-center justify-center mx-4">
        {Campaigndata.map((Campaigndata) => (
        <CampaignCard
        img={Campaigndata.img}
        header={Campaigndata.header}
        text={Campaigndata.text}
        number={Campaigndata.number}
        donate={Campaigndata.donate}
        raisedNo={Campaigndata.raisedNo}
        className={Campaigndata.className}
        rangeClassName={Campaigndata.rangeClassName}
        buttonclassName={Campaigndata?.buttonClassName}
        />
        ))}
      </div>
      <div>
        <img className="absolute md:flex hidden left-0 top-0" src="/Donation-leaf-left.svg" />
        <img className="absolute md:flex hidden right-0 top-0" src="/Donation-leaf-right.svg"/>
      </div>
    </div>
  );
}; 
