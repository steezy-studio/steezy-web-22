import React, { useState } from "react";
import { Asset } from "../../generated/types";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import Animation from "../Animation/Animation";
import Img from "../Img/Img";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import HeroVideo from "./HeroVideo";
import {
  HeroFooterChildren,
  HeroMedia,
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
      <Animation type={"fadeFromBottom"} delay={0.7} style={{ zIndex: 100 }}>
        <HeroText>
          {subHeader && (
            <Micro data-scroll data-scroll-speed='3' className='sub-header'>
              {subHeader}
            </Micro>
          )}
          <Large data-scroll data-scroll-speed='2'>
            {header(openDialog, setOpenDialog)}
          </Large>
          {perex && (
            <Micro data-scroll data-scroll-speed='1.5' className={`perex`}>
              {perex}
            </Micro>
          )}
        </HeroText>
      </Animation>

      <Animation type={"fadeIn"} delay={0.3} style={{ zIndex: 99 }}>
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
      </Animation>
      <Animation type={"fadeIn"} delay={0.5}>
        {children && <HeroFooterChildren>{children}</HeroFooterChildren>}
      </Animation>
    </StyledHero>
  );
};

export default Hero;
