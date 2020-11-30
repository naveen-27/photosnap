import React from "react";
import Row from "./Row";
import classes from "../Stylesheets/PlanComparison.module.css";

const planDetails = [
  {
    feature: "UNLIMITED STORY POSTING",
    featureInBasic: true,
    featureInPro: true,
    featureInPremium: true,
  },
  {
    feature: "UNLIMITED PHOTO UPLOAD",
    featureInBasic: true,
    featureInPro: true,
    featureInPremium: true,
  },
  {
    feature: "EMBEDDING CUSTOM CONTENT",
    featureInBasic: false,
    featureInPro: true,
    featureInPremium: true,
  },
  {
    feature: "CUSTOMIZE METADATA",
    featureInBasic: false,
    featureInPro: true,
    featureInPremium: true,
  },
  {
    feature: "ADVANCED METRICS",
    featureInBasic: false,
    featureInPro: false,
    featureInPremium: true,
  },
  {
    feature: "PHOTO DOWNLOADS",
    featureInBasic: false,
    featureInPro: false,
    featureInPremium: true,
  },
  {
    feature: "SEARCH ENGINE INDEXING",
    featureInBasic: false,
    featureInPro: false,
    featureInPremium: true,
  },
  {
    feature: "CUSTOM ANALYTICS",
    featureInBasic: false,
    featureInPro: false,
    featureInPremium: true,
  },
];

const PlanComparison = () => {
  return (
    <div className={classes["Plan-comparison"]}>
      <h1 className={classes["Plan-heading"]}>COMPARE</h1>

      <div className={classes.table}>
        {planDetails.map((feature, idx) => (
          <Row featureDetails={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PlanComparison;
