import styled from "styled-components";
import { screen } from "../../../../styles/configuration";

export const SocialMediaSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	padding: 30px 0;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 38px;
  line-height: 58px;
  padding: 0 0 20px 0;
  @media ${screen.tb} {
    font-size: 48px;
  }
`;

export const SMRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const LogoLink = styled.a``;
