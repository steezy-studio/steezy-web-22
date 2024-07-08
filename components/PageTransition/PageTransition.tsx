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
        onAnimationStart={() => setPauseAllVideos(true)}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={{
          initial: {
            y: `100%`,
            backgroundColor: colors.white,
          },
          animate: {
            y: `0%`,
            backgroundColor: colors.white,
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
