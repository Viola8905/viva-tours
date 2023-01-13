import React from "react";
import { Hero, Reviews, SocialMedia, ToursList } from "./components";
import { Container } from "./MainPage.styles";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Container>
        <ToursList />
        <Reviews />
        <SocialMedia />
      </Container>
    </>
  );
};

export default MainPage;
