"use client";

import {
  MutableRefObject,
  ReactNode,
  Ref,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { StyledScrollAnimation } from "./Styles/StyledScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;
  offset?: number[];
  disableIntersectionObserver?: boolean;
  animate?: (currentPos: number, totalDistance: number) => any;
  className?: string;
}

export type ScrollYProgress = {
  progress: number;
  totalDistance: number;
  currentPos: number;
};

export const ScrollAnimationContext = createContext<{
  animationElRef: Ref<HTMLDivElement>;
  scrollYProgress: ScrollYProgress;
  dryScrollYProgress: MutableRefObject<ScrollYProgress>;
}>(null);

const ScrollAnimation = ({
  children,
  offset = [0, 0],
  disableIntersectionObserver = false,
  animate,
  className,
}: ScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationElRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useRef<boolean>(false);
  const dryScrollYProgress = useRef<ScrollYProgress>({
    currentPos: 0,
    progress: 0,
    totalDistance: 0,
  });
  const [scrollYProgress, setScrollYProgress] = useState({
    progress: 0,
    totalDistance: 0,
    currentPos: 0,
  });
  const rafId = useRef<number>(0);

  useIntersectionObserver(
    containerRef,
    (entries) => {
      entries.forEach((entry) => {
        isIntersecting.current = entry.isIntersecting;
      });
    },
    {
      rootMargin: `${-1 * offset[0] * 100}% 0% ${-1 * offset[1] * 100}% 0%`,
    }
  );

  useEffect(() => {
    function raf() {
      if (!isIntersecting.current && !disableIntersectionObserver) {
        rafId.current = requestAnimationFrame(raf);
        return;
      }

      const scrollY = window.scrollY;
      const animElHeight = containerRef.current?.clientHeight;
      const viewportHeight = window.innerHeight;

      const animElOffsetFromTop = containerRef.current?.offsetTop;
      const animElOffsetFromBottom = animElOffsetFromTop + animElHeight;

      const topBound = viewportHeight * offset[0];
      const bottomBound = viewportHeight * offset[1];
      const scrolledDistance = scrollY + viewportHeight;

      const currentPos = scrolledDistance - (animElOffsetFromTop + bottomBound);
      const totalDistance =
        animElOffsetFromBottom +
        viewportHeight -
        (animElOffsetFromTop + bottomBound) -
        topBound;
      const progress = currentPos / totalDistance;

      if (progress < 0 || progress > 1) {
        rafId.current = requestAnimationFrame(raf);
        return;
      }
      const payload = { progress, currentPos, totalDistance };

      if (animate) {
        const style = animate(currentPos, totalDistance);
        Object.assign(animationElRef.current.style, style);
      } else {
        setScrollYProgress(payload);
      }
      dryScrollYProgress.current = payload;

      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <ScrollAnimationContext.Provider
      value={{ animationElRef, scrollYProgress, dryScrollYProgress }}>
      <StyledScrollAnimation ref={containerRef} className={className}>
        {children}
      </StyledScrollAnimation>
    </ScrollAnimationContext.Provider>
  );
};

export default ScrollAnimation;
