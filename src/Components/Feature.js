import React from "react";

const Feature = (props) => {
  const { img: Img, title, detail } = props.content;
  return (
    <div className={props.styleClass}>
      <Img />
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default Feature;
