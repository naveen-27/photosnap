import React, { useState } from "react";
import PriceCard from "./PriceCard";
import classes from "../Stylesheets/CardContainer.module.css";

const priceByPlan = [
  {
    plan: "BASIC",
    desc:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthly: "19.00",
    yearly: "190.00",
  },
  {
    plan: "PRO",
    desc:
      "More advanced features available. Recommended for photography veterans and professionals.",
    monthly: "39.00",
    yearly: "390.00",
  },
  {
    plan: "BUISNESS",
    desc:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthly: "99.00",
    yearly: "990.00",
  },
];

const CardContainer = () => {
  const [planDuration, setPlanDuration] = useState("monthly");

  const toggleSubscriptionPeriod = (evt) => {
    let duration;

    if (evt.type === "click") {
      duration = planDuration === "monthly" ? "yearly" : "monthly";
    } else if (evt.keyCode === 39 && planDuration === "monthly") {
      duration = "yearly";
    } else if (evt.keyCode === 37 && planDuration === "yearly") {
      duration = "monthly";
    } else if (evt.keyCode === 27) {
      evt.target.blur();
    }

    if (duration !== undefined) setPlanDuration(duration);
  };

  const toggleSide =
    planDuration === "monthly"
      ? classes["toggle-left"]
      : classes["toggle-right"];

  return (
    <div className={classes.CardContainer}>
      <div
        className={classes["duration-toggle"]}
        tabIndex={0}
        onKeyDown={(evt) => toggleSubscriptionPeriod(evt)}
      >
        <div
          className={`${classes.duration} ${
            planDuration === "monthly" && classes.active
          }`}
        >
          Monthly
        </div>

        <div className={classes["toggle-base"]}>
          <div
            className={`${classes.toggle} ${toggleSide}`}
            onClick={(evt) => toggleSubscriptionPeriod(evt)}
          ></div>
        </div>

        <div
          className={`${classes.duration} ${
            planDuration === "yearly" && classes.active
          }`}
        >
          Yearly
        </div>
      </div>

      <div className={classes.Plans}>
        {priceByPlan.map((plan, idx) => (
          <PriceCard
            planDesc={plan}
            duration={planDuration}
            light={idx % 2 === 0}
            key={plan.plan}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
