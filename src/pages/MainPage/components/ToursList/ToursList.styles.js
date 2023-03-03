import styled from "styled-components";
import { screen } from "../../../../styles/configuration";

export const ToursSection = styled.section`
  padding: 30px 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 38px;
  @media ${screen.tb} {
    font-size: 48px;
  }
`;

export const SliderContainer = styled.div`
  padding: 10px 30px;
`;

export const Subtitle = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  padding: 20px 0;
`;

export const IconsList = styled.ul`
  padding: 0 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const IconContainer = styled.li`
  width: 50px;
  height: 50px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
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
