import React from "react";
import FeaturerHero from "../FeatureHero";
import FeaturesContainer from "../FeaturesContainer";
import Banner from "../Banner";

const Features = () => {
  document.title = "Photosnap - Features";

  return (
    <>
      <FeaturerHero />
      <FeaturesContainer isHome={false} />
      <Banner />
    </>
  );
};

export default Features;
