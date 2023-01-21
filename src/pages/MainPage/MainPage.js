import React from "react";
import { AboutUs, Hero, Reviews, SocialMedia, ToursList } from "./components";
import { Container } from "./MainPage.styles";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Container>
        <ToursList />
      </Container>
      <AboutUs />
      <Container>
        <Reviews />
        <SocialMedia />
      </Container>
    </>
  );
};

export default MainPage;
