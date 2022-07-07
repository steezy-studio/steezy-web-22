import React, { useRef, useState } from "react";
import Dialog from "../Dialog/Dialog";
import { MainHeader } from "../Typo/MainHeader";
import { Cursor, Loop, Showreel, StyledVideo } from "./Styles/StyledVideo";
import Vimeo from "@u-wave/react-vimeo";

interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  const [ratio, setRatio] = useState(0);
  const [dialog, toggleDialog] = useState(0);
  const [cursor, setCursor] = useState({ coords: [0, 0], show: false });
  const videoRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    setRatio(videoRef.current.videoHeight / videoRef.current.videoWidth);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    setCursor((prev) => ({
      ...prev,
      coords: [e.clientX - boundingBox.x, e.clientY - boundingBox.y],
    }));
  };

  return (
    <>
      <StyledVideo
        ratio={ratio}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursor((prev) => ({ ...prev, show: false }))}
        onMouseEnter={() => setCursor((prev) => ({ ...prev, show: true }))}>
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
        <Dialog
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
            <Loop
              ref={videoRef}
              src={src}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            />
          }
        />
      </StyledVideo>
    </>
  );
};

export default Video;
