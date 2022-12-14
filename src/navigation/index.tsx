import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../features/header/Header";
import UI from "./UI";
import SignIn from "./SignIn";
import DashboardNavigation from "./dashboard";
import Sidebar from "../features/sidebar/Sidebar";
import Landing from "./Landing";

function AppNavigation() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flex: 1, maxWidth: '100%' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={null} />
          <Route path="ui" element={<UI />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="dashboard/*" element={<DashboardNavigation />} />
        </Routes>
      </div>
    </div>
);
}

export default AppNavigation;
