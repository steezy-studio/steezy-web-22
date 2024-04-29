"use client";

import { MutableRefObject, useEffect } from "react";
import useIsTouchDevice from "./useIsTouchDevice";

interface UseSwipeProps {
  ref: MutableRefObject<HTMLDivElement>;
  cb: (direction: number) => void;
}

export function useSwipe({ ref, cb }: UseSwipeProps) {
  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    if (!isTouchDevice) return;
    let initialX: number | null = null;
    const html = document.querySelector("body");

    function handleTouchStart(e: TouchEvent) {
      initialX = e.changedTouches[0].clientX;
      html.style.overflow = "hidden";
    }

    function handleTouchEnd(e: TouchEvent) {
      if (initialX === null) return;
      const swipeAmoumt = Math.abs(e.changedTouches[0].clientX - initialX);
      html.style.overflow = "scroll";
      if (swipeAmoumt < 100) return;
      const direction = e.changedTouches[0].clientX - initialX > 0 ? -1 : 1;
      initialX === null;
      cb(direction);
    }

    ref.current?.addEventListener("touchstart", handleTouchStart);
    ref.current?.addEventListener("touchend", handleTouchEnd);
    return () => {
      ref.current?.removeEventListener("touchend", handleTouchStart);
      ref.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTouchDevice]);
}
