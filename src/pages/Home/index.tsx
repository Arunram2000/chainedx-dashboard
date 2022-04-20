import React from "react";

import "./Home.scss";

import About from "./components/About";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Roadmap from "./components/Roadmap";
import Stats from "./components/Stats";
import Community from "./components/Community";
import ContactUs from "./components/ContactUs";
import Tokensale from "./components/Tokensale";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <About />
      <HowItWorks />
      <Tokensale />
      <Roadmap />
      <Community />
      <ContactUs />
    </div>
  );
};

export default Home;
