import React from "react";
import { ReactComponent as FeatureAvailable } from "../images/pricing/desktop/check.svg";
import { ReactComponent as FeatureUnavailable } from "../images/shared/mobile/close.svg";
import classes from "../Stylesheets/Row.module.css";

const Row = (props) => {
  const {
    feature,
    featureInBasic,
    featureInPro,
    featureInPremium,
  } = props.featureDetails;

  return (
    <div className={classes.Row}>
      <div className={classes["Row-feature"]}>{feature}</div>

      <div className={classes["plans-inclusion"]}>
        <div className={classes["feature-available"]}>
          <h5 className={classes.plan}>BASIC</h5>
          {featureInBasic ? <FeatureAvailable /> : <FeatureUnavailable />}
        </div>

        <div className={classes["feature-available"]}>
          <h5 className={classes.plan}>PRO</h5>
          {featureInPro ? <FeatureAvailable /> : <FeatureUnavailable />}
        </div>

        <div className={classes["feature-available"]}>
          <h5 className={classes.plan}>BUISNESS</h5>
          {featureInPremium ? <FeatureAvailable /> : <FeatureUnavailable />}
        </div>
      </div>
    </div>
  );
};

export default Row;
