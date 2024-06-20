"use client";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { SPageTransition } from "./SPageTransition";
import { easing } from "../../helpers/animationConfig";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence mode={"sync"}>
      <SPageTransition
        key={asPath}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={{
          initial: {
            y: `100%`,
          },
          animate: {
            y: `0%`,
          },
          exit: {
            y: `0%`,
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
