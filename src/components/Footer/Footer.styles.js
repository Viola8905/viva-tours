import styled from "styled-components";
import { screen } from "../../styles/configuration";
import PhoneIcon from "../../assets/phone.png";
import MailIcon from "../../assets/mailIcon.png";

export const ContactUsSection = styled.section`
  background-color: #f7f3f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${screen.lp} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Block1 = styled.div`
  text-align: center;

  @media ${screen.lp} {
    text-align: start;
  }
`;
export const Block2 = styled.div`
  text-align: center;
  @media ${screen.lp} {
    text-align: start;
  }
`;

export const BlockTitle = styled.h2`
  color: #999999;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media ${screen.lp} {
    flex-direction: row;
    gap: 40px;
  }
`;

export const Data = styled.div`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  &:hover {
    color: rgba(6, 214, 160, 1);
  }
  &:before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    padding-top: 29px;
    margin-right: 10px;
    background: ${(props) =>
        props.phone ? `url(${PhoneIcon})` : `url(${MailIcon})`}
      center / contain no-repeat;
  }
`;
export const SMRow = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  @media ${screen.lp} {
    justify-content: flex-end;
  }
`;

export const LogoLink = styled.li``;
export const Link = styled.a``;

export const FooterSection = styled.section`
  padding: 30px 0;
  background-color: #252525;
`;
export const RowOfColumns = styled.div`
  display: flex;
	justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 0 20px;
  @media ${screen.tb} {
    gap: 100px;
  }
`;
export const CompanyDescr = styled.div`
  color: #9ca2b1;
  font-size: 16px;
  font-weight: 400;
  @media ${screen.tb} {
    flex: 0 0 30%;
  }
`;

export const RowOfLinks = styled.div``;

export const Title = styled.div`
  padding-bottom: 20px;
  color: #ffff;
  font-size: 18px;
  font-weight: 500;
`;

export const PageLink = styled.div`
  color: #9ca2b1;
  font-size: 18px;
  &:hover {
    color: rgba(6, 214, 160, 1);
  }
`;
export const BottomSection = styled.section`
  text-align: center;
  background-color: #202020;
  color: #9ca2b1;
  padding: 10px 0;
`;
