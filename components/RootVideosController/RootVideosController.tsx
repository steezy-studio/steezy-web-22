"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDidUpdateEffect } from "../../hooks/useDidUpdateEffect";

interface RootVideosControllerProps {
  children: React.ReactNode;
}

interface RootVideosControllerContext {
  setPauseAllVideos: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RootVideosControllerContext =
  React.createContext<RootVideosControllerContext>(null);

const RootVideosController = ({ children }: RootVideosControllerProps) => {
  const [pauseAllVideos, setPauseAllVideos] = useState<boolean | null>(null);
  const allVideoElements = useRef<NodeListOf<HTMLVideoElement>>(null);
  const suspendObserver = useRef<boolean>(false);

  useEffect(() => {
    allVideoElements.current = document.querySelectorAll("video");

    const handleVideos = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (suspendObserver.current) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVideos, {});

    allVideoElements.current.forEach((videoElement) =>
      observer.observe(videoElement)
    );

    return () => observer.disconnect();
  }, [pauseAllVideos]);

  useDidUpdateEffect(() => {
    if (!allVideoElements.current) return;
    if (pauseAllVideos === null) return;

    if (pauseAllVideos === false) {
      allVideoElements.current.forEach((video) => {
        video.play().catch(() => {});
      });
      suspendObserver.current = false;
      return;
    }

    suspendObserver.current = true;
    allVideoElements.current.forEach((video) => {
      video.pause();
    });
  }, [pauseAllVideos]);

  return (
    <RootVideosControllerContext.Provider value={{ setPauseAllVideos }}>
      {children}
    </RootVideosControllerContext.Provider>
  );
};

export default RootVideosController;
