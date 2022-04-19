import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";

import { useEagerConnect } from "./hooks/useEagerConnect";

import { Home } from "./pages";

const App: React.FC = () => {
  useEagerConnect();
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
