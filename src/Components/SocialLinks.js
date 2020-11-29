import React from "react";
import { ReactComponent as Facebook } from "../images/shared/desktop/facebook-white.svg";
import { ReactComponent as Twitter } from "../images/shared/desktop/twitter-white.svg";
import { ReactComponent as Instagram } from "../images/shared/desktop/insta-white.svg";
import { ReactComponent as Pinterest } from "../images/shared/desktop/pinterest-white.svg";
import { ReactComponent as Youtube } from "../images/shared/desktop/youtube-white.svg";
import classes from "../Stylesheets/SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={classes["Social-links"]}>
      <Facebook />
      <Youtube />
      <Twitter />
      <Pinterest />
      <Instagram />
    </div>
  );
};

export default SocialLinks;
