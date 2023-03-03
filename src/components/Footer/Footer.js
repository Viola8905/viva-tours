import React from "react";
import { Container } from "../../pages/MainPage/MainPage.styles";
import { ContentData } from "../../pages/MainPage/components/SocialMedia/SocialMedia.data";
import {
  Block1,
  Block2,
  BlockTitle,
  BottomSection,
  CompanyDescr,
  ContactUsSection,
  Content,
  Data,
  FooterSection,
  Link,
  LogoLink,
  PageLink,
  Row,
  RowOfColumns,
  RowOfLinks,
  SMRow,
  Title,
} from "./Footer.styles";

const Footer = () => {
  const { socialMedias } = ContentData;
  return (
    <div>
      <ContactUsSection>
        <Container>
          <Row>
            <Block1>
              <BlockTitle>Зв'яжіться з нами</BlockTitle>
              <Content>
                <Data phone>+48 730 050 547</Data>
                <Data email>vivaTours@gmail.com</Data>
              </Content>
            </Block1>
            <Block2>
              <BlockTitle>Ми в соц-мережах </BlockTitle>
              <SMRow>
                {socialMedias.map((logo) => {
                  return (
                    <LogoLink>
                      <Link>
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          style={{ width: "30px" }}
                        />
                      </Link>
                    </LogoLink>
                  );
                })}
              </SMRow>
            </Block2>
          </Row>
        </Container>
      </ContactUsSection>
      <FooterSection>
        <Container>
          <RowOfColumns>
            <CompanyDescr>
              Мы — польский туристический оператор, работаем с начала 2017 года.
              За более чем 5 лет работы организовали 1000+ туров из разных
              городов Польши. Нашими услугами воспользовались более 50 000
              человек.
            </CompanyDescr>
            <RowOfLinks>
              <Title>Тури із Ужгорода</Title>
              <PageLink>Одноденні Тури</PageLink>
              <PageLink>Всі Тури</PageLink>
            </RowOfLinks>
            <RowOfLinks>
              <Title>Viva Tours</Title>
              <PageLink>Головна</PageLink>
              <PageLink>Про нас</PageLink>
              <PageLink>Відгуки</PageLink>
            </RowOfLinks>
          </RowOfColumns>
        </Container>
      </FooterSection>
      <BottomSection>© 2023. Всі права захищені.</BottomSection>
    </div>
  );
};

export default Footer;
