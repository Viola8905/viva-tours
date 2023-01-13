import React from "react";
import { ContentData } from "./Reviews.data";

import {
  Header,
  HeaderRow,
  Rating,
  Review,
  ReviewContent,
  ReviewDescr,
  ReviewsRow,
  ReviewsWrapper,
  ReviewTitle,
  Title,
  UserInfo,
} from "./Reviews.styles";

const Reviews = () => {
  const { title, starIcon, reviews } = ContentData;

  return (
    <ReviewsWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <ReviewsRow>
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
      </ReviewsRow>
    </ReviewsWrapper>
  );
};

export default Reviews;
