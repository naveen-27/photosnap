import React from "react";
import { ReactComponent as GotoLight } from "../images/shared/desktop/arrow-white.svg";
import getHeroImages from "../Utils/getHeroImage";
import classes from "../Stylesheets/Banner.module.css";

const Banner = () => {
  return (
    <div
      className={classes.Banner}
      style={{
        backgroundImage: `url(${getHeroImages("banner", window.innerWidth)})`,
      }}
    >
      <h1 className={classes["Banner-text"]}>
        WE'RE IN BETA. GET YOUR INVITE TODAY!
      </h1>

      <button className={"prm-btn"}>
        GET AN INVITE
        <GotoLight />
      </button>
    </div>
  );
};

export default Banner;
