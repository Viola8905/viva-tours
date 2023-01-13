import styled, { css } from "styled-components";
import { screen } from "../../styles/configuration";

export const Container = styled.div`
  @media ${screen.md} {
    width: 1100px;
		margin: 0 auto;
  }
`;
