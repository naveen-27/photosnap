import React from "react";
import { ReactComponent as GotoLight } from "../images/shared/desktop/arrow-white.svg";
import { ReactComponent as Goto } from "../images/shared/desktop/arrow.svg";
import classes from "../Stylesheets/Action.module.css";

const Action = (props) => {
  const darkThemeClass = props.dark ? classes.dark : "";
  const mutedTextColor = props.dark
    ? classes["muted-dark"]
    : classes["muted-light"];

  return (
    <div className={`${classes.Action} ${darkThemeClass}`}>
      <div>
        <h1 className={classes.head}>{props.content.title}</h1>

        <p className={`${classes["muted-text"]} ${mutedTextColor}`}>
          {props.content.detail}
        </p>

        <button className={`${classes["Action-Cta"]} ${darkThemeClass}`}>
          {props.content.btn}
          {props.dark ? <GotoLight /> : <Goto />}
        </button>
      </div>
    </div>
  );
};

export default Action;
