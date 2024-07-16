"use client";

import React, { useContext } from "react";
import { CursorContext } from "../Cursor/CursorProvider";
import Marquee from "../Marquee/Marquee";
import { SGallery } from "./SGallery";

interface GalleryProps {
  children: React.ReactNode;
}

const Gallery = ({ children }: GalleryProps) => {
  const { setCursorType } = useContext(CursorContext);
  return (
    <SGallery
      onMouseEnter={() => setCursorType("swipe")}
      onMouseLeave={() => setCursorType("normal")}
    >
      <Marquee useDragVelocity speedMultiplier={0.1} stopOnHover>
        {children}
      </Marquee>
    </SGallery>
  );
};

export default Gallery;
