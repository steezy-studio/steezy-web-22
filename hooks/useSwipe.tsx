"use client";

import { useLenis } from "lenis/react";
import { MutableRefObject, useEffect } from "react";
import isTouchDevice from "../helpers/isTouchDevice";

interface UseSwipeProps {
  ref: MutableRefObject<HTMLDivElement>;
  cb: (direction: number) => void;
  deps?: any[];
}

export function useSwipe({ ref, cb, deps = [] }: UseSwipeProps) {
  const lenis = useLenis();
  useEffect(() => {
    if (!isTouchDevice()) return;
    let initialX: number | null = null;
    let initialY: number | null = null;

    function handleTouchMove(e: TouchEvent) {
      if (
        Math.abs(e.changedTouches[0].clientY - initialY) <
        Math.abs(e.changedTouches[0].clientX - initialX)
      ) {
        lenis?.stop();
      }
    }

    function handleTouchStart(e: TouchEvent) {
      initialX = e.changedTouches[0].clientX;
      initialY = e.changedTouches[0].clientY;
    }

    function handleTouchEnd(e: TouchEvent) {
      lenis?.start();
      if (initialX === null) return;
      const swipeAmoumt = Math.abs(e.changedTouches[0].clientX - initialX);
      if (swipeAmoumt < 100) return;
      const direction = e.changedTouches[0].clientX - initialX > 0 ? -1 : 1;
      initialX === null;
      cb(direction);
    }

    ref.current?.addEventListener("touchstart", handleTouchStart);
    ref.current?.addEventListener("touchmove", handleTouchMove);
    ref.current?.addEventListener("touchend", handleTouchEnd);
    return () => {
      ref.current?.removeEventListener("touchend", handleTouchStart);
      ref.current?.removeEventListener("touchmove", handleTouchMove);
      ref.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTouchDevice, lenis, ...deps]);
}
