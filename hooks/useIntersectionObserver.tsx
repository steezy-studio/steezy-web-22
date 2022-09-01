import React, { ReactHTMLElement } from "react";

export function useIntersectionObserver(
  ref: React.MutableRefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref.current, options?.rootMargin]);
}

export const videoCallback = (
  entries: IntersectionObserverEntry[],
  videoRef: React.MutableRefObject<HTMLVideoElement>
) => {
  entries.forEach((entry) => {
    if (!videoRef.current) return;
    entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
  });
};
