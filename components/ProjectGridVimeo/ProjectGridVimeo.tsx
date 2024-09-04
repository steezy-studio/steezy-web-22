import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { CursorContext } from "../Cursor/CursorProvider";
import {
  Overlay,
  StyledProjectGridVimeo,
  VimeoWrapper,
} from "./StyledProjectGridVimeo";

interface ProjectGridVimeoProps {
  vimeoId: string | number;
}

const ProjectGridVimeo = ({ vimeoId }: ProjectGridVimeoProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const { setCursorType, setIsCursorDisabled } = useContext(CursorContext);
  const ref = useRef<HTMLDivElement>(null);

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
        onMouseLeave={() => setCursorType("normal")}
      >
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

export default ProjectGridVimeo;
