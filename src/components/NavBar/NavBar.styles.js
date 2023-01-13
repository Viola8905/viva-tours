import styled from "styled-components";
import { screen } from "../../styles/configuration";

export const Container = styled.div`
  @media ${screen.md} {
    margin: 0 auto;
    width: 1100px;
    overflow: hidden;
  }
`;
export const LPVersion = styled.div`
  display: none;
  @media ${screen.lp} {
    display: block;
  }
`;
export const Navbar = styled.section`
  @media ${screen.lp} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div``;

export const NavBarLinks = styled.nav``;
export const LinksList = styled.ul`
  @media ${screen.lp} {
    display: flex;
    padding: 0;
    margin: 0;
  }
`;
export const Link = styled.li`
  @media ${screen.lp} {
    height: 56px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: rgba(6, 214, 160, 1);
    &:hover {
      background-color: rgba(6, 214, 160, 1);
      color: white;
    }
  }
`;

















export const MBVersion = styled.div`
  display: block;
  @media ${screen.lp} {
    display: none;
  }
	position: relative;
`;

export const MbNavbar = styled.section`
  width: 100%;
  display: flex;


  flex-direction: column;
  /* position: fixed;
  /* left: -100%; */
 
  transition: 0.5s; 
`;

export const MbImageContainer = styled.div``;

export const MbNavBarLinks = styled.nav``;
export const MbLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: 10000000000;
   position: fixed;
  left: -100%;

  
`;
export const MbLink = styled.li`
  height: 56px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: rgba(6, 214, 160, 1);
  &:hover {
    background-color: rgba(6, 214, 160, 1);
    color: white;
  }
`;
