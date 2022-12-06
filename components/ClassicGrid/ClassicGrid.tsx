import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useWindowSize } from "../../hooks/useWindowSize";
import { StyledClassicGrid } from "./Styles/StyledClassicGrid";

interface ClassicGridProps {
  children: JSX.Element[];
}

const ClassicGrid = ({ children }: ClassicGridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const aspectRatios = useRef<number[]>([]);
  const { w } = useWindowSize();
  // FIXME: ugly as fuck. there is a bug, that grid items covers are not the same height on the first render.
  // after the update it will calculate correctly the dimensions (ratio).
  // for loop run three times and video grid item has both height and width dimensions 0
  useIntersectionObserver(ref, (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        raf();
      }
    });
  });

  const updateRatio = () => {
    ref.current.style.gridTemplateColumns = aspectRatios.current
      .map((ratio) => `${ratio}fr`)
      .join(" ");
  };

  const handlePlay = (el: HTMLVideoElement) => {
    aspectRatios.current.push(el.videoWidth / el.videoHeight);
    updateRatio();
  };

  function raf() {
    aspectRatios.current = [];

    for (let item of ref.current.children) {
      const coverEl = item.querySelector("img, video");

      if (coverEl.tagName === "VIDEO") {
        console.log(coverEl.tagName);
        item
          .querySelector("video")
          //@ts-ignore
          .addEventListener("play", handlePlay(coverEl));
      } else {
        aspectRatios.current.push(coverEl.clientWidth / coverEl.clientHeight);
        updateRatio();
      }
    }
  }

  useEffect(() => {
    raf();
    return () => {
      aspectRatios.current = [];
    };
  }, [w]);

  return <StyledClassicGrid ref={ref}>{children}</StyledClassicGrid>;
};

export default ClassicGrid;
