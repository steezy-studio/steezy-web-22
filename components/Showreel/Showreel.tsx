import { useState } from "react";
import { Asset } from "../../generated/preprTypes";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import ShowreelVideo from "./ShowreelVideo";
import { ShowreelCover, StyledShowreel } from "./Styles/StyledShowreel";

interface ShowreelProps {
  asset: Asset;
}

const Showreel = ({ asset }: ShowreelProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <StyledShowreel>
      <RevealAnimation delay={0.3} style={{ zIndex: 99 }}>
        {asset._type === "Video" ? (
          <ShowreelVideo
            src={asset.url}
            open={openDialog}
            onOpenChange={() => setOpenDialog((prev) => !prev)}
          />
        ) : (
          <ShowreelCover
            src={asset.url}
            width={asset.width}
            height={asset.height}
            placeholder={`blur`}
            blurDataURL={asset.url}
            alt={asset.description || "Hero image"}
          />
        )}
      </RevealAnimation>
    </StyledShowreel>
  );
};

export default Showreel;
