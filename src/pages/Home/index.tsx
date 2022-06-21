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
import { Footer, Header } from "../../components";
import Faqs from "./components/Faqs";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Hero />
        <Stats />
        <About />
        <HowItWorks />
        <Tokensale />
        <Roadmap />
        <Community />
        <Faqs />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
