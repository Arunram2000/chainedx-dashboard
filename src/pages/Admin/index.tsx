import React from "react";
import { Route, Routes } from "react-router-dom";

import "./Admin.scss";
import Faqs from "./Faqs";
import Videos from "./Videos";
import Dashboard from "./Dashboard";
import { Header } from "../../components";

const Admin: React.FC = () => {
  return (
    <div className="admin">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
};

export default Admin;
