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
  const [cursor, setCursor] = useState({ coords: [0, 0], show: false });
  const videoRef = useRef<HTMLVideoElement>(null);
  useIntersectionObserver(videoRef, (entries) =>
    videoCallback(entries, videoRef)
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingBox.x;
    const y = e.clientY - boundingBox.y;
    const padding = 40;

    setCursor((prev) => ({
      show:
        x >= padding &&
        videoRef.current.clientWidth - padding >= x &&
        y >= padding &&
        videoRef.current.clientHeight - padding >= y,
      coords: [x, y],
    }));
  };

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
            onMouseMove={handleMouseMove}
            onMouseLeave={() =>
              setCursor((prev) => ({ ...prev, show: false }))
            }>
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
