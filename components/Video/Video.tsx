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
  > {
  className?: string;
}

const StyledVideo = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.bRad};
`;

const Video = ({ src, className }: VideoProps, ref) => {
  const defRef = useRef<HTMLVideoElement>(null);
  const activeRef = ref ? ref : defRef;
  useIntersectionObserver(activeRef, (entries) =>
    videoCallback(entries, activeRef)
  );

  return (
    <StyledVideo
      ref={activeRef}
      className={className}
      src={src}
      autoPlay
      playsInline
      muted
      loop
    />
  );
};

export default React.forwardRef(Video);
