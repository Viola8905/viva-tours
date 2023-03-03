import styled from "styled-components";

export const Container = styled.article`
	padding: 10px 0;
`

export const Card = styled.article`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  overflow: hidden;
`;

export const TourImage = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 10px;
`;

export const TourTitle = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export const Date = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

export const DistanceRow = styled.div`
  display: flex;
  gap: 5px;
  color: #118ab2;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const DurationRow = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  line-height: 24px;
  padding: 10px 0;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
`;

export const DetailsBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #06d6a0;
  border-radius: 100px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	& > a {
		color: #ffffff;

	}
`;
