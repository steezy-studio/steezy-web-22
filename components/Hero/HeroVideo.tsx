import React, { useRef, useState } from "react";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionVideoObserver";
import Dialog from "../Dialog/Dialog";
import {
  Cursor,
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
            <video
              src={src}
              autoPlay={true}
              controls
              playsInline={true}
              muted={true}
              loop={true}
            />
          </Showreel>
        }
        trigger={
          <StyledHeroVideo
            onMouseMove={handleMouseMove}
            onMouseLeave={() =>
              setCursor((prev) => ({ ...prev, show: false }))
            }>
            <Cursor
              animate={cursor.show ? "show" : "hide"}
              variants={{
                show: { scale: 1, opacity: 1 },
                hide: { scale: 0, opacity: 0 },
              }}
              src='/icons/play-cursor.svg'
              style={{
                left: `${cursor.coords[0]}px`,
                top: `${cursor.coords[1]}px`,
              }}
            />
            <Loop
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
