import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { HoverProvider } from "../../pages/_app";

interface ProjectGridVimeoProps {
  vimeoId: string | number;
}

const StyledProjectGridVimeo = styled(motion.div)`
  position: relative;
`;

export const VimeoWrapper = styled(Vimeo)`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ProjectGridVimeo = ({ vimeoId }: ProjectGridVimeoProps, ref) => {
  const [isPaused, setIsPaused] = useState(true);
  const { setCursorType, setIsCursorDisabled } = useContext(HoverProvider);

  useIntersectionObserver(
    ref,
    (entries) => {
      entries.forEach((entry) => {
        if (!isPaused) {
          console.log(!entry.isIntersecting);
          setIsPaused(!entry.isIntersecting);
        }
      });
    },
    { threshold: 0 },
    [isPaused]
  );

  return (
    <motion.div ref={ref}>
      <StyledProjectGridVimeo
        onMouseEnter={() => setCursorType("hover")}
        onMouseLeave={() => setCursorType("normal")}>
        {isPaused && <Overlay onClick={() => setIsPaused(false)} />}
        <VimeoWrapper
          video={vimeoId}
          id={String(vimeoId)}
          paused={isPaused}
          responsive
          onPause={(e) => {
            setIsPaused(true);
            setIsCursorDisabled(false);
          }}
          onPlay={(e) => {
            setIsPaused(false);
            setIsCursorDisabled(true);
          }}
        />
      </StyledProjectGridVimeo>
    </motion.div>
  );
};

export default React.forwardRef(ProjectGridVimeo);
