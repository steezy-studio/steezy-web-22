import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface VideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  className?: string;
}

const StyledVideo = styled(motion.video)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.bRad};
`;

const Video = ({ src, className, poster }: VideoProps, ref) => {
  const defRef = useRef<HTMLVideoElement>(null);
  const activeRef = ref ? ref : defRef;

  const [shouldLoad, setShouldLoad] = useState(false);

  useIntersectionObserver(
    activeRef,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        }
      });
    },
    { rootMargin: "200px" }
  );

  return (
    <StyledVideo
      ref={activeRef}
      className={className}
      src={shouldLoad ? src : undefined}
      autoPlay
      playsInline
      muted
      loop
    />
  );
};

export default React.forwardRef(Video);
