import React from "react";
import { ContentData } from "./ToursList.data";
import {
  ButtonWrapper,
  Card,
  CardsRow,
  ContentWrapper,
  Date,
  Description,
  DetailsBtn,
  DistanceRow,
  DurationRow,
  HeaderContainer,
  Icon,
  IconContainer,
  IconsList,
  Price,
  Row,
  Subtitle,
  Title,
  TourImage,
  ToursSection,
  TourTitle,
} from "./ToursList.styles";

const ToursList = () => {
  const { title, subtitle, iconsList, tourCardIcons, btnTxt, toursList } =
    ContentData;
  return (
    <ToursSection>
      <HeaderContainer>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <IconsList>
          {iconsList.map((item) => {
            return (
              <IconContainer key={item.id}>
                <Icon src={item.src} />
              </IconContainer>
            );
          })}
        </IconsList>
      </HeaderContainer>
      <CardsRow>
        {toursList.map((tour) => {
          return (
            <Card key={tour.id}>
              <TourImage>
                <img src={tour.image.src} alt={tour.image.alt} />
              </TourImage>
              <ContentWrapper>
                <TourTitle dangerouslySetInnerHTML={{ __html: tour.title }} />
                <Row>
                  <Price>{tour.price}</Price>
                  <Date>{tour.period}</Date>
                </Row>
                <DistanceRow>
                  <img
                    src={tourCardIcons.location.src}
                    alt={tourCardIcons.location.alt}
                  />
                  {tour.distance.from}
                  <div>
                    <img
                      src={tourCardIcons.arrow.src}
                      alt={tourCardIcons.arrow.alt}
                    />
                  </div>
                  {tour.distance.to}
                </DistanceRow>
                <DurationRow>
                  <img
                    src={tourCardIcons.clock.src}
                    alt={tourCardIcons.clock.alt}
                  />
                  {tour.duration.txt}
                  <b>{tour.duration.time}</b>
                </DurationRow>
                <Description dangerouslySetInnerHTML={{ __html: tour.descr }} />
                <ButtonWrapper>
                  <DetailsBtn>{btnTxt}</DetailsBtn>
                </ButtonWrapper>
              </ContentWrapper>
            </Card>
          );
        })}
      </CardsRow>
    </ToursSection>
  );
};

export default ToursList;
