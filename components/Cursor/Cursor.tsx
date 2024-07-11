import { motion } from "framer-motion";
import { MutableRefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../../helpers/consts";

export type CursorTypes = "normal" | "left" | "right" | "hover" | "swipe";

interface CursorProps {
  isCursorDisabled?: boolean;
  cursorType: CursorTypes;
  cursorRef: MutableRefObject<HTMLDivElement>;
}

const StyledCursor = styled(motion.div)`
  position: fixed;
  mix-blend-mode: difference;
  z-index: 9999;
  pointer-events: none;
  div {
    width: 10px;
    height: 10px;
    background-color: ${colors.white};
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
    svg {
      transform-origin: center;
    }
  }
  /* smartphones, touchscreens */
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

const Cursor = ({ isCursorDisabled, cursorType, cursorRef }: CursorProps) => {
  const x = useRef(-100);
  const y = useRef(-100);

  const mouseMoveEvent = (e) => {
    x.current = e.clientX;
    y.current = e.clientY;

    cursorRef.current.style.top = y.current + "px";
    cursorRef.current.style.left = x.current + "px";
    cursorRef.current.dataset.y = String(y.current);
    cursorRef.current.dataset.x = String(x.current);
  };

  useEffect(() => {
    cursorRef.current.style.top = y.current + "px";
    cursorRef.current.style.left = x.current + "px";
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  return (
    <StyledCursor ref={cursorRef}>
      <motion.div
        animate={{
          rotate:
            cursorType === "hover" || cursorType === "swipe"
              ? 45
              : cursorType === "left"
              ? 180 + 45
              : cursorType === "right"
              ? 45
              : 0,
          scale:
            cursorType === "hover"
              ? 1.5
              : cursorType === "left" ||
                cursorType === "right" ||
                cursorType === "swipe"
              ? 7
              : 1,
          opacity: isCursorDisabled ? 0 : 1,
        }}
      >
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          vectorEffect='non-scaling-stroke'
          style={{ transform: "rotate(-45deg)" }}
          animate={{
            opacity:
              cursorType === "left" ||
              cursorType === "right" ||
              cursorType === "swipe"
                ? 1
                : 0,
          }}
        >
          {!(cursorType === "swipe") ? (
            <g>
              <line
                y1='10'
                x2='20'
                y2='10'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
                strokeWidth='0.5'
              />
              <polyline
                points='10 20 20 10 10 0'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
                strokeWidth='0.5'
              />
            </g>
          ) : (
            <g>
              <line
                x1='0'
                y1='10'
                x2='20'
                y2='10'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
                strokeWidth='.5'
              />
              <polyline
                points='15 15 20 10 15 5'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
                strokeWidth='.5'
              />
              <polyline
                points='5 5 0 10 5 15'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
                strokeWidth='.5'
              />
            </g>
          )}
        </motion.svg>
      </motion.div>
    </StyledCursor>
  );
};

export default Cursor;
