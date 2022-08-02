import React, { ReactHTMLElement } from "react";

export function useIntersectionObserver(
  videoRef: React.MutableRefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  React.useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, []);
}

export const videoCallback = (
  entries: IntersectionObserverEntry[],
  videoRef: React.MutableRefObject<HTMLVideoElement>
) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
  });
};
