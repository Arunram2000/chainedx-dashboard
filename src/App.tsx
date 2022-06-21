import Aos from "aos";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Admin, Home } from "./pages";

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
