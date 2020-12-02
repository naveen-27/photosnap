import React from "react";
import classes from "../Stylesheets/Button.module.css";

const Button = (props) => {
  const theme = props.isLight ? classes.light : classes.dark;

  return (
    <button
      className={`${classes.Btn} ${theme}`}
      tabIndex={props.tabIndex || 0}
    >
      {props.label}
    </button>
  );
};

export default Button;
