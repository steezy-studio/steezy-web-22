"use client";

import { useDrag } from "@use-gesture/react";
import { useAnimationFrame, useMotionValue } from "framer-motion";
import { useLenis } from "lenis/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { MarqueeBlock, MarqueeInner, MarqueeItem, SMarquee } from "./SMarquee";

interface MarqueeProps {
  children: ReactNode;
  stopOnHover?: boolean;
  speedMultiplier?: number;
  useDragVelocity?: boolean;
  useScrollVelocity?: boolean;
  direction?: "left" | "right";
}

const Marquee = ({
  children,
  stopOnHover = false,
  speedMultiplier = 1 / 5,
  useDragVelocity,
  useScrollVelocity = true,
  direction = "left",
}: MarqueeProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState<number>(1);
  const hover = useRef<boolean>(false);
  const swipeVelocity = useRef<number>(0);
  const dir = direction === "left" ? -1 : 1;
  const fixedSpeed = 10;
  const velocity = useRef<number>(fixedSpeed * speedMultiplier);
  const friction = useRef<number>(0);
  const inView = useRef<boolean>(false);

  const baseX = useMotionValue(0);
  const lenis = useLenis();

  const bind = useDrag((state) => {
    if (!useDragVelocity) return;
    if (state.delta[0] === 0) return;
    swipeVelocity.current = state.delta[0] * 0.3;
  }, {});

  useAnimationFrame((t, d) => {
    if (!innerRef.current) return;
    if (!inView.current) return;
    const innerWidth = innerRef.current.clientWidth;
    // flip velocity, directions matches the scroll direction
    const scrollVelocity = useScrollVelocity ? -1 * dir * lenis?.velocity! : 0;

    if (hover.current) {
      friction.current -= 0.05;
      friction.current = Math.max(0, friction.current);
    } else {
      friction.current += 0.05;
      friction.current = Math.min(1, friction.current);
    }
    velocity.current = fixedSpeed * friction.current * speedMultiplier;
    swipeVelocity.current *= 0.98;
    const offsetX =
      dir * velocity.current - scrollVelocity - swipeVelocity.current;
    let _baseX = baseX.get() || 0;

    baseX.set(_baseX + offsetX);
    if (innerWidth * (2 / 3) <= Math.abs(_baseX) || _baseX >= 0) {
      baseX.set(-innerWidth * (1 / 3) - scrollVelocity - swipeVelocity.current);
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
    const handlePresence = (visible: boolean) => {
      inView.current = visible;
    };

    const observer = new IntersectionObserver(
      ([entry]) => handlePresence(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(ref.current!);
    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
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
