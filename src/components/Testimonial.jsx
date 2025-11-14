import React from "react";
import { TestimonialCard, Testimonialdata } from "./TestimonialCard";
import { Campaigndata } from "./CampaignCard";
import arrowLeft from "/arrowLeft.svg";
import arrowRight from "/arrowRight.svg";

export const Testimonial = () => {
  return (
    <div className="p-10 relative">
      <div>
        <p className="font-semibold text-xl md:text-2xl text-primary tracking-widest">
          TESTIMONIAL
        </p>
        <h2 className="text-sm md:text-3xl font-semibold space-x-11 max-w-10xl md:max-w-xl pt-3">
          Community Feedback on Our Mission
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-10 md:py-25">
        {Testimonialdata.map((Campaigndata) => (
          <TestimonialCard
            QuoteImg={Campaigndata.QuoteImg}
            texts={Campaigndata.texts}
            img={Campaigndata.img}
            Name={Campaigndata.Name}
            Work={Campaigndata.Work}
          />
        ))}
      </div>
    </div>
  );
};
