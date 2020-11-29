import React from "react";
import Feature from "./Feature";
import getFeatures from "../Utils/GetFeatures";
import classes from "../Stylesheets/Features.module.css";

const FeaturesContainer = (props) => {
  const containerClass = props.isHome ? classes.Home : classes.Main;

  return (
    <div className={`${classes["Feature-container"]} ${containerClass}`}>
      {getFeatures(props.isHome).map((feature, idx) => (
        <Feature content={feature} key={idx} styleClass={classes.Feature} />
      ))}
    </div>
  );
};

export default FeaturesContainer;
