"use client";

import React, { useContext } from "react";
import useTouchDevice from "../../hooks/useTouchDevice";
import { CursorContext } from "../Cursor/CursorProvider";
import Marquee from "../Marquee/Marquee";
import { SGallery } from "./SGallery";

interface GalleryProps {
  children: React.ReactNode;
}

const Gallery = ({ children }: GalleryProps) => {
  const { setCursorType } = useContext(CursorContext);
  const isTouchDevice = useTouchDevice();
  return (
    <SGallery
      onMouseEnter={() => setCursorType("swipe")}
      onMouseLeave={() => setCursorType("normal")}
    >
      <Marquee
        useDragVelocity
        scrollVelocityMultiplier={0.4}
        useScrollVelocity={isTouchDevice ? false : true}
        dragVelocityMultiplier={isTouchDevice ? 2.5 : 1}
        speedMultiplier={isTouchDevice ? 0 : 0.1}
        stopOnHover
      >
        {children}
      </Marquee>
    </SGallery>
  );
};

export default Gallery;
