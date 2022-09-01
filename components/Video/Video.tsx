import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionObserver";

interface VideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

const StyledVideo = styled(motion.video)`
  width: 100%;
`;

const Video = ({ src }: VideoProps, ref) => {
  useIntersectionObserver(ref, (entries) => videoCallback(entries, ref));
  return <StyledVideo ref={ref} src={src} autoPlay playsInline muted loop />;
};

export default React.forwardRef(Video);
