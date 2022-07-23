import React, { useState } from "react";
import { Asset } from "../../generated/types";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import Img from "../Img/Img";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import HeroVideo from "./HeroVideo";
import {
  HeroFooterChildren,
  HeroMedia,
  HeroSocials,
  HeroText,
  StyledHero,
} from "./Styles/StyledHero";

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
  const { w } = useWindowSize();

  return (
    <StyledHero>
      <HeroText>
        {subHeader && <Micro className='sub-header'>{subHeader}</Micro>}
        <Large>{header(openDialog, setOpenDialog)}</Large>
        {perex && <Micro className={`perex`}>{perex}</Micro>}
      </HeroText>
      <HeroSocials>
        <Instagram />
        <Vimeo />
      </HeroSocials>
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
            objectFit={"cover"}
            layout={w <= device.phone ? "fill" : "responsive"}
          />
        )}
      </HeroMedia>
      {children && <HeroFooterChildren>{children}</HeroFooterChildren>}
    </StyledHero>
  );
};

export default Hero;
