import React from "react";
import { useParams } from "react-router-dom";
import { ContentData } from "../MainPage/components/ToursList/ToursList.data";
import { Container } from "../MainPage/MainPage.styles";
import Slider from "react-slick";
import "./SingleTourPage.css";

import {
  ListElement,
  Location,
  LocationBox,
  PointsList,
  Price,
  PriceBox,
  ProgramBody,
  ProgramHeader,
  ProgramTitle,
  ServiceInPrice,
  ServiceOutOfPrice,
  TourCard,
  TourLocation,
  TourProgram,
  TourTitle,
  UnderSliderRow,
} from "./SingleTourPage.styles";

const SingleTourPage = () => {
  const tourId = useParams().id;
  const { toursList } = ContentData;
  const tour = toursList.find((item) => item.id === tourId);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={ContentData.sliderArrows.nextArr.src}
        alt={ContentData.sliderArrows.nextArr.alt}
        className={className}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={ContentData.sliderArrows.prevArr.src}
        alt={ContentData.sliderArrows.prevArr.alt}
        className={className}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <TourCard>
        <TourTitle>
          {tour.title} {tour.startDate}
        </TourTitle>
        <TourLocation>{tour.distance.from}</TourLocation>
        <div style={{ padding: "10px" }}>
          <Slider {...settings}>
            {tour.images.map((image) => {
              return (
                <div style={{ padding: "10px 50px" }}>
                  <img src={image} style={{ width: "100%" }} />
                </div>
              );
            })}
          </Slider>
        </div>
        <UnderSliderRow>
          <PriceBox>
            Ціна
            <Price>{tour.price}</Price>
          </PriceBox>
          <LocationBox>
            Місце збору
            <Location>Ужгород, готель Закарпаття</Location>
          </LocationBox>
        </UnderSliderRow>
      </TourCard>

      <TourProgram>
        <ProgramTitle>Програма туру:</ProgramTitle>
        <ProgramHeader>
          <span>{tour.startDate}</span>
        </ProgramHeader>
        <ProgramBody>
          {tour.tourProgram.map((item) => {
            return <p>{item}</p>;
          })}
        </ProgramBody>
      </TourProgram>
      <hr />
      <ServiceInPrice>
        <ProgramTitle>{tour.serviceInPrice.title}</ProgramTitle>
        <PointsList>
          {tour.serviceInPrice.list.map((item) => {
            return <ListElement doneIcon>{item}</ListElement>;
          })}
        </PointsList>
        <hr />
      </ServiceInPrice>
      <ServiceOutOfPrice>
        <ProgramTitle>{tour.serviceOutOfPrice.title}</ProgramTitle>
        <PointsList>
          {tour.serviceOutOfPrice.list.map((item) => {
            return <ListElement failIcon>{item}</ListElement>;
          })}
        </PointsList>
        <hr />
      </ServiceOutOfPrice>
    </Container>
  );
};

export default SingleTourPage;
