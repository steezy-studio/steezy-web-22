"use client";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { easing } from "../../helpers/animationConfig";
import { colors } from "../../helpers/consts";
import { RootVideosControllerContext } from "../RootVideosController/RootVideosController";
import { SPageTransition } from "./SPageTransition";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { asPath } = useRouter();
  const { setPauseAllVideos } = useContext(RootVideosControllerContext);

  return (
    <AnimatePresence
      mode={"sync"}
      onExitComplete={() => setPauseAllVideos(false)}
    >
      <SPageTransition
        key={asPath}
        initial={"initial"}
        onAnimationStart={() => setPauseAllVideos(true)}
        animate={"animate"}
        exit={"exit"}
        style={{ zIndex: 9991 }}
        variants={{
          initial: {
            y: `100%`,
            backgroundColor: colors.white,
          },
          animate: {
            y: `0%`,
            zIndex: 9991,
            backgroundColor: colors.white,
            transitionEnd: {
              zIndex: 1,
            },
          },
          exit: {
            y: `0%`,
            backgroundColor: colors.gray500,
          },
        }}
        transition={{ ease: easing, duration: 1 }}
      >
        {children}
      </SPageTransition>
    </AnimatePresence>
  );
};

export default PageTransition;
