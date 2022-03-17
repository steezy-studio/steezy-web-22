import React from "react";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import { MainHeader } from "../Typo/MainHeader";
import { Caption } from "../Typo/Caption";
import Video from "../Video/Video";
import {
  HeroContent,
  HeroMedia,
  HeroMediaChildren,
  HeroSocials,
  HeroText,
  StyledHero,
} from "./Styles/StyledHero";

interface HeroProps {
  header: string | JSX.Element;
  subHeader: string;
  children?: JSX.Element | JSX.Element[];
}

const Hero = ({ header, subHeader, children }: HeroProps) => {
  return (
    <StyledHero>
      <HeroContent>
        <HeroText>
          <Caption>{subHeader}</Caption>
          <MainHeader>{header}</MainHeader>
        </HeroText>
        <HeroSocials>
          <Instagram />
          <Vimeo />
        </HeroSocials>
      </HeroContent>
      <HeroMedia>
        <Video src={`/videos/hero_loop.mp4`} />
        <HeroMediaChildren>{children}</HeroMediaChildren>
      </HeroMedia>
    </StyledHero>
  );
};

export default Hero;
