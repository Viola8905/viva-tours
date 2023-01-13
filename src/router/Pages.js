import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Dashboard from "./Dashboard/Dashboard";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default Pages;
