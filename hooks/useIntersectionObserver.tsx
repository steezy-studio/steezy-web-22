import React from "react";

export function useIntersectionObserver(
  ref: React.MutableRefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  deps: any[] = []
) {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref.current, options?.rootMargin, ...deps]);
}

export const videoCallback = (
  entries: IntersectionObserverEntry[],
  videoRef: React.MutableRefObject<HTMLVideoElement>
) => {
  entries.forEach((entry) => {
    if (!videoRef.current) return;
    if (entry.isIntersecting) {
      videoRef.current.paused &&
        videoRef.current.play().catch((e) => console.error(e));
    } else {
      !videoRef.current.paused && videoRef.current.pause();
    }
  });
};
