import events from "events";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled, { createGlobalStyle } from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";
import Fixed from "../Fixed/Fixed";

interface CursorProps {
  hover?: boolean;
  isCursorDisabled?: boolean;
}

const StyledCursor = styled(motion.div)`
  position: absolute;
  mix-blend-mode: difference;
  z-index: 999999999999999999999999999999999999999999999999;
  pointer-events: none;
  div {
    width: 10px;
    height: 10px;
    background-color: ${colors.white};
    transform: translate(-50%, -50%);
  }
  ${breakpoint.tabletLandscape} {
    display: none;
  }
`;

const Cursor = ({ hover, isCursorDisabled }: CursorProps) => {
  const x = useRef(0);
  const y = useRef(0);
  const requestRef = useRef(null);
  const cursorRef = useRef(null);

  const mouseMoveEvent = (e) => {
    x.current = e.clientX;
    y.current = e.clientY;

    cursorRef.current.style.top = y.current + "px";
    cursorRef.current.style.left = x.current + "px";
  };

  const animateDotOutline = () => {
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    animateDotOutline();
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      cancelAnimationFrame(requestRef.current);
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  return (
    <StyledCursor ref={cursorRef}>
      <motion.div
        animate={{
          rotate: hover ? 45 : 0,
          scale: hover ? 1.5 : 1,
          opacity: isCursorDisabled ? 0 : 1,
        }}
      />
    </StyledCursor>
  );
};

export default Cursor;
