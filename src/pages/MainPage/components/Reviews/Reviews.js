import React from "react";
import { ContentData } from "./Reviews.data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Reviews.css";
import {
  Header,
  HeaderRow,
  Rating,
  Review,
  ReviewContent,
  ReviewDescr,
  ReviewsWrapper,
  ReviewTitle,
  SliderContainer,
  Title,
  UserInfo,
} from "./Reviews.styles";

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

const Reviews = () => {
  const { title, starIcon, reviews } = ContentData;
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
        breakpoint: 1023,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <ReviewsWrapper id='reviews'>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <SliderContainer>
        <Slider {...settings}>
          {reviews.map((review) => {
            return (
              <Review>
                <Header>
                  <HeaderRow>
                    <div>
                      <img src={review.avatar.src} alt={review.avatar.alt} />
                    </div>
                    <UserInfo>
                      <span>{review.name}</span>
                      <p>{review.tourInfo.name}</p>
                      <p>{review.tourInfo.date}</p>
                      <Rating>
                        <div>
                          <img src={starIcon.src} alt={starIcon.alt} />
                        </div>
                        {review.tourInfo.rate}
                      </Rating>
                    </UserInfo>
                  </HeaderRow>
                </Header>
                <ReviewContent>
                  <ReviewTitle
                    dangerouslySetInnerHTML={{ __html: review.title }}
                  />
                  <ReviewDescr
                    dangerouslySetInnerHTML={{ __html: review.descr }}
                  />
                </ReviewContent>
              </Review>
            );
          })}
        </Slider>
      </SliderContainer>
    </ReviewsWrapper>
  );
};

export default Reviews;
