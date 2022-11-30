import React, { useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { StyledClassicGrid } from "./Styles/StyledClassicGrid";

interface ClassicGridProps {
  children: JSX.Element[];
}

const ClassicGrid = ({ children }: ClassicGridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const aspectRatios = useRef<number[]>([]);
  const { w } = useWindowSize();

  useEffect(() => {
    for (let item of ref.current.children) {
      const coverEl = item.querySelector("img, video");
      aspectRatios.current.push(coverEl.clientWidth / coverEl.clientHeight);
    }

    ref.current.style.gridTemplateColumns = aspectRatios.current
      .map((ratio) => `${ratio}fr`)
      .join(" ");
    return () => {
      aspectRatios.current = [];
    };
  }, [w]);

  return <StyledClassicGrid ref={ref}>{children}</StyledClassicGrid>;
};

export default ClassicGrid;
