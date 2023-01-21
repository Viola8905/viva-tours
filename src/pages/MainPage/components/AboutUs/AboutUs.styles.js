import styled from "styled-components";
import { screen } from "../../../../styles/configuration";

export const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 50px 0;
  background-color: #ace8d8;
  color: black;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 38px;
  @media ${screen.tb} {
    font-size: 48px;
  }
`;

export const Text = styled.div`
  font-size: 15px;
  width: 90%;
  text-align: center;
  @media ${screen.lp} {
    width: 70%;
    font-size: 18px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
`;

export const DetailsBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: black;
  border-radius: 100px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff; ;
`;
