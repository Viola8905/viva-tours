import React from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils";
import { AboutUs, Hero, Reviews, SocialMedia, ToursList } from "./components";
import { Container } from "./MainPage.styles";

const MainPage = () => {
  const location = useLocation();
  const elementId = location.hash.slice(1);

  React.useEffect(() => {
    scrollToElement(elementId);
  });

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
