import React, { ReactNode, useEffect, useState } from "react";
import {
  AutoSliderItem,
  Indicator,
  Indicators,
  SliderItems,
  StyledAutoSlider,
} from "./StyledAutoSlider";
import { AnimatePresence, useAnimationControls } from "framer-motion";

interface AutoSliderProps {
  list: ReactNode[];
  interval?: number;
}

// TODO solve different heights of the list items

const AutoSlider = ({ list, interval = 3000 }: AutoSliderProps) => {
  const [index, setindex] = useState<number>(0);
  const controls = useAnimationControls();
  const ref = React.useRef<HTMLDivElement>(null);

  const changeIndex = (i: number) => {
    setindex(i);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = index + 1;
      if (nextIndex === list.length) {
        changeIndex(0);
        return;
      }
      changeIndex(nextIndex);
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [index, ref.current]);

  return (
    <StyledAutoSlider>
      <SliderItems animate={controls} ref={ref}>
        <AnimatePresence mode={"popLayout"}>
          <AutoSliderItem key={index}>{list[index]}</AutoSliderItem>
        </AnimatePresence>
      </SliderItems>
      <Indicators>
        {list.map((_, i) => (
          <Indicator
            key={i}
            className={i === index ? "active" : ""}
            animate={{ opacity: i === index ? 1 : 0.1 }}
            transition={{ duration: 0.7 }}
          />
        ))}
      </Indicators>
    </StyledAutoSlider>
  );
};

export default AutoSlider;
