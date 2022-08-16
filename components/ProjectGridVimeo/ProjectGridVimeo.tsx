import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import { colors } from "../../helpers/consts";
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
  const { setCursorHover, setIsCursorDisabled } = useContext(HoverProvider);

  return (
    <motion.div ref={ref}>
      <StyledProjectGridVimeo
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}>
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
