import React from "react";
import { scrollToElement } from "../../../../utils";
import { ContentData } from "./Hero.data";
import {
  BtnTextWrapper,
  ButtonRow,
  Container,
  LinkButton,
  PageBackground,
  Section,
  Subtitle,
  Title,
  Wrapper,
} from "./Hero.styles";

const Hero = () => {
  const { title, subtitle, btn1, btn2 } = ContentData;

  return (
    <Wrapper id='hero'>
      <PageBackground>
        <Container>
          <Section>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <ButtonRow>
              <LinkButton light onClick={() => scrollToElement("hot-tours")}>
                <img src={btn1.img.src} alt={btn1.img.alt} />
                <BtnTextWrapper>{btn1.txt}</BtnTextWrapper>
              </LinkButton>
              <LinkButton dark>
                <img src={btn2.img.src} alt={btn2.img.alt} />
                <BtnTextWrapper>{btn2.txt}</BtnTextWrapper>
              </LinkButton>
            </ButtonRow>
          </Section>
        </Container>
      </PageBackground>
    </Wrapper>
  );
};

export default Hero;
