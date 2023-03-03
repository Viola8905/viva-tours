import React from "react";
import TourCard from "../../components/TourCard";
import { ContentData } from "../MainPage/components/ToursList/ToursList.data";
import { Container } from "../MainPage/MainPage.styles";

import {
  CardsWrapper,
  CardWrapper,
  FilterLayout,
  TopSection,
} from "./AllToursPage.styles";

const AllToursPage = () => {
  const { toursList } = ContentData;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopSection>
        <FilterLayout>Одноденні Тури</FilterLayout>
      </TopSection>
      <Container>
        <CardsWrapper>
          {toursList.map((tour) => {
            return (
              <CardWrapper>
                <TourCard tour={tour} />
              </CardWrapper>
            );
          })}
        </CardsWrapper>
      </Container>
    </>
  );
};

export default AllToursPage;
