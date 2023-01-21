import styled from "styled-components";

export const ReviewsWrapper = styled.section`
  padding: 40px 0;
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
`;

export const Review = styled.article`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 15px;
  background: #06d6a0;
`;
export const HeaderRow = styled.div`
  display: flex;
  gap: 10px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffff;
  letter-spacing: 0.1em;
  & > span {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  & > p {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const Rating = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
export const ReviewContent = styled.div`
  padding: 15px;
`;

export const ReviewTitle = styled.h1``;
export const ReviewDescr = styled.div`
  padding-top: 10px;
`;

export const SliderContainer = styled.div`
	padding: 10px 30px;
`