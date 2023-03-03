import styled from "styled-components";
import { screen } from "../../../src/styles/configuration";
import LocationIcon from "../../assets/grey-location-icon.png";
import PlaneIcon from "../../assets/paper-plane.png";
import CheckIcon from "../../assets/done-icon.png";
import FailIcon from "../../assets/fail-icon.png";

export const TourCard = styled.section`
  background-color: #f6f7fb;
  padding: 50px 20px;
  margin: 0 0 50px 0;
  border-radius: 10px;
  @media ${screen.tb} {
    margin: 50px 0;
  }
`;
export const UnderSliderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0 0 20px;
  @media ${screen.tb} {
    flex-direction: row;
    gap: 30px;
  }
`;
export const TourTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
export const PriceBox = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
export const Price = styled.p`
  font-size: 20px;
  color: #06d6a0;
  font-weight: 400;
`;
export const LocationBox = styled.section`
  font-weight: 500;
  font-size: 20px;
  &:before {
    content: "";
    display: inline-block;
    width: 23px;
    height: 16px;
    margin-right: 10px;
    background: url(${PlaneIcon}) center / contain no-repeat;
  }
`;
export const Location = styled.p`
  color: #999999;
  font-size: 18px;
  font-weight: 300;
`;
export const TourLocation = styled.p`
  color: #999999;
  font-size: 18px;
  &:before {
    content: "";
    display: inline-block;
    width: 23px;
    height: 16px;
    margin-right: 10px;
    background: url(${LocationIcon}) center / contain no-repeat;
  }
`;

export const TourProgram = styled.section`
  margin: 0 15px;
  @media ${screen.tb} {
    margin: 0;
  }
`;
export const ProgramTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 20px 10px;
`;
export const ProgramHeader = styled.div`
  background-color: #f6f7fb;
  padding: 20px 20px;
  color: #06d6a0;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  & > span:before {
    content: "";
    display: inline-block;
    width: 23px;
    height: 16px;
    margin-right: 5px;
    background: url(${LocationIcon}) center / contain no-repeat;
  }
`;
export const ProgramBody = styled.div`
  color: #666666;
  font-size: 16px;
  padding: 0 10px;
  padding: 20px 0 20px 10px;
`;

export const ServiceInPrice = styled.section``;
export const ServiceOutOfPrice = styled.section``;
export const PointsList = styled.ul``;
export const ListElement = styled.li`
  color: #666666;
  font-size: 16px;
  line-height: 1.8;
  &:before {
    content: "";
    display: inline-block;
    width: 23px;
    height: 16px;
    margin-right: 7px;
    background: ${(props) =>
        props.doneIcon ? `url(${CheckIcon})` : `url(${FailIcon})`}
      center / contain no-repeat;
  }
`;
