import React from "react";
import { ContentData } from "./NavBar.data";

import {
  Container,
  ImageContainer,
  LinksList,
  Navbar,
  NavBarLinks,
  Link,
  LPVersion,
	MBVersion,
	MbNavbar,
	MbImageContainer,
	MbNavBarLinks,
	MbLinksList,
	MbLink,
} from "./NavBar.styles";

const NavBar = () => {
  const { menuLinks, logo } = ContentData;
	const [menuToggle, setMenuToggle] = React.useState(false)

  return (
    <Container>
      <LPVersion>
        <Navbar>
          <ImageContainer>
            <img src={logo.src} alt={logo.alt} />
          </ImageContainer>
          <NavBarLinks>
            <LinksList>
              {menuLinks.map((link) => {
                return <Link key={link.id}>{link.name}</Link>;
              })}
            </LinksList>
          </NavBarLinks>
        </Navbar>
      </LPVersion>
      <MBVersion>
        <MbNavbar isOpen={menuToggle}>
          <div onClick={() => setMenuToggle(!menuToggle)}>Закрити</div>
          <MbImageContainer>
            <img src={logo.src} alt={logo.alt} />
          </MbImageContainer>
          <MbNavBarLinks>
            <MbLinksList>
              {menuLinks.map((link) => {
                return <MbLink key={link.id}>{link.name}</MbLink>;
              })}
            </MbLinksList>
          </MbNavBarLinks>
        </MbNavbar>
      </MBVersion>
    </Container>
  );
};

export default NavBar;
