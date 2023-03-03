import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import TourCard from "../../../../components/TourCard";

import { ContentData } from "./ToursList.data";
import {
  ButtonWrapper,
  SliderContainer,
  DetailsBtn,
  HeaderContainer,
  Icon,
  IconContainer,
  IconsList,
  Subtitle,
  Title,
  ToursSection,
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
  const { title, allToursBtn, subtitle, iconsList, toursList } = ContentData;

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
    <div id="hot-tours">
      <ToursSection>
        <HeaderContainer>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <ButtonWrapper>
            <DetailsBtn>
              <Link to="/all-tours">{allToursBtn}</Link>
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
              return <TourCard tour={tour} />;
            })}
          </Slider>
        </SliderContainer>
      </ToursSection>
    </div>
  );
};

export default ToursList;
