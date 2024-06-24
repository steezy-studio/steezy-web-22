"use client";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import strings from "../../data/strings";
import { DisableScroll } from "../../pagestyles/DisableScroll";
import Divider from "../Divider/Divider";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import Portal from "../Portal/Portal";
import NavLink from "./NavLink";
import { NavbarContext } from "./NavbarControls";
import {
  PhoneDecoration,
  SNavLinks,
  Vega,
  VegaW,
  dividerAnimation,
  navLinksVariants,
} from "./Styles/SNavlinks";

interface NavlinksProps {}

const Navlinks = ({}: NavlinksProps) => {
  const timeout = useRef<NodeJS.Timeout>(null);
  const { areNavlinksOpen, setAreNavlinksOpen } = useContext(NavbarContext);
  const [showVega, setshowVega] = useState<boolean>(false);
  const wasVegaDisplayed = useRef<boolean>(false);
  const router = useRouter();
  const navLinksDelay = 0.1;

  useEffect(() => {
    if (wasVegaDisplayed.current || !areNavlinksOpen) return;
    timeout.current = setTimeout(() => {
      setshowVega(true);
      wasVegaDisplayed.current = true;
    }, 8000);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [areNavlinksOpen]);

  return (
    <Portal selector='body'>
      <DisableScroll />
      <SNavLinks
        initial={false}
        animate={areNavlinksOpen ? "animate" : "exit"}
        style={{
          transformOrigin: "100% 0%",
          pointerEvents: areNavlinksOpen ? "all" : "none",
        }}
        transition={{
          type: "tween",
          ease: [0.65, 0.05, 0.36, 1],
          duration: 0.6,
        }}
        variants={navLinksVariants}
      >
        <AnimatePresence>
          {showVega && (
            <VegaW
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() =>
                setTimeout(() => setshowVega(false), 5000)
              }
            >
              <Vega
                src={"/images/vega_opt.gif"}
                width={490}
                height={476}
                alt='Vincent vega'
              />
            </VegaW>
          )}
        </AnimatePresence>
        <Divider {...dividerAnimation} />
        {strings.navData.map(({ link, name, iconName, activePaths }, i) => {
          const isActive =
            router.asPath.includes(link) ||
            activePaths.some((path) => router.asPath.includes(path));

          const delay = (i + 1) * navLinksDelay;
          return (
            <Fragment key={i}>
              <NavLink
                delay={delay}
                active={isActive}
                href={link}
                onClick={() => {
                  setAreNavlinksOpen(false);
                }}
                iconSrc={`/icons/${iconName}`}
              >
                {name}
              </NavLink>

              <Divider {...dividerAnimation} delay={(i + 1) * 0.7} />
            </Fragment>
          );
        })}
        <PhoneDecoration
          variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
        >
          <Instagram />
          <Vimeo />
        </PhoneDecoration>
      </SNavLinks>
    </Portal>
  );
};

export default Navlinks;
