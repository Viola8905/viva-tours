import React from "react";
import { ContentData } from "./NavBar.data";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { scrollToElement } from "../../utils/scrollToElement/scrollToElement";

import { ImageContainer, NavBarLink } from "./NavBar.styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { menuLinks, logo } = ContentData;

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <ImageContainer>
            <img src={logo.src} alt={logo.alt} />
          </ImageContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuLinks.map((link) => {
              return (
                <NavBarLink
                  key={link.id}
                  onClick={() => scrollToElement(link.scrollId)}
                >
                  <Link to={`/#${link.scrollId}`}>{link.name}</Link>
                </NavBarLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
