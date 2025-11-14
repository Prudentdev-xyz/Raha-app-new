import React from "react";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { HeroAboutUs } from "../components/layouts/HeroAboutUs";
import { About } from "../components/layouts/About";
import { Team } from "../components/Team";
import { FaqPage } from "../components/FaqPage";

export const AboutUs = () => {
  return (
    <div>
      <div>
        <About />
        <HeroAboutUs />
        <Team />
        <FaqPage />
      </div>
    </div>
  );
};
