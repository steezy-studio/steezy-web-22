import React from "react";

export const useIntersectionVideoObserver = (
  videoRef: React.MutableRefObject<HTMLVideoElement>
) => {
  React.useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting
            ? videoRef.current.play()
            : videoRef.current.pause();
        });
      });
      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, []);
};
