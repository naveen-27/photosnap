import React from "react";
import { ReactComponent as GotoLight } from "../images/shared/desktop/arrow-white.svg";
import classes from "../Stylesheets/Story.module.css";

const Story = (props) => {
  const { img, title, author, date } = props.story;

  return (
    <div className={classes.Story}>
      <img src={img} alt={title} />

      <div className={classes["Story-citation"]}>
        <p>{date}</p>
        <h3 className={classes["Story-title"]}>{title}</h3>
        <p>By {author}</p>

        <button className={classes.btn}>
          VIEW STORY
          <GotoLight />
        </button>
      </div>
    </div>
  );
};

export default Story;
