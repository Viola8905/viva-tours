import React from 'react';
import { ContentData } from './AboutUs.data';
import { AboutUsSection, ButtonWrapper, DetailsBtn, Text, Title } from './AboutUs.styles';

const AboutUs = () => {
	const {title, text, btnText} = ContentData

	return (
    <AboutUsSection id='about-us'>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Text dangerouslySetInnerHTML={{ __html: text }} />
      <ButtonWrapper>
        <DetailsBtn>{btnText}</DetailsBtn>
      </ButtonWrapper>
    </AboutUsSection>
  );
};

export default AboutUs;