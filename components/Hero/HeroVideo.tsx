import Vimeo from "@u-wave/react-vimeo";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionVideoObserver";
import { HoverProvider } from "../../pages/_app";
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
  const { setCursorHover } = useContext(HoverProvider);
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
          <StyledHeroVideo
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}>
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
