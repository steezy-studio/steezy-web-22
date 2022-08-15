import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface CursorProps {}

const StyledCursor = styled.div`
  position: absolute;
  z-index: 99999999999999999999999999;
  img {
    width: 10px;
    height: 10px;
  }
`;

const Cursor = ({}: CursorProps) => {
  const delay = 3;
  const endX = useRef(0);
  const endY = useRef(0);
  const _x = useRef(0);
  const _y = useRef(0);
  const requestRef = useRef(null);
  const dot = useRef(null);
  const dotOutline = useRef(null);

  const mouseMoveEvent = (e) => {
    endX.current = e.clientX;
    endY.current = e.clientY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    dotOutline.current && (dotOutline.current.style.top = _y.current + "px");
    dotOutline.current && (dotOutline.current.style.left = _x.current + "px");
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
    <StyledCursor ref={dot}>
      <img src='/icons/cursor.svg' alt='' />
    </StyledCursor>
  );
};

export default Cursor;
