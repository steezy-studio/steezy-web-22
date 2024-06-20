import React, { ReactHTMLElement } from "react";

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
  async function playVideo() {
    try {
      await videoRef.current.play();
    } catch (err) {}
  }

  entries.forEach((entry) => {
    if (!videoRef.current) return;
    videoRef.current.onloadeddata = () => {
      entry.isIntersecting ? playVideo() : videoRef.current?.pause();
    };
  });
};
