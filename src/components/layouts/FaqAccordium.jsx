import React, { useState } from "react";
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";

const Faqs = [
  {
    Question: "How can I donate to your charity?",
    Answer:
      "You can donate online through our website, by mailing a check, or through fundraising events. Every contribution, big or small, makes a difference!",
  },
  {
    Question:
      "How do I make a donation through your platform, and is it tax-deductible?",
    Answer:
      "Just click “Donate” on any campaign, choose your amount, and pay securely. Donations to verified nonprofits may be tax-deductible check the campaign details to confirm.",
  },
  {
    Question: "How do you ensure that donations are used effectively?",
    Answer:
      "We verify campaigns, track fund usage, and require regular updates from organizers to ensure every donation is used transparently and effectively.",
  },
  {
    Question: "Can I start my own fundraising campaign?",
    Answer:
      "Yes! Simply create an account, click “Fundraise,” add your story, goal, and images, and your fundraiser will be live in minutes.",
  },
  {
    Question: "What types of programs does your charity support?",
    Answer:
      "We support a variety of programs focused on education, healthcare, community development, and emergency relief, all aimed at creating lasting, positive impact.",
  },
  {
    Question: "How can I stay updated on your charity’s activities?",
    Answer:
      "You can stay updated by following our social media pages, subscribing to our newsletter, or checking our website regularly for news, campaign updates, and impact stories.",
  },
];

function FaqAccordium() {
  const [selectItem, setSelectedItem] = useState(0);

  const toogleItem = (index) => {
    setSelectedItem(selectItem === index ? null : index);
  };

  return (
    <div>
      <div className="w-fit md:w-270 flex flex-col gap-2 md:gap-5">
        {Faqs.map((Faqs, index) => (
          <div
            className={`transition-all duration-200 ease-in-out w-full md:w-3/4 ${
              selectItem === index ? "bg-primary w-3/4" : "bg-white"
            }`}
          >
            <button
              className={`w-full ${
                selectItem === index ? "" : "border border-stroke"
              }`}
              onClick={() => toogleItem(index)}
            >
              <div className="flex gap-2 items-center justify-between px-3 py-2">
                <h1
                  className={`font-medium text-sm md:text-2xl max-w-xl text-left p-1 md:p-3 ${
                    selectItem === index ? "text-white" : ""
                  }`}
                >
                  {Faqs.Question}
                </h1>
                <div className="justify-between">
                  {selectItem === index ? <CircleMinus /> : <CirclePlus />}
                </div>
              </div>
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                selectItem === index
                  ? "h-25 opacity-100% bg-primary"
                  : "max-h-0 opacity-0 border-0"
              }`}
            >
              <p className="font-regular text-xs md:text-lg max-w-xl md:max-w-3xl text-gray text-left md:py-1 px-3">
                {Faqs.Answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqAccordium;
