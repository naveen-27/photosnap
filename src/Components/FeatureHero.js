import React from "react";
import getHeroImage from "../Utils/getHeroImage";
import Hero from "./Hero";

const FeatureHero = () => {
  const content = {
    title: "FEATURES",
    detail:
      "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    btn: "VIEW FEATURES",
  };

  return (
    <Hero
      descText={content}
      heroNo={0}
      isDark={true}
      img={getHeroImage("features", window.innerWidth)}
    />
  );
};

export default FeatureHero;
