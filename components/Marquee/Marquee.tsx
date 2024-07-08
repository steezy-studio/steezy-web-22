"use client";

import { useDrag } from "@use-gesture/react";
import { useAnimationFrame, useMotionValue } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { MarqueeBlock, MarqueeInner, MarqueeItem, SMarquee } from "./SMarquee";

interface MarqueeProps {
  children: JSX.Element | JSX.Element[];
  stopOnHover?: boolean;
  speed?: number;
  useDragVelocity?: boolean;
  direction?: "left" | "right";
}

const Marquee = ({
  children,
  stopOnHover = false,
  speed = 1 / 5,
  useDragVelocity,
  direction = "left",
}: MarqueeProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState<number>(1);
  const hover = useRef<boolean>(false);
  const dragVelocity = useRef<number>(0);
  const dir = direction === "left" ? -1 : 1;

  const baseX = useMotionValue(0);
  const lenis = useLenis();

  const bind = useDrag((state) => {
    if (!useDragVelocity) return;
    if (state.delta[0] === 0) return;
    dragVelocity.current = state.delta[0] * 0.3;
  }, {});

  useAnimationFrame((t, delta) => {
    if (!innerRef.current) return;
    if (!hover.current) {
      dragVelocity.current *= 0.99;
      // flip velocity, animation looks better
      const velocity = -1 * dir * lenis?.velocity!;
      const innerWidth = innerRef.current.clientWidth;
      const offsetX = dir * (delta * speed) - velocity - dragVelocity.current;
      const _baseX = baseX.get() || 0;

      baseX.set(_baseX + offsetX);
      if (innerWidth * (2 / 3) <= Math.abs(_baseX) || _baseX >= 0) {
        baseX.set(-innerWidth * (1 / 3) - velocity - dragVelocity.current);
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current || !innerRef.current) return;
      const containerWidth = ref.current.clientWidth;
      const innerWidth = innerRef.current.children[0].clientWidth;
      setMultiplier(
        containerWidth > innerWidth ? Math.ceil(containerWidth / innerWidth) : 1
      );
      // Show the marquee after the multiplier is set
      ref.current.style.visibility = "visible";
    };
    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!innerRef.current) return;
    // set initial position to the middle block
    baseX.set(-innerRef.current.clientWidth * (1 / 3));
  }, [multiplier]);

  const clonedChildren = Array(multiplier).fill(children).flat();

  return (
    <SMarquee
      ref={ref}
      {...bind()}
      className={useDragVelocity ? "draggable" : ""}
      onMouseEnter={() => {
        if (stopOnHover) {
          hover.current = true;
        }
      }}
      onMouseLeave={() => {
        if (stopOnHover) {
          hover.current = false;
        }
      }}
      style={{ visibility: "hidden" }}
    >
      <MarqueeInner ref={innerRef} style={{ x: baseX }}>
        <MarqueeBlock>
          {clonedChildren.map((el, i) => (
            <MarqueeItem key={i}>{el}</MarqueeItem>
          ))}
        </MarqueeBlock>
        <MarqueeBlock>
          {clonedChildren.map((el, i) => (
            <MarqueeItem key={i}>{el}</MarqueeItem>
          ))}
        </MarqueeBlock>
        <MarqueeBlock>
          {clonedChildren.map((el, i) => (
            <MarqueeItem key={i}>{el}</MarqueeItem>
          ))}
        </MarqueeBlock>
      </MarqueeInner>
    </SMarquee>
  );
};

export default Marquee;
