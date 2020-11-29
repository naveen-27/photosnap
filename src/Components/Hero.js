import React from "react";
import Action from "./Action";
import chooseImageHome from "../Utils/HomeImages";
import classes from "../Stylesheets/Hero.module.css";

const Hero = (props) => {
  const isHeroOdd = props.heroNo % 2 === 1;
  const isMobile = window.innerWidth <= 750;

  const reverseClass = isHeroOdd && !isMobile ? classes.reverse : "";

  return (
    <div className={`${classes.Hero} ${reverseClass}`}>
      <Action content={props.descText} dark={props.heroNo === 0} />

      <div
        className={classes["Hero-img"]}
        style={{ backgroundImage: `url(${chooseImageHome()[props.heroNo]})` }}
      ></div>
    </div>
  );
};

export default Hero;
