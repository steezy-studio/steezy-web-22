import { useState } from "react";
import { Asset } from "../../generated/types";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import Animation from "../Animation/Animation";
import Img from "../Img/Img";
import HeroVideo from "./HeroVideo";
import { StyledHero } from "./Styles/StyledHero";
import RevealAnimation from "../RevealAnimation/RevealAnimation";

interface HeroProps {
  asset: Asset;
}

const Hero = ({ asset }: HeroProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { w } = useWindowSize();
  const isPhone = w <= device.phone;

  return (
    <StyledHero>
      <RevealAnimation delay={0.3} style={{ zIndex: 99 }}>
        {asset._type === "Video" ? (
          <HeroVideo
            src={asset.url}
            open={openDialog}
            onOpenChange={() => setOpenDialog((prev) => !prev)}
          />
        ) : (
          <Img
            src={asset.url}
            width={isPhone ? undefined : asset.width}
            height={isPhone ? undefined : asset.height}
            placeholder={`blur`}
            blurDataURL={asset.url}
            alt={asset.description}
          />
        )}
      </RevealAnimation>
    </StyledHero>
  );
};

export default Hero;
