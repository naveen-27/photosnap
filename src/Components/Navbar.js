import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/shared/desktop/logo.svg";
import Button from "./Button";
import classes from "../Stylesheets/Navbar.module.css";

const Navbar = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth);

      if (window.innerWidth > 750) {
        setIsMobileNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  const toggleNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const links = (
    <>
      <li className={classes["nav-link"]} onClick={toggleNav}>
        <Link to="/">home</Link>
      </li>

      <li className={classes["nav-link"]} onClick={toggleNav}>
        <Link to="/stories">stories</Link>
      </li>

      <li className={classes["nav-link"]} onClick={toggleNav}>
        <Link to="/features">features</Link>
      </li>

      <li className={classes["nav-link"]} onClick={toggleNav}>
        <Link to="/pricing">pricing</Link>
      </li>
    </>
  );

  const headerChildren = (
    <>
      <nav>
        <ul className={classes["Nav-links"]}>{links}</ul>
      </nav>

      <Button label="get an invite" isLight={false} />
    </>
  );

  const mobileNav = (
    <>
      <nav className={isMobileNavOpen ? classes["nav-open"] : ""}>
        <ul className={classes["Nav-links"]}>
          {links}
          <Button label="get an invite" isLight={false} />
        </ul>
      </nav>
    </>
  );

  return (
    <header className={classes.Header}>
      <Logo />
      {deviceWidth > 750 ? headerChildren : null}
      {deviceWidth <= 750 ? mobileNav : null}
      {deviceWidth <= 750 ? (
        <div onClick={toggleNav} style={{ padding: "0.5rem 0" }}>
          <div
            className={`${
              isMobileNavOpen
                ? `${classes.menu} ${classes.active}`
                : classes.menu
            }`}
          ></div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
