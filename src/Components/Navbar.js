import React, { useState, useEffect } from "react";
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

  const headerChildren = (
    <>
      <nav>
        <ul className={classes["Nav-links"]}>
          <li className={classes["nav-link"]}>
            <a href="#a">stories</a>
          </li>
          <li className={classes["nav-link"]}>
            <a href="#b">features</a>
          </li>
          <li className={classes["nav-link"]}>
            <a href="#c">pricing</a>
          </li>
        </ul>
      </nav>

      <Button label="get an invite" isLight={false} />
    </>
  );

  const mobileNav = (
    <>
      <nav className={isMobileNavOpen ? classes["nav-open"] : ""}>
        <ul className={classes["Nav-links"]}>
          <li className={classes["nav-link"]}>stories</li>
          <li className={classes["nav-link"]}>features</li>
          <li className={classes["nav-link"]}>pricing</li>

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
        <div
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          style={{ padding: "0.5rem 0" }}
        >
          <div
            className={`${
              isMobileNavOpen
                ? `${classes.menu} ${classes.active}`
                : classes.menu
            }`}
          ></div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
