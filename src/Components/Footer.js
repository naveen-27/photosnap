import React from "react";
import { ReactComponent as LogoLight } from "../images/shared/desktop/logo-white.svg";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { ReactComponent as ArrowLight } from "../images/shared/desktop/arrow-white.svg";
import classes from "../Stylesheets/Footer.module.css";

const Footer = () => {
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });

    document.querySelector("button#focus-establish").focus();
  };

  return (
    <footer className={classes.Footer}>
      <div className={classes["Footer-main"]}>
        <LogoLight />

        <ul className={classes["Footer-links"]}>
          <li className={classes["footer-link"]} onClick={scrollTop}>
            <Link to="/">home</Link>
          </li>

          <li className={classes["footer-link"]} onClick={scrollTop}>
            <Link to="/stories">stories</Link>
          </li>

          <li className={classes["footer-link"]} onClick={scrollTop}>
            <Link to="/features">features</Link>
          </li>

          <li className={classes["footer-link"]} onClick={scrollTop}>
            <Link to="/pricing">pricing</Link>
          </li>
        </ul>

        <SocialLinks />
      </div>

      <div className={classes["sec-footer"]}>
        <button className="prm-btn">
          GET AN INVITE
          <ArrowLight />
        </button>

        <p className={classes.copyright}>
          Copyright {new Date().toDateString().slice(11)}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
