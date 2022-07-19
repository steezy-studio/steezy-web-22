import React, { useRef } from "react";
import styled from "styled-components";
import { useIntersectionVideoObserver } from "../../hooks/useIntersectionVideoObserver";

interface VideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

const StyledVideo = styled.video`
  width: 100%;
`;

const Video = ({ src }: VideoProps) => {
  const ref = useRef(null);
  useIntersectionVideoObserver(ref);
  return <StyledVideo ref={ref} src={src} autoPlay playsInline muted loop />;
};

export default Video;
