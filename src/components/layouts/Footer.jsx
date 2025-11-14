import React from "react";
import RahaLogo from "/RahaLogo.svg";
import { WatchnowButton } from "../buttons/WatchnowButton";
import { DonatenewButton } from "../buttons/DonatenewButton";
import FooterBottomFlower3 from "/FooterBottomFlower3.svg"

export const FooterLinks = [
    {
        link: "/about",
        text: "About Us",
    },
    {
        link:  "https://youtu.be/fEheBFAVtJU?si=stmN5D8NhN65QdRg",
        text: "Our Story",
    },
    {
      link: "/",
      text: "Fundraise",
    },
    {
      link: "/Donate",
      text: "Donate",
    },
    {
      link: "/",
      text: "Fundraise",
    },
    {
      link: "/Cpntact",
      text: "Contact Us",
    },
    {
      link: "/",
      text: "Instagram",
    },
    {
      link: "/",
      text: "Twitter",
    },
    {
      link: "/",
      text: "LinkedIn",
    }
]

export const Footer = () => {
  return (
    <div className="relative bg-primary">
      <div className="bg-primary px-13 pt-10 md:p-13 flex flex-col md:flex-row md:justify-between">
        <div className="">
        <img src={RahaLogo} className="flex flex-col md:flex-row items-center" />
        <p className="text-gray max-w-2xl  font-regular text-sm md:text-lg flex text-center md:text-left py-5">
          Great futures are built with the support of small charities that
          create meaningful change in their communities. By addressing local
          needs with compassion, these organizations lay the foundation for
          brighter tomorrows and empower individuals and families to thrive.
        </p>
        <div className="pt-2 flex gap-5 flex-col md:flex-row items-center">
            <a href="https://youtu.be/fEheBFAVtJU?si=stmN5D8NhN65QdRg"><WatchnowButton>Donate Now</WatchnowButton></a>
            <a href="/Contact"><DonatenewButton>Contact us</DonatenewButton></a>
        </div>
        </div>

      <div className="w-full md:w-xl h-xl pt-5 md:pt-3 text-sm md:text-lg md:text-right flex md:block items-center justify-center">
        <ul className="text-tetiary gap-2 md:gap-3 grid grid-cols-2 md:grid-cols-3 ">
          {FooterLinks.map((link) => (
            <a href={link.link}>
           <li>
            {link.text}
           </li>
           </a>
          ))}
        </ul>
      </div>
      </div>
      <div className="bg-primary pt-10 md:pt-20">
        <img src={FooterBottomFlower3} alt="" className="absolute bottom-0 z-1"/>
      </div>
      <div className="bg-secondary top-9 p-3 md:p-2 flex items-center text-xs md:text-lg justify-center z-30 relative">
        ©Copyright 2024 Raha. All Right reserved.
      </div>
    </div>
  );
};
