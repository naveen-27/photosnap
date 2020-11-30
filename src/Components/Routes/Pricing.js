import React from "react";
import PricingHero from "../PricingHero";
import CardContainer from "../CardContainer";
import PlanComparison from "../PlanComparison";
import Banner from "../Banner";

const Pricing = () => {
  document.title = "Photosnap - Pricing";

  return (
    <>
      <PricingHero />
      <CardContainer />
      <PlanComparison />
      <Banner />
    </>
  );
};

export default Pricing;
