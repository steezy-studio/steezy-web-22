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
import { ImageProps } from "next/image";

interface HeroProps {
  header: string | JSX.Element;
  subHeader?: string;
  perex?: string;
  children?: JSX.Element | JSX.Element[];
  asset: Asset;
}

const Hero = ({ header, subHeader, children, asset, perex }: HeroProps) => {
  return (
    <StyledHero>
      <HeroContent>
        <HeroText>
          {subHeader && <Caption className='sub-header'>{subHeader}</Caption>}
          <MainHeader>{header}</MainHeader>
          {perex && <Caption className={`perex`}>{perex}</Caption>}
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
            layout={children ? "responsive" : "fill"}
          />
        )}
        {children && <HeroFooterChildren>{children}</HeroFooterChildren>}
      </HeroMedia>
    </StyledHero>
  );
};

export default Hero;
