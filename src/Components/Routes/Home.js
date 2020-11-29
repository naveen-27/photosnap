import React from "react";
import HeroContainer from "../HeroContainer";
import FeaturesContainer from "../FeaturesContainer";

const Home = () => {
  document.title = "Photosnap - Home";

  return (
    <>
      <HeroContainer />
      <FeaturesContainer isHome={true} />
    </>
  );
};

export default Home;
