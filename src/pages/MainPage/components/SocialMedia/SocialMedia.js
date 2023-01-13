import React from "react";
import { ContentData } from "./SocialMedia.data";

import {
  LogoLink,
  SMRow,
  SocialMediaSection,
  Title,
} from "./SocialMedia.styles";

const SocialMedia = () => {
  const { title, socialMedias } = ContentData;
  return (
    <SocialMediaSection>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <SMRow>
        {socialMedias.map((logo) => {
          return (
            <LogoLink>
              <img src={logo.src} alt={logo.alt} />
            </LogoLink>
          );
        })}
      </SMRow>
    </SocialMediaSection>
  );
};

export default SocialMedia;
