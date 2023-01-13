import styled, { css } from "styled-components";
import { screen } from "../../../../styles/configuration";
import budapest from "../../../../assets/budapest.jpg";

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
`;
export const PageBackground = styled.div`
  position: relative;
  background: url(${budapest}) center/cover no-repeat;
  height: 100%;
`;

export const Container = styled.section`
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: black;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3px;
  backdrop-filter: blur(10px);
  height: 50%;
  width: 100%;
  color: white;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.55);
  letter-spacing: 0.1em;
  margin: 0 0 20px 0;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.55);
`;
export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media ${screen.tb} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const BtnTextWrapper = styled.div`
  align-self: center;
`;

export const LinkButton = styled.button`
  gap: 5px;
  display: flex;
  margin: 20px 0 0 0;
  border-radius: 100px;
  padding: 10px 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
	color: white;
	font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${screen.tb} {
    padding: 15px 20px;
  }

  ${({ light }) =>
    light &&
    css`
      background: linear-gradient(270deg, #ef476f 0%, #ffd166 100%);
    `}
  ${({ dark }) =>
    dark &&
    css`
      background: linear-gradient(270deg, #073b4c 0%, #118ab2 69.27%);
    `}
`;
