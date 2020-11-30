import React from "react";
import Button from "../Components/Button";
import classes from "../Stylesheets/PriceCard.module.css";

const PriceCard = (props) => {
  const { plan, desc } = props.planDesc;

  const mutedTextColor = props.light ? "" : classes["muted-text-dark"];
  const cardDarkTheme = props.light ? "" : classes["Card-dark"];

  return (
    <div className={`${classes.Card} ${cardDarkTheme}`}>
      <h2 className={classes.plan}>{plan}</h2>
      <p className={`${classes["muted-text"]} ${mutedTextColor}`}>{desc}</p>
      <p className={classes.price}>${props.planDesc[props.duration]}</p>
      <Button isLight={!props.light} label="PICK PLAN" />
    </div>
  );
};

export default PriceCard;
