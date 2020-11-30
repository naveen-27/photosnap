import React from "react";
import StoryHero from "../StoryHero";
import StoriesGrid from "../StoriesGrid";

const Stories = () => {
  document.title = "Photosnap - Stories";

  return (
    <>
      <StoryHero />
      <StoriesGrid isHome={false} />
    </>
  );
};

export default Stories;
