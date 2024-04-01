import { useState } from "react";
import { Asset } from "../../generated/preprTypes";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import HeroVideo from "./HeroVideo";
import { HeroCover, StyledHero } from "./Styles/StyledHero";

interface HeroProps {
  asset: Asset;
}

const Hero = ({ asset }: HeroProps) => {
  const [openDialog, setOpenDialog] = useState(false);

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
          <HeroCover
            src={asset.url}
            width={asset.width}
            height={asset.height}
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
