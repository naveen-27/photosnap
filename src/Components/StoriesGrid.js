import React from "react";
import Story from "../Components/Story";
import getStories from "../Utils/StoryProvider";
import classes from "../Stylesheets/StoriesGrid.module.css";

const StoriesGrid = (props) => {
  return (
    <div className={classes["Story-container"]}>
      {getStories(props.isHome).map((story) => (
        <Story story={story} key={story.title} />
      ))}
    </div>
  );
};

export default StoriesGrid;
