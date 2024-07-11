"use client";

import { useLenis } from "lenis/react";
import { useContext, useState } from "react";
import { CursorContext } from "../Cursor/CursorProvider";
import Arrow from "../Icons/Arrow";
import { SScrollTopButton } from "./SScrollTopButton";

interface ScrollTopButtonProps {}

const ScrollTopButton = ({}: ScrollTopButtonProps) => {
  const [visible, setvisible] = useState<boolean>(false);
  const { setCursorType } = useContext(CursorContext);
  const lenis = useLenis();
  const handleClick = () => {
    lenis.scrollTo(0);
  };
  lenis?.on("scroll", () => {
    setvisible(lenis.scroll > 1500);
  });

  return (
    <SScrollTopButton
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
      className={visible ? "visible" : ""}
      onClick={handleClick}
    >
      <Arrow fill='black' />
    </SScrollTopButton>
  );
};

export default ScrollTopButton;
