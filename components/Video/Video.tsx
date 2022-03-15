import React, { useRef, useState } from "react";
import { StyledVideo } from "./Styles/StyledVideo";

interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  const [ratio, setRatio] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    setRatio(videoRef.current.videoHeight / videoRef.current.videoWidth);
  }, []);

  return (
    <StyledVideo ratio={ratio}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      />
    </StyledVideo>
  );
};

export default Video;
