import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { OutletContainer, Wrapper } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <Wrapper>
      <NavBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;
