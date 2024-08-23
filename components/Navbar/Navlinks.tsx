"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import strings from "../../data/strings";
import { DisableScroll } from "../../pagestyles/DisableScroll";
import Divider from "../Divider/Divider";
import NavLink from "./NavLink";
import { NavbarContext } from "./NavbarControls";
import { SNavLinks, Vega, VegaW, navLinksVariants } from "./Styles/SNavlinks";

interface NavlinksProps {}

const Navlinks = ({}: NavlinksProps) => {
  const timeout = useRef<NodeJS.Timeout>(null);
  const router = useRouter();
  const { isOpen: _isOpen } = useContext(NavbarContext);

  const isOpen = _isOpen(router.pathname);
  const [showVega, setshowVega] = useState<boolean>(false);
  const wasVegaDisplayed = useRef<boolean>(false);
  const navLinksDelay = 0.1;

  useEffect(() => {
    if (wasVegaDisplayed.current || !isOpen) return;
    timeout.current = setTimeout(() => {
      setshowVega(true);
      wasVegaDisplayed.current = true;
    }, 8000);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [isOpen]);

  return (
    <>
      <DisableScroll />
      <SNavLinks
        initial={false}
        animate={isOpen ? "animate" : "exit"}
        style={{
          transformOrigin: "100% 0%",
          pointerEvents: isOpen ? "all" : "none",
        }}
        transition={{
          type: "tween",
          ease: [0.65, 0.05, 0.36, 1],
          duration: 0.6,
        }}
        variants={navLinksVariants}
        aria-hidden={!isOpen}
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
        {strings.navData.map(
          ({ link, name, iconName, activePaths, cover }, i) => {
            const isActive =
              router.asPath.includes(link) ||
              activePaths.some((path) => router.asPath.includes(path));
            const delay = (i + 1) * navLinksDelay;

            return (
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                }}
                transition={{ delay: delay }}
                key={i}
              >
                {i === 0 && <Divider />}
                <NavLink active={isActive} href={link} cover={cover}>
                  {name}
                </NavLink>
                <Divider />
              </motion.div>
            );
          }
        )}
      </SNavLinks>
    </>
  );
};

export default Navlinks;
