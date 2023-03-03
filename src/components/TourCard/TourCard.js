import React from "react";
import { Link } from "react-router-dom";
import { ContentData } from "../../pages/MainPage/components/ToursList/ToursList.data";
import {
  ButtonWrapper,
  Card,
  Container,
  ContentWrapper,
  Date,
  Description,
  DetailsBtn,
  DistanceRow,
  DurationRow,
  Price,
  Row,
  TourImage,
  TourTitle,
} from "./TourCard.styles";

const TourCard = ({ tour }) => {
  const { tourCardIcons, btnTxt } = ContentData;

  return (
    <Container>
      <Card key={tour.id}>
        <TourImage>
          <img
            src={tour.image.src}
            alt={tour.image.alt}
            style={{ width: "100%" }}
          />
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
            <div style={{ alignSelf: "center" }}>
              <img
                src={tourCardIcons.arrow.src}
                alt={tourCardIcons.arrow.alt}
              />
            </div>
            {tour.distance.to}
          </DistanceRow>
          <DurationRow>
            <img src={tourCardIcons.clock.src} alt={tourCardIcons.clock.alt} />
            {tour.duration.txt}
            <b>{tour.duration.time}</b>
          </DurationRow>
          <Description dangerouslySetInnerHTML={{ __html: tour.descr }} />
          <ButtonWrapper>
            <DetailsBtn>
              <Link to={`/tours/${tour.id}`}>{btnTxt}</Link>
            </DetailsBtn>
          </ButtonWrapper>
        </ContentWrapper>
      </Card>
    </Container>
  );
};

export default TourCard;
