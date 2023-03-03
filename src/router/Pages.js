import React from "react";
import { Routes, Route } from "react-router-dom";
import AllToursPage from "../pages/AllToursPage";
import MainPage from "../pages/MainPage";
import SingleTourPage from "../pages/SingleTourPage";
import Dashboard from "./Dashboard/Dashboard";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}>
        <Route index element={<MainPage />} />
        <Route path="/all-tours" element={<AllToursPage />} />
        <Route path="/tours/:id" element={<SingleTourPage/>} />
      </Route>
    </Routes>
  );
};

export default Pages;
