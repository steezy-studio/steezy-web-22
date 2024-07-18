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
    const html = document.querySelector("html");

    function handleTouchStart(e: TouchEvent) {
      initialX = e.changedTouches[0].clientX;
      lenis?.stop();
    }

    function handleTouchEnd(e: TouchEvent) {
      if (initialX === null) return;
      const swipeAmoumt = Math.abs(e.changedTouches[0].clientX - initialX);
      html.style.overflow = "scroll";
      if (swipeAmoumt < 100) return;
      const direction = e.changedTouches[0].clientX - initialX > 0 ? -1 : 1;
      initialX === null;
      lenis?.start();
      cb(direction);
    }

    ref.current?.addEventListener("touchstart", handleTouchStart);
    ref.current?.addEventListener("touchend", handleTouchEnd);
    return () => {
      ref.current?.removeEventListener("touchend", handleTouchStart);
      ref.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTouchDevice, lenis, ...deps]);
}
