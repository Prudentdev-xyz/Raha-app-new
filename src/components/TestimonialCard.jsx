import QuoteImg from "/QuoteImg.svg";
import MasonPics from "/MasonPics.svg";
import NoahPics from "/NoahPics.svg";

export const Testimonialdata = [
  {
    QuoteImg: QuoteImg,
    texts:
      "The team’s dedication to quality and excellence truly exceeded my expectations. From the initial consultation to the final deliverable, every detail was carefully managed, and they took the time to understand my unique needs and vision. Communication was clear and consistent, which made the entire process smooth and enjoyable. I could see their commitment to delivering not just a product but a complete, polished experience. It’s rare to find such a blend of professionalism, creativity, and responsiveness, and I would highly recommend them to anyone looking for top-tier service.",
    img: MasonPics,
    Name: "Mason Brooks",
    Work: "Business Development Lead",
  },
  {
    QuoteImg: QuoteImg,
    texts:
      "I am incredibly impressed by the professionalism and dedication shown by this team. From the very start, they demonstrated a deep understanding of our project goals and went out of their way to ensure all our needs were met. Not only did they deliver a high-quality product, but they also kept us updated at every step, explaining their process and the choices they made. Their attention to detail and commitment to going above and beyond was evident in every interaction, and they transformed our ideas into reality with a level of care and precision that is hard to find. I look forward to working with them on future projects and am confident in their ability to deliver outstanding results.",
    img: NoahPics,
    Name: "Noah Smith",
    Work: "Chief Operations Officer",
  },
];

import React from "react";

export const TestimonialCard = ({ QuoteImg, texts, img, Name, Work }) => {
  return (
    <div className="border-gray2 border-2 hover:shadow- hover:border-0 gap-4">
      <img src={QuoteImg} alt="QuoteImg" className=" p-3 md:p-10" />
      <p className=" p-3 md:p-5 font-regular text-xs md:text-sm text-gray max-w-5xl">{texts}</p>
      <div className="flex p-2 md:p-5 gap-5">
      <img src={img} alt="Img" className="h-30 w-30 md:h-[180px] md:w-[180px]" />
      <div className="flex flex-col justify-end">
      <h3 className="font-normal md:font-medium text-black text-lg md:text-3xl">{Name}</h3>
      <p className="font-regular text-gray text-xs md:text-lg max-w-sm-">{Work}</p>
      </div>
      </div>
    </div>
  );
};
