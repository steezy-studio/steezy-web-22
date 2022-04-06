import React from "react";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import { MainHeader } from "../Typo/MainHeader";
import { Caption } from "../Typo/Caption";
import Video from "../Video/Video";
import {
  HeroContent,
  HeroMedia,
  HeroFooterChildren,
  HeroSocials,
  HeroText,
  StyledHero,
} from "./Styles/StyledHero";
import Img from "../Img/Img";
import { Asset } from "../../generated/types";

interface HeroProps {
  header: string | JSX.Element;
  subHeader: string;
  children?: JSX.Element | JSX.Element[];
  asset: Asset;
}

const Hero = ({ header, subHeader, children, asset }: HeroProps) => {
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
        {asset._type === "Video" ? (
          <Video src={asset.url} />
        ) : (
          <Img
            src={asset.url}
            width={asset.width}
            height={asset.height}
            placeholder={`blur`}
            blurDataURL={asset.url}
            layout={"responsive"}
          />
        )}
        <HeroFooterChildren>{children}</HeroFooterChildren>
      </HeroMedia>
    </StyledHero>
  );
};

export default Hero;
