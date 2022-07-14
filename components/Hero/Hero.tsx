import React, { useState } from "react";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import HeroVideo from "./HeroVideo";
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
  header: (
    openDialog: boolean,
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
  ) => string | JSX.Element;
  subHeader?: string;
  perex?: string;
  children?: JSX.Element | JSX.Element[];
  asset: Asset;
}

const Hero = ({ header, subHeader, children, asset, perex }: HeroProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <StyledHero>
      <HeroContent>
        <HeroText>
          {subHeader && <Micro className='sub-header'>{subHeader}</Micro>}
          <Large>{header(openDialog, setOpenDialog)}</Large>
          {perex && <Micro className={`perex`}>{perex}</Micro>}
        </HeroText>
        <HeroSocials>
          <Instagram />
          <Vimeo />
        </HeroSocials>
      </HeroContent>
      <HeroMedia>
        {asset._type === "Video" ? (
          <HeroVideo
            src={asset.url}
            open={openDialog}
            onOpenChange={() => setOpenDialog((prev) => !prev)}
          />
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
