import React from "react";
import Hero from "./Hero";

const descTexts = [
  {
    title: "CREATE AND SHARE YOUR PHOTO STORIES.",
    detail:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    btn: "GET AN INVITE",
  },
  {
    title: "BEAUTIFUL STORIES EVERY TIME",
    detail:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    btn: "VIEW THE STORIES",
  },
  {
    title: "DESIGNED FOR EVERYONE",
    detail:
      "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    btn: "VIEW THE STORIES",
  },
];

const HeroConatiner = () => {
  return (
    <div>
      {descTexts.map((descText, idx) => (
        <Hero descText={descText} heroNo={idx} key={idx} />
      ))}
    </div>
  );
};

export default HeroConatiner;
