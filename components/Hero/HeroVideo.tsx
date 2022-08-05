import Vimeo from "@u-wave/react-vimeo";
import React, { useRef, useState } from "react";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionVideoObserver";
import Dialog from "../Dialog/Dialog";
import {
  PlayButton,
  Loop,
  Showreel,
  StyledHeroVideo,
} from "./Styles/StyledHeroVideo";

interface VideoProps {
  src: string;
  open?: boolean;
  onOpenChange?: () => void;
}

const HeroVideo = ({ src, open, onOpenChange }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useIntersectionObserver(videoRef, (entries) =>
    videoCallback(entries, videoRef)
  );

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
        content={
          <Showreel>
            <Vimeo autoplay video={"663954804"} responsive />
          </Showreel>
        }
        trigger={
          <StyledHeroVideo>
            <PlayButton />
            <Loop
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3 }}
              ref={videoRef}
              src={src}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            />
          </StyledHeroVideo>
        }
      />
    </>
  );
};

export default HeroVideo;
