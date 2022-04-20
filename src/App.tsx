import Aos from "aos";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";

import { useEagerConnect } from "./hooks/useEagerConnect";

import { Home } from "./pages";

const App: React.FC = () => {
  useEagerConnect();
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
