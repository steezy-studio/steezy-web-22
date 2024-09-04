import { MotionProps, motion } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  HiddenText,
  StyledAnimateTextRows,
  Text,
} from "./StyledAnimateTextRows";

interface AnimateTextRowsProps {
  children: string;
  motionProps?: (
    i: number,
    ref: MutableRefObject<HTMLDivElement>
  ) => MotionProps;
}

const AnimateTextRows = ({ children, motionProps }: AnimateTextRowsProps) => {
  const [rows, setrows] = useState<string[][]>(null);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { w } = useWindowSize();

  useEffect(() => {
    const words = ref.current.innerText.split(" ");
    let sentence = "";
    for (const word of words) {
      sentence += `<span>${word}</span> `;
    }
    ref.current.innerHTML = sentence;
    const spans = ref.current.children;

    let rows = {};
    for (let i = 0; i < spans.length; i++) {
      const key = String(spans[i].getBoundingClientRect().top);
      const textContent = spans[i].textContent;
      if (rows[key]) {
        rows[key].push(textContent);
      } else {
        rows[key] = [textContent];
      }
    }
    setrows(Object.values(rows));
  }, [w]);

  useEffect(() => {
    ref.current.style.position = `relative`;
    const hiddenTextHeight = ref.current.clientHeight;
    containerRef.current.style.height = `${hiddenTextHeight}px`;
    ref.current.style.position = `absolute`;
  }, [w]);

  return (
    <StyledAnimateTextRows ref={containerRef}>
      <HiddenText ref={ref} tabIndex={-1}>
        {children}
      </HiddenText>
      <Text>
        {rows &&
          rows.map((row, i) => (
            <motion.span
              key={i}
              {...motionProps(i, containerRef)}
              style={{ display: "block" }}
            >
              {row.join(" ")}
            </motion.span>
          ))}
      </Text>
    </StyledAnimateTextRows>
  );
};

export default AnimateTextRows;
