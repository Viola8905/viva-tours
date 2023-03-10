import styled from "styled-components";
import { screen } from "../../../src/styles/configuration";
import budapest from "../../assets/budapest.jpg";

export const TopSection = styled.section`
  height: 250px;
  width: 100%;
  background: url(${budapest}) center/cover no-repeat;
`;

export const FilterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #ffff;
  font-weight: 700;
  backdrop-filter: blur(3px);
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.55);
  letter-spacing: 0.1em;
  height: 100%;
  width: 100%;
`;

export const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
`;

export const CardWrapper = styled.div`
  flex: 0 0 100%;
  padding: 0 30px;
  @media ${screen.tb} {
    flex: 0 0 40%;
    padding: 0;
  }
  @media ${screen.md} {
    flex: 0 0 30%;
  }
`;
