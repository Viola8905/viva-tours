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
  OtherInfoSection,
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

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
                  <img src={image} style={{ width: "100%" }} alt="image"/>
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
      <OtherInfoSection>
        <ProgramTitle>Забронювати тур:</ProgramTitle>
        <p>
          Бронь місць - <span>+48 730 050 547</span> (вайбер, телеграм, ватсап)
        </p>
        <p>Місце збору - Ужгород, готель Закарпаття</p>
        {/* <IframeWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659.4793017211229!2d22.29279552947947!3d48.61142804583526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919a8f76fd4c3%3A0xd51c1ac80f40b6c0!2z0JjQvdGC0YPRgNC40YHRguKAk9CX0LDQutCw0YDQv9Cw0YLRjNC1!5e0!3m2!1sru!2spl!4v1677875243695!5m2!1sru!2spl"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </IframeWrapper> */}
        <hr />
      </OtherInfoSection>
    </Container>
  );
};

export default SingleTourPage;
