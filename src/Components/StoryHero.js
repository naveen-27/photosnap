import React from "react";
import getHeroImage from "../Utils/getHeroImage";
import { ReactComponent as GotoLight } from "../images/shared/desktop/arrow-white.svg";
import classes from "../Stylesheets/StoryHero.module.css";

const StoryHero = () => {
  return (
    <div className={classes.Hero}>
      <img
        className={classes.img}
        src={getHeroImage("stories", window.innerWidth)}
        alt=""
      />

      <div className={classes["Hero-text"]}>
        <h5>LAST MONTH'S FEATURED STORY</h5>
        <h1>HAZY FULL MOON OF APPALACHIA</h1>
        <p className={classes.citation}>
          March 2nd 2020 &nbsp; by John Appleseed
        </p>
        <p>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button className="prm-btn">
          VIEW STORIES
          <GotoLight />
        </button>
      </div>
    </div>
  );
};

export default StoryHero;
