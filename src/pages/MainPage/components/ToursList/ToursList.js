import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { ContentData } from "./ToursList.data";
import {
  ButtonWrapper,
  Card,
  SliderContainer,
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

const ToursList = () => {
  const {
    title,
    allToursBtn,
    subtitle,
    iconsList,
    tourCardIcons,
    btnTxt,
    toursList,
  } = ContentData;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div id="hot-tours">
      <ToursSection>
        <HeaderContainer>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <ButtonWrapper>
            <DetailsBtn>
              <Link to='/all-tours'>{allToursBtn}</Link>
            </DetailsBtn>
          </ButtonWrapper>
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
        <SliderContainer>
          <Slider {...settings}>
            {toursList.map((tour) => {
              return (
                <Card key={tour.id}>
                  <TourImage>
                    <img
                      src={tour.image.src}
                      alt={tour.image.alt}
                      style={{ width: "100%" }}
                    />
                  </TourImage>
                  <ContentWrapper>
                    <TourTitle
                      dangerouslySetInnerHTML={{ __html: tour.title }}
                    />
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
                      <img
                        src={tourCardIcons.clock.src}
                        alt={tourCardIcons.clock.alt}
                      />
                      {tour.duration.txt}
                      <b>{tour.duration.time}</b>
                    </DurationRow>
                    <Description
                      dangerouslySetInnerHTML={{ __html: tour.descr }}
                    />
                    <ButtonWrapper>
                      <DetailsBtn>{btnTxt}</DetailsBtn>
                    </ButtonWrapper>
                  </ContentWrapper>
                </Card>
              );
            })}
          </Slider>
        </SliderContainer>
      </ToursSection>
    </div>
  );
};

export default ToursList;
