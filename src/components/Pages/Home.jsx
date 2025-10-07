import React from "react";
import Slider from "../Slider/Slider";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import FundRaise from "../FundRaise/FundRaise";
import Work from "../Work/Work";
import Story from "../Work/Story";
import TopLead from "../Work/TopLead";
import Volunter from "../Work/Volunter";
const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Hero />
      <FundRaise />
      <Work />
      <Story />
      <TopLead />
      <Volunter />

      
    </div>
  );
};

export default Home;
