import React from "react";
import HeroContainer from "../HeroContainer";
import StoriesGrid from "../StoriesGrid";
import FeaturesContainer from "../FeaturesContainer";

const Home = () => {
  document.title = "Photosnap - Home";

  return (
    <>
      <HeroContainer />
      <StoriesGrid isHome={true} />
      <FeaturesContainer isHome={true} />
    </>
  );
};

export default Home;
