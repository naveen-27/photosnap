import React from "react";
import getHeroImage from "../Utils/getHeroImage";
import Hero from "./Hero";

const PricingHero = () => {
  const content = {
    title: "PRICING",
    detail:
      "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    btn: "VIEW PRICES",
  };

  return (
    <Hero
      descText={content}
      heroNo={0}
      isDark={true}
      img={getHeroImage("pricing", window.innerWidth)}
    />
  );
};

export default PricingHero;
